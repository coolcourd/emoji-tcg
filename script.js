/* --- DATABASE --- */
const CARDS = [
    { id: 1, type: 'mon', name: "Magma Dino", emoji: "🦖", hp: 120, dmg: 40, cost: 2, retreat: 1, atk: "Flare Up", desc: "A fierce bite that may leave the enemy Burning.", effect: 'burn', atk2: "Inferno Blast", dmg2: 70, cost2: 2, desc2: "Devastating fire attack that always Burns.", effect2: 'burn' },
    { id: 2, type: 'mon', name: "Zap Mouse", emoji: "🐭", hp: 70, dmg: 50, cost: 1, retreat: 1, atk: "Spark", desc: "Low health but incredibly fast electric shocks.", effect: 'para' },
    { id: 3, type: 'mon', name: "Stone Guard", emoji: "🗿", hp: 180, dmg: 20, cost: 2, retreat: 3, atk: "Heavy Slam", desc: "Massive defense. Very heavy and hard to retreat.", effect: null, atk2: "Boulder Crush", dmg2: 60, cost2: 2, desc2: "Overwhelming stone attack.", effect2: null },
    { id: 4, type: 'mon', name: "Frost Owl", emoji: "🦉", hp: 80, dmg: 25, cost: 2, retreat: 1, atk: "Ice Wind", desc: "Freezing winds that can Paralyze the foe.", effect: 'para' },
    { id: 5, type: 'mon', name: "Cactus King", emoji: "🌵", hp: 140, dmg: 30, cost: 1, retreat: 2, atk: "Prickle", desc: "Sharp needles that cause persistent Burn.", effect: 'burn', atk2: "Spike Storm", dmg2: 55, cost2: 1, desc2: "Barrage of needles with guaranteed Burn.", effect2: 'burn' },
    { id: 6, type: 'item', name: "Turbo Charge", emoji: "🔋", desc: "Instantly adds 2 Energy to your pool.", func: (p) => p.energy += 2 },
    { id: 7, type: 'item', name: "Mega Med", emoji: "💊", desc: "Heals your Active monster for 60 HP.", func: (p) => { if(p.active) p.active.hp += 60 } },
    { id: 8, type: 'item', name: "Switch", emoji: "🔃", desc: "Your next Retreat this turn costs 0 energy.", func: (p) => p.freeRetreat = true },
    { id: 9, type: 'mon', name: "Alien Tech", emoji: "🛸", hp: 90, dmg: 40, cost: 1, retreat: 1, atk: "Beam", desc: "Technology from beyond. High efficiency.", effect: null },
    { id: 10, type: 'mon', name: "Shadow Cat", emoji: "🐈‍⬛", hp: 110, dmg: 30, cost: 2, retreat: 1, atk: "Night Slash", desc: "Strikes from shadows for clean damage.", effect: null },
    
    // New Monsters - Low Cost (1 Energy)
    { id: 11, type: 'mon', name: "Fire Bug", emoji: "🔥", hp: 60, dmg: 35, cost: 1, retreat: 1, atk: "Ember", desc: "Small but fierce. Quick burning attacks.", effect: 'burn' },
    { id: 12, type: 'mon', name: "Wave Dancer", emoji: "🌊", hp: 85, dmg: 30, cost: 1, retreat: 1, atk: "Splash", desc: "Graceful water creature with fluid movements.", effect: null },
    { id: 13, type: 'mon', name: "Storm Bird", emoji: "⚡", hp: 75, dmg: 45, cost: 1, retreat: 1, atk: "Thunder", desc: "Lightning-fast aerial strikes.", effect: 'para', atk2: "Lightning Strike", dmg2: 65, cost2: 1, desc2: "Powerful bolt that always Paralyzes.", effect2: 'para' },
    { id: 14, type: 'mon', name: "Rocket Pup", emoji: "🚀", hp: 80, dmg: 40, cost: 1, retreat: 1, atk: "Boost", desc: "Mechanical companion with jet propulsion.", effect: null },
    { id: 15, type: 'mon', name: "Ninja Star", emoji: "⭐", hp: 65, dmg: 50, cost: 1, retreat: 1, atk: "Shuriken", desc: "Swift and deadly precision strikes.", effect: null },
    
    // New Monsters - Medium Cost (2 Energy)
    { id: 16, type: 'mon', name: "Dragon Lord", emoji: "🐲", hp: 140, dmg: 50, cost: 2, retreat: 2, atk: "Dragon Rage", desc: "Ancient power with scorching breath.", effect: 'burn', atk2: "Ancient Wrath", dmg2: 90, cost2: 3, desc2: "Legendary dragon fury that devastates foes.", effect2: 'burn' },
    { id: 17, type: 'mon', name: "Crystal Wolf", emoji: "🔮", hp: 120, dmg: 35, cost: 2, retreat: 1, atk: "Mystic Howl", desc: "Magical beast with crystalline fur.", effect: 'para' },
    { id: 18, type: 'mon', name: "Iron Bull", emoji: "🛡️", hp: 160, dmg: 25, cost: 2, retreat: 3, atk: "Charge", desc: "Heavily armored with devastating ram.", effect: null },
    { id: 19, type: 'mon', name: "Phantom Wisp", emoji: "👻", hp: 100, dmg: 40, cost: 2, retreat: 1, atk: "Haunt", desc: "Ethereal being from another realm.", effect: 'para' },
    { id: 20, type: 'mon', name: "Volcano Beast", emoji: "🌋", hp: 150, dmg: 45, cost: 2, retreat: 2, atk: "Eruption", desc: "Living lava with explosive temper.", effect: 'burn' },
    
    // New Monsters - High Cost (3 Energy)
    { id: 21, type: 'mon', name: "Titan Golem", emoji: "⛰️", hp: 200, dmg: 30, cost: 3, retreat: 4, atk: "Earthquake", desc: "Colossal stone guardian. Nearly immovable.", effect: null, atk2: "Mountain Crush", dmg2: 75, cost2: 2, desc2: "Massive attack that shakes the earth.", effect2: null },
    { id: 22, type: 'mon', name: "Cyber Dragon", emoji: "🤖", hp: 130, dmg: 60, cost: 3, retreat: 1, atk: "Data Beam", desc: "Advanced AI with devastating firepower.", effect: null, atk2: "System Override", dmg2: 100, cost2: 3, desc2: "Ultimate cyber attack that may Paralyze.", effect2: 'para' },
    { id: 23, type: 'mon', name: "Phoenix King", emoji: "🔥", hp: 110, dmg: 55, cost: 3, retreat: 1, atk: "Rebirth Flame", desc: "Legendary firebird with eternal flames.", effect: 'burn', atk2: "Phoenix Nova", dmg2: 80, cost2: 2, desc2: "Explosive rebirth that always Burns.", effect2: 'burn' },
    
    // Speed Demons (0 Energy - Weak but Free)
    { id: 24, type: 'mon', name: "Spark Fly", emoji: "✨", hp: 40, dmg: 20, cost: 0, retreat: 1, atk: "Quick Zap", desc: "Tiny but free to deploy instantly.", effect: null },
    { id: 25, type: 'mon', name: "Wind Spirit", emoji: "💨", hp: 50, dmg: 15, cost: 0, retreat: 1, atk: "Gust", desc: "Ethereal and costs no energy.", effect: null },
    
    // New Items - Energy Management
    { id: 26, type: 'item', name: "Solar Panel", emoji: "☀️", desc: "Gain 1 Energy at the start of next 3 turns.", func: (p) => p.solarTurns = 3 },
    { id: 27, type: 'item', name: "Energy Drink", emoji: "⚡", desc: "Instantly adds 1 Energy to your pool.", func: (p) => p.energy += 1 },
    { id: 28, type: 'item', name: "Power Bank", emoji: "🔋", desc: "Gain 3 Energy but skip your next draw.", func: (p) => { p.energy += 3; p.skipDraw = true } },
    
    // New Items - Healing
    { id: 29, type: 'item', name: "First Aid", emoji: "🏥", desc: "Heals your Active monster for 40 HP.", func: (p) => { if(p.active) p.active.hp += 40 } },
    { id: 30, type: 'item', name: "Revive Potion", emoji: "🧪", desc: "Heals all monsters on your bench for 30 HP.", func: (p) => p.bench.forEach(m => m.hp += 30) },
    { id: 31, type: 'item', name: "Phoenix Down", emoji: "🪶", desc: "Fully heals your Active monster.", func: (p) => { if(p.active) p.active.hp = p.active.maxHp } },
    
    // New Items - Tactical
    { id: 32, type: 'item', name: "Smoke Bomb", emoji: "💨", desc: "Opponent's next attack misses.", func: (p) => p.dodge = true },
    { id: 33, type: 'item', name: "Power Glove", emoji: "🥊", desc: "Your next attack deals double damage.", func: (p) => p.doubleDamage = true },
    { id: 34, type: 'item', name: "Shield Wall", emoji: "🛡️", desc: "Reduce all damage taken by 20 this turn.", func: (p) => p.shield = 20 },
    { id: 35, type: 'item', name: "Antidote", emoji: "💉", desc: "Removes all status effects from Active.", func: (p) => { if(p.active) p.active.status = null } },
    { id: 36, type: 'item', name: "Lucky Coin", emoji: "🪙", desc: "Draw 2 extra cards immediately.", func: (p) => p.extraDraw = 2 },
    { id: 37, type: 'item', name: "Time Warp", emoji: "⏰", desc: "Take another turn after this one.", func: (p) => p.extraTurn = true },
    { id: 38, type: 'item', name: "Recall Device", emoji: "📱", desc: "Return a monster from bench to hand.", func: (p) => p.canRecall = true }
];

