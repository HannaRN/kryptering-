const nCrypt = document.getElementById("encrypt");
const dCrypt = document.getElementById("decrypt");
let key = "ennøglejegHarValGT";

nCrypt.addEventListener("click", function () {
  let plaintxt = document.getElementById("plaintxt").value;
  let encrypted = CryptoJS.AES.encrypt(plaintxt, key);
  let hash = CryptoJS.SHA1(plaintxt);

  let decrypted = CryptoJS.AES.decrypt(encrypted, key);

  document.getElementById("encrypted").innerHTML = encrypted;
  document.getElementById("hash").innerHTML = hash;
  document.getElementById("decrypted").innerHTML = decrypted;
  document.getElementById("plaintext").innerHTML = decrypted.toString(
    CryptoJS.enc.Utf8
  );
});

dCrypt.addEventListener("click", function () {
  let plaintxt = document.getElementById("plaintxt").value;
  let hash = CryptoJS.SHA1(plaintxt);
  let decrypted = CryptoJS.AES.decrypt(plaintxt, key);

  document.getElementById("hash").innerHTML = hash;
  document.getElementById("decrypted").innerHTML = decrypted;
  document.getElementById("plaintext").innerHTML = decrypted.toString(
    CryptoJS.enc.Utf8
  );
});
