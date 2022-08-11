let listadepecas = ["peca1" , "peca2" , "p" , "1"]

quant = listadepecas.length;
//para verificar o tamnho ds lista utilizar o cmd ".lenght" que irá fazer formas quantitativas dentro dos [], os itens da lista tem que ficar dentro dos [] e ""
//verificação de quantidade

if(listadepecas.length < 10){
  console.log("peça pode ser cadastrada");
}else{
  console.log("peça não pode ser cadastrada");
}


//verificação de nome
//para percorrer uma lista utilizar o cmd "for"
//.lenght na lista dis o tamnho da lista e na string a quantidade de letras

for( let n = 0; n < quant; n++){
  let peca = listadepecas[n];
  if( peca.length < 3 ){
  console.log ("o nome tem menos de 3 caracteres")
  } else {console.log("o nome tem 3 ou mais caracteres")
}
  
}

