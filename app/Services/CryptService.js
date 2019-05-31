'use strict'
const Cryptr = require('cryptr');
const Env = use('Env');

class CryptService {
  constructor() {
    this.cryptr = new Cryptr(Env.get('APP_KEY'));
  }
  encrypt(data) {
    return this.cryptr.encrypt(data);
  }
  decrypt(data) {
    return this.cryptr.decrypt(data);
  }

}

module.exports = CryptService