let playerDeck = JSON.parse(localStorage.getItem('v2_deck')) || [1,2,3,6,7,1,2,5,8,9];
let state = {};

/* --- AUDIO --- */
const ctx = new (window.AudioContext || window.webkitAudioContext)();
function playSfx(f, t, d) {
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = t; o.frequency.value = f; g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + d);
    o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + d);
}

// Background Music System
let currentAudio = null;

function stopMusic() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

function playMenuMusic() {
    stopMusic();
    currentAudio = new Audio('menu.mp3');
    currentAudio.loop = true;
    currentAudio.volume = 0.3;
    currentAudio.play().catch(e => console.log('Audio play failed:', e));
}

function playBattleMusic() {
    stopMusic();
    currentAudio = new Audio('battle.mp3');
    currentAudio.loop = true;
    currentAudio.volume = 0.4;
    currentAudio.play().catch(e => console.log('Audio play failed:', e));
}

let currentTutorialPage = 1;
const totalTutorialPages = 5;

function tutorialNav(direction) {
    currentTutorialPage += direction;
    
    if (currentTutorialPage < 1) currentTutorialPage = 1;
    if (currentTutorialPage > totalTutorialPages) currentTutorialPage = totalTutorialPages;
    
    // Hide all tutorial pages
    for(let i = 1; i <= totalTutorialPages; i++) {
        document.getElementById(`tut-${i}`).classList.add('hidden');
    }
    
    // Show current page
    document.getElementById(`tut-${currentTutorialPage}`).classList.remove('hidden');
    
    // Update counter
    document.getElementById('tut-counter').innerText = `${currentTutorialPage} / ${totalTutorialPages}`;
    
    // Update button states
    document.getElementById('tut-prev').disabled = currentTutorialPage === 1;
    document.getElementById('tut-next').disabled = currentTutorialPage === totalTutorialPages;
    
    playSfx(400, 'sine', 0.1);
}

