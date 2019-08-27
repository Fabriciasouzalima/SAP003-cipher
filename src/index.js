document.getElementById("btn-encode").addEventListener("click", cipherEnc);
document.getElementById("btn-decode").addEventListener("click", cipherDec);

function cipherEnc(event) {
  event.preventDefault();
  let mensagem = document.getElementById("mSecret").value;
  let keyCode = parseInt(document.getElementById("deslocamento").value);
  let final = window.cipher.encode(keyCode, mensagem);
  document.getElementById("encode").innerHTML = final;

}	
                                               
function cipherDec(event) {
  event.preventDefault();
  let mensagem2 = document.getElementById("deSecret").value;
  let keyCode = document.getElementById("deslocamento").value;
  let final2 = window.cipher.decode(keyCode, mensagem2);
  document.getElementById("decode").innerHTML = final2;

}
