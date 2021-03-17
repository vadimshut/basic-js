const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  function Options(repeatTimes = null, separator = '+', additionRepeatTimes = null, additionSeparator = '|', addition = '') {
    this.repeatTimes = repeatTimes;
    this.separator = separator;
    this.addition = addition;
    this.additionRepeatTimes = additionRepeatTimes;
    this.additionSeparator = additionSeparator;


    this.getSecondString = function() {
      let result ='';
      if (this.addition !== '' && this.additionRepeatTimes !== null ){
        for (let i = 0; i < this.additionRepeatTimes; i++){
          result = i == (this.additionRepeatTimes - 1) ? result + this.addition : result + this.addition + this.additionSeparator;
        };
        return result
      }
      else {return (this.addition !== null && this.additionRepeatTimes == null ) ? this.addition : ''
      };
    };

    this.getFirstString = function() {
      if (this.repeatTimes != null){
        result = '';
        for (let i = 0; i < this.repeatTimes; i++){
          result = i == (this.repeatTimes - 1) ? result + str + this.getSecondString() : result + str + this.getSecondString() + this.separator;
        };
        return result
      }
      else {return (str + this.getSecondString())}} ;
  };

  newOptions = new Options();

  for (let option in options){
    if (newOptions[option] !== undefined){
      newOptions[option] = options[option]
    }
  }
  return newOptions.getFirstString();
};
  
//Passing51. Failing: 0. Pending: 21   task5