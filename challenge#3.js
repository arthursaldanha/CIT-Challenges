function retornaPessoasPreferemUmUnicoPalco(quantidadePessoasEvento) {
	let pessoasUnicoPalco = 0;
	if (quantidadePessoasEvento % 2 == 0) {
		return pessoasUnicoPalco = quantidadePessoasEvento * 0.25;
	} else {
		return pessoasUnicoPalco = Math.floor(quantidadePessoasEvento * 0.25);
	}
}