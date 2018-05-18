'use strict';
let config = {
  MONGO_URI: process.env.GAIDA_MONGO_URI || 'mongodb://localhost/gaida',
  PORT : process.env.GAIDA_PORT || '3000',
  JWT_SECRET : process.env.GAIDA_JWT_SECRET || '7865tuyuhjgjkgvjjgut678&^&*^%*^R&*^&*(',
  JWT_SECRET2 : process.env.GAIDA_JWT_SECRET2 || 'hfksdjdhjh23u4y28udsfjhbsjHYUT^&&*UYGHJBHjguyjkhUIY*UIY*(UIIJHuiu8(IU*(IU*(IUjh',
  PASSWORD_SECRET: '5678t6yhjgfhjhgyUY&^&*&^UJHGYUHJyuy787'
};
module.exports = config;