/* --- DECK BUILDER --- */
function initBuilder() {
    const cat = document.getElementById('catalog'); cat.innerHTML = '';
    CARDS.forEach(c => {
        const num = playerDeck.filter(id => id === c.id).length;
        const div = document.createElement('div');
        div.innerHTML = renderCardHTML(c, false, num);
        const cardElement = div.firstElementChild;
        
        // Left click to add card
        cardElement.onclick = () => {
            if(playerDeck.length < 10) {
                playerDeck.push(c.id);
                playSfx(600, 'sine', 0.1);
                initBuilder();
            }
        };
        
        // Right click to remove card
        cardElement.oncontextmenu = (e) => {
            e.preventDefault(); // Prevent context menu
            const cardIndex = playerDeck.indexOf(c.id);
            if(cardIndex !== -1) {
                playerDeck.splice(cardIndex, 1);
                playSfx(400, 'sine', 0.1);
                initBuilder();
            }
        };
        
        // Add visual feedback for right-click
        cardElement.title = `Left click: Add to deck | Right click: Remove from deck`;
        
        cat.appendChild(cardElement);
    });
    document.getElementById('count').innerText = playerDeck.length;
}
function clearDeck() { playerDeck = []; initBuilder(); }
function generateRandomDeck() {
    // Clear current deck
    playerDeck = [];
    
    // Get all 1-energy monsters to ensure at least one is included
    const oneEnergyMonsters = CARDS.filter(c => c.type === 'mon' && c.cost === 1);
    const otherCards = CARDS.filter(c => !(c.type === 'mon' && c.cost === 1));
    
    // Add at least one 1-energy monster
    const randomOneEnergy = oneEnergyMonsters[Math.floor(Math.random() * oneEnergyMonsters.length)];
    playerDeck.push(randomOneEnergy.id);
    
    // Fill the remaining 9 slots with random cards from all available cards
    const allCards = [...CARDS];
    for(let i = 0; i < 9; i++) {
        const randomCard = allCards[Math.floor(Math.random() * allCards.length)];
        playerDeck.push(randomCard.id);
    }
    
    // Refresh the deck builder display
    initBuilder();
    playSfx(800, 'triangle', 0.3);
}
function saveDeck() { localStorage.setItem('v2_deck', JSON.stringify(playerDeck)); showScreen('menu'); }

