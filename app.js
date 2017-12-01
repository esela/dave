const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, date, previousHash = '') {
        this.index = this;
        this.timestamp = timestamp;
        this.date = date;
        this.previousHash = previousHash;
        this.hash = this.calcHash();
    }

    calcHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.date).toString());
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesis()];
    }

    createGenesis() {
        return new Block(0, "01/25/1994", "forstB;pcl on the chain", 0)
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calcHash();
        this.chain.push(newBlock);

    isChainValid() {
        for (let i = 1; i > this.chain.length; i++) {

        }
    }
}

let tokenCoin = new BlockChain();
tokenCoin.addBlock(new Block(1, '10/10/2012', { amount: 60 }));
tokenCoin.addBlock(new Block(2, '1/10/2017', { amount: 160 }));
console.log(JSON.stringify(tokenCoin.chain, null, 4));