window.cipher = {
  cipherEncode: cipherEncode,
  cipherDecode: cipherDecode,

};

function cipherEncode(mensagem, keyCode) {
  let msgResult = "";
  for (let i = 0; i < mensagem.length; i++) {
    
    if (mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90) {
      msgResult += String.fromCharCode(((mensagem.charCodeAt(i) - 65) + keyCode) % 26 + 65);
    }
    else if (mensagem.charCodeAt(i) >= 97 && mensagem.charCodeAt(i) <= 122) {
      msgResult += String.fromCharCode(((mensagem.charCodeAt(i) - 97) + keyCode) % 26 + 97);
    }
    else {
      msgResult += mensagem[i];
    }

  }
  return msgResult;
}

function cipherDecode(mensagem2, keyCode) {
  let msgResult2 = " ";
  for (let i = 0; i < mensagem2.length; i++) {
    
    if (mensagem2.charCodeAt(i) >= 65 && mensagem2.charCodeAt(i) <= 90) {
      msgResult2 += String.fromCharCode(((mensagem2.charCodeAt(i) - 65) - keyCode) % 26 + 65);
    }
    else if (mensagem2.charCodeAt(i) >= 97 && mensagem2.charCodeAt(i) <= 122) {
      msgResult2 += String.fromCharCode(((mensagem2.charCodeAt(i) - 97) - keyCode) % 26 + 97);
    }
    else {
      msgResult2 += mensagem2[i];
    }
  }
  return msgResult2;
}