/* --- BATTLE ENGINE --- */
function startGame() {
    if(playerDeck.length < 10) return alert("Select 10 cards!");
    
    // Check for at least one 1-energy monster requirement
    const deckCards = playerDeck.map(id => CARDS.find(c => c.id === id));
    const oneEnergyMonsters = deckCards.filter(c => c.type === 'mon' && c.cost === 1);
    if(oneEnergyMonsters.length === 0) {
        return alert("Your deck must contain at least 1 monster with ⚡1 energy cost!");
    }
    
    showScreen('battle');
    playBattleMusic();
    state = {
        turn: 1,
        p1: { energy: 1, score: 0, hand: [], active: null, bench: [], deck: shuffle([...playerDeck]), freeRetreat: false },
        p2: { energy: 1, score: 0, hand: [], active: null, bench: [], deck: Array(10).fill(0).map(()=>CARDS[Math.floor(Math.random()*CARDS.length)].id) },
        over: false
    };
    
    // Guarantee starting hand has at least one 1-energy monster
    guaranteeOneEnergyMonster(1);
    guaranteeOneEnergyMonster(2);
    
    // Draw remaining cards normally
    for(let i=0; i<2; i++) { draw(1); draw(2); }
    
    // Start the first turn properly
    updateUI();
    log("Your turn! Play monsters and items, then attack or end turn.");
}

function guaranteeOneEnergyMonster(pNum) {
    const p = state[`p${pNum}`];
    
    // Find all 1-energy monsters in deck
    const oneEnergyIndices = [];
    for(let i = 0; i < p.deck.length; i++) {
        const cardData = CARDS.find(c => c.id === p.deck[i]);
        if(cardData && cardData.type === 'mon' && cardData.cost === 1) {
            oneEnergyIndices.push(i);
        }
    }
    
    if(oneEnergyIndices.length > 0) {
        // Pick a random 1-energy monster and move it to hand
        const randomIndex = oneEnergyIndices[Math.floor(Math.random() * oneEnergyIndices.length)];
        const cardId = p.deck[randomIndex];
        const cardData = CARDS.find(c => c.id === cardId);
        // Create a proper copy of the card with all properties, preserving functions
        const cardCopy = Object.assign({}, cardData);
        cardCopy.status = null;
        cardCopy.maxHp = cardData.hp;
        p.hand.push(cardCopy);
        p.deck.splice(randomIndex, 1);
    } else {
        // Fallback: draw normally if no 1-energy monsters (shouldn't happen after validation)
        draw(pNum);
    }
    
    if(pNum === 1) renderPlayerHand();
}

function draw(pNum) {
    const p = state[`p${pNum}`];
    if(p.deck.length > 0) {
        const id = p.deck.pop();
        const cardData = CARDS.find(c => c.id === id);
        if(cardData) {
            // Create a proper copy of the card with all properties, preserving functions
            const cardCopy = Object.assign({}, cardData);
            cardCopy.status = null;
            cardCopy.maxHp = cardData.hp;
            p.hand.push(cardCopy);
        }
    }
    if(pNum === 1) renderPlayerHand();
}

