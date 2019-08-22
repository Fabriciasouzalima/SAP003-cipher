window.cipher = {
  cipherEncode: cipherEncode,
  cipherDecode: cipherDecode,

};

function cipherEncode(mensagem, keyCode) {
  let msgResult = '';
  for (let i = 0; i < mensagem.length; i++) {
    msgResult += String.fromCharCode(((mensagem.charCodeAt(i) - 65) + keyCode) % 26 + 65);
  }
  return msgResult;
}



function cipherDecode(mensagem2, keyCode) {
  let msgResult2 = '';
  for (let i = 0; i < mensagem2.length; i++) {
    msgResult2 += String.fromCharCode(((mensagem2.charCodeAt(i) - 65) - keyCode) % 26 + 65);
  }
  return msgResult2;
}

