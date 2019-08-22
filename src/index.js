function cipherEnc(){
  event.preventDefault() 
  let mensagem = document.getElementById("mSecret").value;
  let keyCode = parseInt(document.getElementById("deslocamento").value);
  let final = window.cipher.cipherEncode(mensagem,keyCode);
  document.getElementById("encode").innerHTML = final;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}


                                                
function cipherDec() {
	event.preventDefault()
	let mensagem2 = document.getElementById("deSecret").value;
	let keyCode = document.getElementById("deslocamento").value;
	let final2 = window.cipher.cipherDecode(mensagem2, keyCode);
	document.getElementById("decode").innerHTML = final2;
}



/*function limpaString (str) {
	str = str.toLowerCase();

    str = replaceAll("é", "e", str);
	str = replaceAll("ê", "e", str);
	str = replaceAll("ẽ", "e", str);
	str = replaceAll("è", "e", str);
	str = replaceAll("ë", "e", str);

	str = replaceAll("ã", "a", str);
	str = replaceAll("á", "a", str);
	str = replaceAll("à", "a", str);
	str = replaceAll("â", "a", str);
	str = replaceAll("ä", "a", str);

	str = replaceAll("ó", "o", str);
	str = replaceAll("õ", "o", str);
	str = replaceAll("ô", "o", str);
	str = replaceAll("ò", "o", str);
	str = replaceAll("ö", "o", str);

	str = replaceAll("í", "i", str);
	str = replaceAll("ì", "i", str);
	str = replaceAll("î", "i", str);
	str = replaceAll("ĩ", "i", str);
    str = replaceAll("ï", "i", str);

    str = replaceAll("ú", "u", str);
	str = replaceAll("û", "u", str);
	str = replaceAll("ù", "u", str);
	str = replaceAll("ũ", "u", str);
	str = replaceAll("ü", "u", str);

	str = replaceAll("ç", "c", str);

	str = replaceAll("ñ", "n", str);

	return str;
}*/ 