function renderCardHTML(c, isMini = false, deckCount = null) {
    const typeClass = c.type === 'item' ? 'item-type' : '';
    const miniClass = isMini ? 'mini' : '';
    const statusClass = c.status ? `status-${c.status}` : '';
    const inDeckClass = (deckCount !== null && deckCount > 0) ? 'in-deck' : '';
    const retreatTag = c.type === 'mon' ? `RETREAT: ${c.retreat}` : 'ITEM';
    const costTag = c.type === 'mon' ? `⚡${c.cost}` : 'ITM';
    
    // For deck builder, show energy cost prominently and deck count as secondary info
    let energyTagContent;
    if (deckCount !== null) {
        energyTagContent = costTag;
    } else {
        energyTagContent = costTag;
    }

    return `
        <div class="card ${typeClass} ${miniClass} ${statusClass} ${inDeckClass}">
            <div class="energy-tag">${energyTagContent}</div>
            ${deckCount !== null ? `<div style="position: absolute; top: -8px; right: -8px; background: #333; color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold;">×${deckCount}</div>` : ''}
            <div class="name">${c.name}</div>
            <div class="emoji">${c.emoji}</div>
            <div class="desc">
                <b>${c.atk || ''}</b> ${c.desc}
                ${c.atk2 ? `<br><b>${c.atk2} (${c.cost2}⚡)</b> ${c.desc2}` : ''}
            </div>
            ${c.type === 'mon' ? `
                <div class="stats">
                    <span style="color:var(--hp)">HP ${c.hp}</span>
                    <span style="color:var(--accent)">ATK ${c.dmg}${c.dmg2 ? `/${c.dmg2}` : ''}</span>
                </div>
                <div style="font-size:8px; color:#666; margin-top:2px;">${retreatTag}</div>
            ` : ''}
        </div>
    `;
}

function renderPlayerHand() {
    const container = document.getElementById('player-hand');
    container.innerHTML = '';
    state.p1.hand.forEach((card, i) => {
        const div = document.createElement('div');
        div.innerHTML = renderCardHTML(card, true);
        div.firstElementChild.onclick = () => playCard(i);
        container.appendChild(div.firstElementChild);
    });
}

function playCard(idx) {
    if(state.turn !== 1) return;
    const p = state.p1;
    const card = p.hand[idx];

    if(card.type === 'item') {
        card.func(p);
        p.hand.splice(idx, 1);
        playSfx(800, 'triangle', 0.2);
        log(`Used ${card.name}!`);
        updateUI();
    } else {
        if(!p.active) {
            if(p.energy >= card.cost) {
                p.energy -= card.cost;
                p.active = p.hand.splice(idx, 1)[0];
                playSfx(400, 'square', 0.2);
                log(`${card.name} enters battle!`);
                updateUI(); // Move updateUI after all state changes
            } else {
                log("Not enough energy!");
            }
        } else if(p.bench.length < 3) {
            if(p.energy >= card.cost) {
                p.energy -= card.cost;
                p.bench.push(p.hand.splice(idx, 1)[0]);
                playSfx(300, 'square', 0.2);
                log(`${card.name} waits on bench!`);
                updateUI(); // Move updateUI after all state changes
            } else {
                log("Not enough energy!");
            }
        } else {
            log("Bench is full!");
        }
    }
}

function retreat(benchIdx) {
    if(state.turn !== 1 || !state.p1.active || state.p1.bench.length === 0) {
        log("Cannot retreat right now!");
        return;
    }
    
    const p = state.p1;
    const cost = p.freeRetreat ? 0 : p.active.retreat;
    
    if(p.energy < cost) {
        log(`Need ${cost} energy to retreat!`);
        return;
    }
    
    // Perform the retreat
    p.energy -= cost;
    p.freeRetreat = false;
    p.active.status = null; // Clearing status on retreat
    
    // Swap active with bench monster
    const oldActive = p.active;
    p.active = p.bench[benchIdx];
    p.bench[benchIdx] = oldActive;
    
    playSfx(600, 'sine', 0.3);
    log(`Retreated ${oldActive.name}!`);
    updateUI();
}

function handleAttack(attackNum = 1) {
    if(state.turn !== 1 || !state.p1.active || !state.p2.active) return;
    if(state.p1.active.status === 'para') return log("Paralyzed! Cannot attack.");
    
    const attacker = state.p1.active;
    let energyCost = 0;
    let damage, attackName, effect;
    
    if(attackNum === 2 && attacker.atk2) {
        energyCost = attacker.cost2 || 0;
        damage = attacker.dmg2;
        attackName = attacker.atk2;
        effect = attacker.effect2;
    } else {
        damage = attacker.dmg;
        attackName = attacker.atk;
        effect = attacker.effect;
    }
    
    // Check if player has enough energy for the attack
    if(state.p1.energy < energyCost) {
        log(`Not enough energy! Need ${energyCost}, have ${state.p1.energy}`);
        return;
    }
    
    // Deduct energy cost
    state.p1.energy -= energyCost;
    
    executeAtk({...attacker, dmg: damage, atk: attackName, effect: effect}, state.p2.active, 2);
    endTurn();
}

