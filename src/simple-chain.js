const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength(chain) {
    return this.chain.length;
  },
  addLink(value) {
    value = `( ${value} )`;
    this.chain.push(value);
    return this
  },

  removeLink(position) {
    if (typeof(position) !== 'number' || position < 1 || position >= this.getLength() ){
      this.chain = [];
      throw new Error('Position value is incorrect!!!');
    }
    this.chain.splice(position -1, 1)
    return this

  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;


//Passing55. Failing: 0. Pending: 17  task6