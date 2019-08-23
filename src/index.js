function cipherEnc() {
  event.preventDefault();
  let mensagem = document.getElementById("mSecret").value;
  let keyCode = parseInt(document.getElementById("deslocamento").value);
  let final = window.cipher.cipherEncode(mensagem, keyCode);
  document.getElementById("encode").innerHTML = final;

}	
                                               
function cipherDec() {
  event.preventDefault();
  let mensagem2 = document.getElementById("deSecret").value;
  let keyCode = document.getElementById("deslocamento").value;
  let final2 = window.cipher.cipherDecode(mensagem2, keyCode);
  document.getElementById("decode").innerHTML = final2;

}