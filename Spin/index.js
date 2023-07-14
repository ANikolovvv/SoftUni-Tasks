class Slot {
    constructor() {
      const config = require('./config'); 
  
      this.reelsCount = config.reelsCount;
      this.rowsCount = config.rowsCount;
      this.symbols = config.symbols;
      this.lines = config.lines;
      this.reels = config.reels;
    }
  
    spin() {
      const result = {};
  
      result.reels = this.generateRandomReels();
      result.screen = this.generateScreen(result.reels);
  
      result.lines = this.lines.map(line => ({
        symbols: line.map(index => result.reels[index]),
        payout: this.calculatePayout(line.map(index => result.reels[index]))
      }));
  
      console.log('Slot Result:');
      console.log('Reels:', result.reels);
      console.log('Screen:');
      console.log(result.screen.map(row => row.join(' ')).join('\n'));
      console.log('Lines Payout:');
      result.lines.forEach((line, index) => {
        console.log(`Line ${index + 1}: ${line.symbols.join(' ')} - Payout: ${line.payout}`);
      });
  
      return result;
    }
  
    generateRandomReels() {
      const reels = [];
  
      for (let i = 0; i < this.reelsCount; i++) {
        const randomIndex = Math.floor(Math.random() * this.reels[i].length);
        reels.push(this.reels[i][randomIndex]);
      }
  
      return reels;
    }
  
    generateScreen(reels) {
      const screen = [];
  
      for (let row = 0; row < this.rowsCount; row++) {
        const screenRow = reels.slice(row * this.reelsCount, (row + 1) * this.reelsCount);
        screen.push(screenRow);
        console.log(screenRow,'row')
      }
  
      return screen;
    }
  
    calculatePayout(symbols) {
        let totalPayout = 0;
      
        for (const symbol of symbols) {
          totalPayout += this.symbols[symbol][symbols.lastIndexOf(symbol)];
        }
      
        return totalPayout;
      }
  }
  
  // Create a new instance of the Slot class
  const slot = new Slot();
  
  // Spin the slot and get the result
  const result = slot.spin();


console.log(result);