function executeAtk(atk, def, defNum) {
    // Ensure attacker is a monster with valid stats
    if(!atk || atk.type !== 'mon' || !atk.dmg || !atk.atk) {
        log("Invalid attack!");
        return;
    }
    
    // Get target element for animations
    const targetSlot = defNum === 1 ? document.getElementById('player-active') : document.getElementById('cpu-active');
    
    // Attack animation
    const attackerSlot = defNum === 1 ? document.getElementById('cpu-active') : document.getElementById('player-active');
    attackerSlot.classList.add('attack-animation');
    setTimeout(() => attackerSlot.classList.remove('attack-animation'), 500);
    
    // Apply damage
    const damage = atk.dmg;
    def.hp -= damage;
    
    // Show damage indicator
    showDamageIndicator(targetSlot, damage);
    
    // Damage flash animation on target
    targetSlot.classList.add('damage-animation');
    setTimeout(() => targetSlot.classList.remove('damage-animation'), 800);
    
    // Check for status effect
    let statusApplied = false;
    if(atk.effect && Math.random() > 0.6) {
        def.status = atk.effect;
        statusApplied = true;
        
        // Status effect animation and indicator
        setTimeout(() => {
            targetSlot.classList.add('status-animation');
            showStatusIndicator(targetSlot, atk.effect);
            setTimeout(() => targetSlot.classList.remove('status-animation'), 600);
        }, 400);
    }
    
    // Enhanced logging with damage and status info
    let logMessage = `${atk.name} used ${atk.atk} for ${damage} damage!`;
    if(statusApplied) {
        logMessage += ` ${atk.effect === 'burn' ? '🔥 BURNED!' : '⚡ PARALYZED!'}`;
    }
    log(logMessage);
    
    playSfx(150, 'sawtooth', 0.2);

    if(def.hp <= 0) {
        state[`p${state.turn}`].score++;
        state[`p${defNum}`].active = null;
        
        // Knockout effect
        setTimeout(() => {
            showDamageIndicator(targetSlot, "KO!", "#ff0000", 1.5);
            log("💥 KNOCKOUT! +1 Point!");
        }, 600);
        
        // Auto-replace from bench
        if(state[`p${defNum}`].bench.length > 0) {
            state[`p${defNum}`].active = state[`p${defNum}`].bench.shift();
        }
    }
    
    setTimeout(() => {
        updateUI();
        checkWin();
    }, 800);
}

function startTurn() {
    const p = state[`p${state.turn}`];
    p.energy++;
    draw(state.turn);
    if(p.active && p.active.status === 'burn') {
        p.active.hp -= 20;
        log("🔥 Burn damage: 20 HP lost!");
        
        // Show burn damage indicator
        const targetSlot = state.turn === 1 ? 
            document.getElementById('player-active') : 
            document.getElementById('cpu-active');
        showDamageIndicator(targetSlot, 20, "#ff4500");
        targetSlot.classList.add('damage-animation');
        setTimeout(() => targetSlot.classList.remove('damage-animation'), 800);
    }
    updateUI();
    if(state.turn === 2) setTimeout(cpuLogic, 1000);
}

function endTurn() {
    if(state.over) return;
    
    // Check for losing condition - no monsters in play
    checkNoMonstersLoss();
    if(state.over) return;
    
    state.turn = state.turn === 1 ? 2 : 1;
    startTurn();
}

