const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(a=true){
      this.a = a;
      this.alphaArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }
  encrypt(message, key) {  
      if (message === undefined || key === undefined) throw new Error();
      let alphaLength = this.alphaArray.length;
      let keyArr = key.toUpperCase().split('');
      let keyIndexArr = 0;
      let result = message.toUpperCase().split('').map(item => {
          if (this.alphaArray.includes(item)){
              let keyIndex = this.alphaArray.indexOf(keyArr[keyIndexArr]);           
              let mesgEnscriptIndex = (keyIndex + this.alphaArray.indexOf(item)) % alphaLength;
              keyIndexArr = ++keyIndexArr % keyArr.length;           
              return this.alphaArray[mesgEnscriptIndex];
          }
          return item;
      });
      return this.a ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
      if (encryptedMessage === undefined || key === undefined) throw new Error();
      let alphaLength = this.alphaArray.length;
      let keyArr = key.toUpperCase().split('');
      let keyIndexArr = 0;
      let result = encryptedMessage.toUpperCase().split('').map(item => {
          if (this.alphaArray.includes(item)) {
              let keyIndex = this.alphaArray.indexOf(keyArr[keyIndexArr]);           
              let mesgEnscriptIndex = (this.alphaArray.indexOf(item) - keyIndex);
              if(mesgEnscriptIndex < 0) mesgEnscriptIndex += alphaLength
              keyIndexArr = ++keyIndexArr % keyArr.length;           
              return this.alphaArray[mesgEnscriptIndex];
          }
          return item;
      });
      return this.a ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
