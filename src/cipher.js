window.cipher = {
  encode: cipherEncode,
  decode: cipherDecode,
};

function cipherEncode(keyCode, mensagem) {
  let msgResult = "";
  for (let i = 0; i < mensagem.length; i++) {
    
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
      msgResult += String.fromCharCode(((mensagem.charCodeAt(i) - 65) + (keyCode %26+26)) % 26 + 65);
    }
    else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      msgResult += String.fromCharCode(((mensagem.charCodeAt(i) - 97) + (keyCode%26+26)) % 26 + 97);
    }
    else {
      msgResult += mensagem[i];
    }

  }
  return msgResult;
}

function cipherDecode(keyCode, mensagem2) {
  return cipherEncode(-keyCode, mensagem2)
}