function cpuLogic() {
    const p = state.p2;
    
    // First, play any item cards
    for(let i = p.hand.length - 1; i >= 0; i--) {
        const card = p.hand[i];
        if(card.type === 'item') {
            card.func(p);
            p.hand.splice(i, 1);
            log(`CPU used ${card.name}!`);
            break; // Only use one item per turn
        }
    }
    
    // Then place monsters
    if(!p.active) {
        const monsterCards = p.hand.filter(card => card.type === 'mon' && p.energy >= card.cost);
        if(monsterCards.length > 0) {
            const cardToPlay = monsterCards[0];
            const handIndex = p.hand.indexOf(cardToPlay);
            p.energy -= cardToPlay.cost;
            p.active = p.hand.splice(handIndex, 1)[0];
            log(`CPU summoned ${cardToPlay.name}!`);
        }
    }
    
    if(p.bench.length < 2) {
        const monsterCards = p.hand.filter(card => card.type === 'mon' && p.energy >= card.cost);
        if(monsterCards.length > 0) {
            const cardToPlay = monsterCards[0];
            const handIndex = p.hand.indexOf(cardToPlay);
            p.energy -= cardToPlay.cost;
            p.bench.push(p.hand.splice(handIndex, 1)[0]);
            log(`CPU benched ${cardToPlay.name}!`);
        }
    }

    setTimeout(() => {
        if(p.active && state.p1.active && p.active.status !== 'para' && p.active.type === 'mon') {
            // CPU considers secondary attack if it has enough energy and the attack exists
            if(p.active.atk2 && p.energy >= p.active.cost2 && Math.random() > 0.4) {
                p.energy -= p.active.cost2;
                executeAtk({...p.active, dmg: p.active.dmg2, atk: p.active.atk2, effect: p.active.effect2}, state.p1.active, 1);
                log(`CPU used ${p.active.atk2}!`);
            } else {
                executeAtk(p.active, state.p1.active, 1);
            }
        }
        setTimeout(endTurn, 600);
    }, 500);
}

/* --- HELPERS --- */
function updateUI() {
    document.getElementById('p-nrg').innerText = state.p1.energy;
    document.getElementById('p-scr').innerText = state.p1.score;
    document.getElementById('cpu-score').innerText = state.p2.score;
    renderSlot('player-active', state.p1.active);
    renderSlot('cpu-active', state.p2.active);
    
    const pb = document.getElementById('player-bench'); pb.innerHTML = '';
    state.p1.bench.forEach((c, i) => {
        const d = document.createElement('div');
        d.innerHTML = renderCardHTML(c, true);
        const cardElement = d.firstElementChild;
        cardElement.onclick = () => retreat(i);
        cardElement.style.cursor = 'pointer';
        cardElement.title = `Click to retreat (Cost: ${c.retreat} energy)`;
        pb.appendChild(cardElement);
    });

    const cb = document.getElementById('cpu-bench'); cb.innerHTML = '';
    state.p2.bench.forEach(c => {
        const d = document.createElement('div'); d.innerHTML = renderCardHTML(c, true);
        cb.appendChild(d.firstElementChild);
    });

    updateAttackButtons();
    renderPlayerHand();
}

function showDamageIndicator(targetElement, damage, color = "#ff4444", scale = 1) {
    const indicator = document.createElement('div');
    indicator.className = 'damage-indicator';
    indicator.style.color = color;
    indicator.style.fontSize = `${24 * scale}px`;
    indicator.textContent = typeof damage === 'number' ? `-${damage}` : damage;
    
    const rect = targetElement.getBoundingClientRect();
    indicator.style.left = `${rect.left + rect.width/2}px`;
    indicator.style.top = `${rect.top + rect.height/2}px`;
    indicator.style.position = 'fixed';
    
    document.body.appendChild(indicator);
    
    setTimeout(() => {
        if(indicator.parentNode) {
            indicator.parentNode.removeChild(indicator);
        }
    }, 1500);
}

function showStatusIndicator(targetElement, status) {
    const indicator = document.createElement('div');
    indicator.className = 'status-indicator';
    indicator.style.color = status === 'burn' ? '#ff4500' : '#ffff00';
    indicator.textContent = status === 'burn' ? '🔥 BURN' : '⚡ PARALYZED';
    
    const rect = targetElement.getBoundingClientRect();
    indicator.style.left = `${rect.left + rect.width/2}px`;
    indicator.style.top = `${rect.top + 20}px`;
    indicator.style.position = 'fixed';
    
    document.body.appendChild(indicator);
    
    setTimeout(() => {
        if(indicator.parentNode) {
            indicator.parentNode.removeChild(indicator);
        }
    }, 1200);
}

function updateAttackButtons() {
    const atkBtn = document.getElementById('atk-btn');
    const atk2Btn = document.getElementById('atk2-btn');
    
    if(state.turn === 1 && state.p1.active && state.p2.active) {
        atkBtn.style.display = 'inline-block';
        atkBtn.innerText = state.p1.active.atk.toUpperCase();
        atkBtn.disabled = false;
        
        if(state.p1.active.atk2) {
            atk2Btn.style.display = 'inline-block';
            atk2Btn.innerText = `${state.p1.active.atk2.toUpperCase()} (${state.p1.active.cost2}💪)`;
            // Disable if not enough energy
            atk2Btn.disabled = state.p1.energy < state.p1.active.cost2;
        } else {
            atk2Btn.style.display = 'none';
        }
    } else {
        atkBtn.style.display = 'none';
        atk2Btn.style.display = 'none';
    }
}

