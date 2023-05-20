const charac =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@$#&%()=?¡¿!#$%{}-+*|°='~<>";

const passwordRandom = (length = 20) => {
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += charac.charAt(Math.floor(Math.random() * charac.length));
  }
  return pass;
};

module.exports = passwordRandom;
