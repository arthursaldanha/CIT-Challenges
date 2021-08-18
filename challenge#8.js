function retornaGuicheIngresso(ingressoNumero) {
	let raizNumeroIngresso = Math.sqrt(ingressoNumero);
	
   if(raizNumeroIngresso % 1 != 0) {
		return Math.ceil(raizNumeroIngresso);
	} else {
		return raizNumeroIngresso;
   }
}