function renderSlot(id, card) {
    const el = document.getElementById(id);
    if(!el) return; // Safety check
    
    if(!card) { 
        el.innerHTML = 'EMPTY';
        el.style.color = '#666';
        el.style.fontSize = '0.8rem';
        return; 
    }
    
    // Clear any previous styling
    el.style.color = '';
    el.style.fontSize = '';
    
    // Use mini cards for active slots to ensure they fit properly
    el.innerHTML = renderCardHTML(card, true);
}

function checkWin() {
    if(state.p1.score >= 3 || state.p2.score >= 3) {
        state.over = true;
        alert(state.p1.score >= 3 ? "VICTORY!" : "DEFEAT!");
        stopMusic();
        location.reload();
    }
}

function checkNoMonstersLoss() {
    // Check if current player has no monsters in play
    const currentPlayer = state[`p${state.turn}`];
    const hasActiveMonster = currentPlayer.active && currentPlayer.active.type === 'mon';
    const hasBenchMonsters = currentPlayer.bench.some(card => card.type === 'mon');
    
    if (!hasActiveMonster && !hasBenchMonsters) {
        state.over = true;
        const playerName = state.turn === 1 ? "Player" : "CPU";
        alert(`${playerName} loses - no monsters in play!`);
        if (state.turn === 1) {
            alert("DEFEAT!");
        } else {
            alert("VICTORY!");
        }
        stopMusic();
        location.reload();
    }
}

function forfeitGame() {
    if(confirm("Are you sure you want to forfeit this battle?")) {
        state.over = true;
        showScreen('menu');
    }
}

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }
function log(m) { document.getElementById('game-log').innerText = m; }

/* --- PARTICLE SYSTEM --- */
function initParticleSystem() {
    const container = document.getElementById('particle-container');
    if (!container) return;
    
    // Create floating particles
    function createParticle() {
        const particle = document.createElement('div');
        const types = ['ember', 'smoke', 'energy'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        particle.className = `particle ${type}`;
        
        // Random size and position
        const size = Math.random() * 8 + 2; // 2-10px
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 20 + 15; // 15-35s
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + 10) * 1000);
    }
    
    // Create smoke wisps
    function createSmokeWisp() {
        const wisp = document.createElement('div');
        wisp.className = 'smoke-wisp';
        
        wisp.style.left = Math.random() * 100 + '%';
        
        const duration = Math.random() * 15 + 20; // 20-35s
        wisp.style.animationDuration = duration + 's';
        wisp.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(wisp);
        
        setTimeout(() => {
            if (wisp.parentNode) {
                wisp.parentNode.removeChild(wisp);
            }
        }, (duration + 5) * 1000);
    }
    
    // Generate particles continuously
    setInterval(createParticle, 2000 + Math.random() * 3000); // Every 2-5s
    setInterval(createSmokeWisp, 3000 + Math.random() * 4000); // Every 3-7s
    
    // Initial particles
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, Math.random() * 5000);
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(createSmokeWisp, Math.random() * 8000);
    }
}

function showScreen(id) { 
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden')); 
    document.getElementById(id).classList.remove('hidden'); 
    
    // Music management
    if (id === 'battle') {
        if (!currentAudio || !currentAudio.src.includes('battle.mp3')) {
            playBattleMusic();
        }
    } else {
        if (!currentAudio || !currentAudio.src.includes('menu.mp3')) {
            playMenuMusic();
        }
    }
    
    if(id === 'deck-builder') {
        initBuilder();
    } else if(id === 'tutorial') {
        currentTutorialPage = 1;
        tutorialNav(0); // Reset to first page
    }
}

initBuilder();

// Initialize particle system immediately
function startParticleSystem() {
    // Create particle container
    const container = document.createElement('div');
    container.className = 'particle-container';
    container.id = 'particle-container';
    document.body.appendChild(container);
    
    // Initialize particle system
    initParticleSystem();
}

// Start particle system right away
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startParticleSystem);
} else {
    startParticleSystem();
}

// Start menu music on first user interaction
document.addEventListener('click', () => {
    if (!currentAudio) playMenuMusic();
}, { once: true });