function tamanhoSetorBusca(areaMaior,areaMenor) {
	let areaMaiorMenosMenor = areaMaior - areaMenor
	let areaDeBusca = areaMaiorMenosMenor / 8;
	return areaDeBusca;
}