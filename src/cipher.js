window.cipher = {
  cipherEncode: cipherEncode,
  
};

function cipherEncode(mensagem, keyCode) {
  let msgResult = '';
  for (let i = 0; i<mensagem.length; i++) {
    msgResult += String.fromCharCode(((mensagem.charCodeAt(i)- 65) + keyCode)% 26 + 65);
  }
  return msgResult;
} 
  
  

 

//let calc = ((messageAscii - 65) + keyCode)%26+65 

function cipherEncode(mensagem, keyCode) {
  let msgResult = '';
  for (let i = 0; i < mensagem.length; i++) {
    msgResult += String.fromCharCode(((mensagem.charCodeAt(i)- 65) + keyCode) % 26 + 65);
  }
  return msgResult;
} 
