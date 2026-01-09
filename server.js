const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Game rooms storage
const gameRooms = new Map();

// Player waiting queue
let waitingPlayers = [];

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  // Handle finding a game
  socket.on('findGame', (playerDeck) => {
    const player = {
      id: socket.id,
      socket: socket,
      deck: playerDeck
    };

    // Check if someone is waiting
    if (waitingPlayers.length > 0) {
      const opponent = waitingPlayers.shift();
      
      // Create new game room
      const roomId = `game_${Date.now()}`;
      const gameRoom = {
        id: roomId,
        players: [opponent, player],
        gameState: null,
        currentPlayer: 0
      };

      gameRooms.set(roomId, gameRoom);

      // Join both players to the room
      opponent.socket.join(roomId);
      player.socket.join(roomId);

      // Start the game
      startMultiplayerGame(gameRoom);

    } else {
      // Add to waiting queue
      waitingPlayers.push(player);
      socket.emit('waitingForOpponent');
    }
  });

  // Handle game actions
  socket.on('gameAction', (data) => {
    const room = findRoomByPlayer(socket.id);
    if (room) {
      // Validate it's the player's turn
      const playerIndex = room.players.findIndex(p => p.id === socket.id);
      if (playerIndex === room.currentPlayer) {
        
        // Broadcast action to opponent
        socket.to(room.id).emit('opponentAction', data);
        
        // Handle turn switching
        if (data.type === 'endTurn') {
          room.currentPlayer = room.currentPlayer === 0 ? 1 : 0;
          io.to(room.id).emit('turnChange', room.currentPlayer);
        } else if (data.type === 'attack') {
          // Attack ends turn
          room.currentPlayer = room.currentPlayer === 0 ? 1 : 0;
          io.to(room.id).emit('turnChange', room.currentPlayer);
        }
        
        // Log the action for debugging
        console.log(`Room ${room.id}: Player ${playerIndex} performed ${data.type}, now turn: ${room.currentPlayer}`);
      } else {
        // Invalid turn - notify player
        socket.emit('error', { message: 'Not your turn!' });
      }
    }
  });
  
  // Handle turn state requests
  socket.on('requestTurnState', () => {
    const room = findRoomByPlayer(socket.id);
    if (room) {
      socket.emit('turnChange', room.currentPlayer);
    }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
    
    // Remove from waiting queue
    waitingPlayers = waitingPlayers.filter(p => p.id !== socket.id);
    
    // Handle game room disconnection
    const room = findRoomByPlayer(socket.id);
    if (room) {
      socket.to(room.id).emit('opponentDisconnected');
      gameRooms.delete(room.id);
    }
  });
});

function findRoomByPlayer(playerId) {
  for (let room of gameRooms.values()) {
    if (room.players.some(p => p.id === playerId)) {
      return room;
    }
  }
  return null;
}

function startMultiplayerGame(room) {
  const [player1, player2] = room.players;
  
  // Notify both players the game is starting
  player1.socket.emit('gameStart', {
    playerIndex: 0,
    opponentId: player2.id,
    roomId: room.id,
    playerDeck: player1.deck,
    opponentDeck: player2.deck
  });
  
  player2.socket.emit('gameStart', {
    playerIndex: 1,
    opponentId: player1.id,
    roomId: room.id,
    playerDeck: player2.deck,
    opponentDeck: player1.deck
  });

  room.currentPlayer = 0; // Player 1 starts
  io.to(room.id).emit('turnChange', room.currentPlayer);
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Game available at http://localhost:${PORT}`);
});