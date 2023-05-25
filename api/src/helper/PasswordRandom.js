const passwordRandom = (length = 10) => {
  const lowercaseCharac = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharac = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharac = "1234567890";
  const specialCharac = "@$#&%()=?¡¿!#$%{}-+*|°='~<>";

  let pass = "";

  // Genera una letra mayúscula
  pass += uppercaseCharac.charAt(
    Math.floor(Math.random() * uppercaseCharac.length)
  );

  // Generar un número
  pass += numberCharac.charAt(Math.floor(Math.random() * numberCharac.length));

  // Generar el resto de la contraseña
  for (let i = 2; i < length; i++) {
    let characSet =
      lowercaseCharac + uppercaseCharac + numberCharac + specialCharac;
    pass += characSet.charAt(Math.floor(Math.random() * characSet.length));
  }

  // Mezclar los caracteres de forma aleatoria
  pass = pass
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return pass;
};

module.exports = passwordRandom;
