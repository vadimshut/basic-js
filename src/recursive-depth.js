const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, arrResult = []) {
      arrResult.push(count)
      for(let i = 0; i < arr.length; i++){
          if(Array.isArray(arr[i])){
              this.calculateDepth(arr[i], count+1, arrResult)
          }
      }
      arrResult.sort((a,b) => b-a)
      return arrResult[0]
  }

};