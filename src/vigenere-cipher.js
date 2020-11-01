const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine = 'true') {
    this.machine = machine;
  }
  
  encrypt(message, key) {
    let lenMessage = message.length;
    const lenKey = key.length;
    let res = '';
    let i = 0; 
    let j = 0;
    while (lenMessage--) {
      if (!/[a-zA-Z]/.test(message[i])) {
        res += message[i];
        ++j;
      } else {
      res += String.fromCharCode((message[i].toUpperCase().charCodeAt() + key[(i - j) % lenKey].toUpperCase().charCodeAt() - 130) % 26 + 65);
      }
      ++i;
    }
    return this.machine ? res : res.split('').reverse().join('');
  }    
  decrypt(message, key) {
    let lenMessage = message.length;
    const lenKey = key.length;
    let res = '';
    let i = 0; 
    let j = 0;
    while (lenMessage--) {
      if (!/[a-zA-Z]/.test(message[i])) {
        res += message[i];
        ++j;
      } else {
      res += String.fromCharCode(((message[i].toUpperCase().charCodeAt() - key[(i - j) % lenKey].toUpperCase().charCodeAt()) + 26) % 26 + 65);
      }
      ++i;
    }
    return this.machine ? res : res.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
