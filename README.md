# 🎮 Emoji TCG: Tactics

A tactical trading card game played entirely with emojis! Build your deck, deploy your monsters, and battle your way to victory in this fast-paced browser-based TCG.

![Game Preview](https://img.shields.io/badge/Game-Emoji%20TCG-ff0055?style=for-the-badge&logo=gamepad)
![Status](https://img.shields.io/badge/Status-Playable-2ecc71?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web%20Browser-00d4ff?style=for-the-badge)

## 🎯 Game Overview

Emoji TCG is a strategic card battle game where players build custom decks and engage in tactical combat. Your goal is simple: defeat your opponent by knocking out 3 of their monsters. But the path to victory requires careful planning, resource management, and strategic thinking!

### Key Features

- 🎴 **Custom Deck Building**: Create your perfect 10-card deck
- ⚡ **Energy System**: Manage your resources wisely each turn
- 🦖 **Monster Collection**: 25+ unique monsters with special abilities
- 🔋 **Tactical Items**: Game-changing support cards
- 🔥 **Status Effects**: Burn and Paralyze effects add strategic depth
- 🎨 **Beautiful UI**: Sleek dark theme with animated gradients

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/emoji-tcg.git
   cd emoji-tcg
   ```

2. **Open the game**:
   - Simply open `index.html` in your web browser
   - No installation or build process required!

3. **Start playing**:
   - Click "TUTORIAL" to learn the basics
   - Use "DECK BUILDER" to customize your deck
   - Click "START BATTLE" to begin fighting

## 📖 How to Play

### Basic Rules

- **Objective**: Knock out 3 of your opponent's monsters to win
- **Energy**: Gain 1 energy per turn, spend it to play monster cards
- **Active Monster**: Only your active monster can attack
- **Bench**: Store up to 3 backup monsters
- **Items**: Support cards that cost no energy

### Turn Structure

1. **Energy Phase**: Gain 1 energy
2. **Draw Phase**: Draw 1 card from your deck
3. **Action Phase**: Play cards, attack, or retreat
4. **End Phase**: Apply status effects and cleanup

### Card Types

#### 🦖 Monsters
- **Cost**: 0-3 energy to play
- **HP**: Health points (when reduced to 0, monster is knocked out)
- **Attack**: Damage dealt to opponent's active monster
- **Retreat**: Energy cost to switch out your active monster
- **Special Effects**: Some attacks inflict Burn or Paralyze

#### 🔋 Items
- **Cost**: Always free to play
- **Effects**: Instant benefits like healing, energy gain, or tactical advantages
- **One-time use**: Discarded after playing

### Status Effects

- **🔥 Burn**: Take 20 damage at the end of each turn
- **⚡ Paralyze**: 50% chance attacks will fail

## 🎴 Deck Building Guide

### Deck Requirements
- Exactly **10 cards** total
- Mix of monsters and items
- Consider energy curve and strategy

### Energy Costs
- **0 Energy**: Weak but free (Spark Fly, Wind Spirit)
- **1 Energy**: Fast attackers (Fire Bug, Storm Bird, Zap Mouse)
- **2 Energy**: Balanced powerhouses (Magma Dino, Dragon Lord, Stone Guard)
- **3 Energy**: Late-game threats (Titan Golem, Cyber Dragon, Phoenix King)

### Strategic Tips
- Balance low-cost and high-cost monsters
- Include healing items for sustainability
- Energy management items help play expensive cards
- Consider retreat costs when building

## 🎨 Technical Details

### File Structure
```
emoji-tcg/
├── index.html          # Game interface and HTML structure
├── styles.css          # Styling and animations
├── script.js           # Game logic and mechanics
└── README.md          # This file
```

### Technologies Used
- **HTML5**: Game structure and layout
- **CSS3**: Styling, animations, and responsive design
- **Vanilla JavaScript**: Game logic, AI, and interactions

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🃏 Card Database

The game features 34 unique cards:

### Monsters by Cost

**0 Energy (2 cards)**
- ✨ Spark Fly: 40 HP, 20 damage
- 💨 Wind Spirit: 50 HP, 15 damage

**1 Energy (10 cards)**
- 🐭 Zap Mouse: 70 HP, 50 damage (Paralyze)
- 🌵 Cactus King: 140 HP, 30 damage (Burn)
- 🛸 Alien Tech: 90 HP, 40 damage
- 🔥 Fire Bug: 60 HP, 35 damage (Burn)
- 🌊 Wave Dancer: 85 HP, 30 damage
- ⚡ Storm Bird: 75 HP, 45 damage (Paralyze)
- 🚀 Rocket Pup: 80 HP, 40 damage
- ⭐ Ninja Star: 65 HP, 50 damage

**2 Energy (8 cards)**
- 🦖 Magma Dino: 120 HP, 40 damage (Burn)
- 🗿 Stone Guard: 180 HP, 20 damage
- 🦉 Frost Owl: 80 HP, 25 damage (Paralyze)
- 🐈‍⬛ Shadow Cat: 110 HP, 30 damage
- 🐲 Dragon Lord: 140 HP, 50 damage (Burn)
- 🔮 Crystal Wolf: 120 HP, 35 damage (Paralyze)
- 🛡️ Iron Bull: 160 HP, 25 damage
- 👻 Phantom Wisp: 100 HP, 40 damage (Paralyze)
- 🌋 Volcano Beast: 150 HP, 45 damage (Burn)

**3 Energy (3 cards)**
- ⛰️ Titan Golem: 200 HP, 30 damage
- 🤖 Cyber Dragon: 130 HP, 60 damage
- 🔥 Phoenix King: 110 HP, 55 damage (Burn)

### Items (11 cards)
- 🔋 Turbo Charge: +2 Energy
- 💊 Mega Med: Heal 60 HP
- 🔃 Switch: Free retreat
- ☀️ Solar Panel: +1 Energy for 3 turns
- ⚡ Energy Drink: +1 Energy
- 🔋 Power Bank: +3 Energy, skip next draw
- 🏥 First Aid: Heal 40 HP
- 🧪 Revive Potion: Heal all bench monsters 30 HP
- 🪶 Phoenix Down: Full heal active monster
- 💨 Smoke Bomb: Opponent's next attack misses
- 🥊 Power Glove: Double damage on next attack
- 🛡️ Shield Wall: -20 damage this turn

## 🎯 Strategy Tips

### For Beginners
1. Start with low-cost monsters to get board presence early
2. Save energy for key turns when you can make big plays
3. Use healing items to keep your best monsters alive
4. Don't forget about retreat costs when planning turns

### Advanced Tactics
1. **Energy Curve**: Balance your deck between early, mid, and late-game threats
2. **Status Control**: Burn deals consistent damage; Paralyze can shut down big attackers
3. **Bench Management**: Keep threatening monsters ready to promote
4. **Item Timing**: Save powerful items for crucial moments

## 🏆 Contributing

Want to add new cards, features, or improvements? 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contribution
- New monster designs
- Additional status effects
- Sound effects and music
- Multiplayer functionality
- Tournament modes
- Card animations

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎮 Have Fun!

Emoji TCG is designed to be quick to learn but deep in strategy. Whether you're building the perfect aggressive deck or crafting a defensive control strategy, there's always room to improve and experiment.

**Happy battling!** 🔥⚡🦖

---

*Built with ❤️ and lots of ☕ by the Emoji TCG team*
