function geraFrequenciaNota(semitons) {
   let crescente = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
   let decrescente = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
   let resposta = [];

   let conta = (440 * (2 ** (semitons / 12)));
   if (conta % 1 != 0) {
      conta = conta.toFixed(4)
   } else {
      conta = conta.toFixed(0)
   }
   let resultadoConta = conta.toString();
   resposta.push(resultadoConta);

   if (semitons < 12 && semitons >= 0) {
      resposta.push(crescente[semitons])
   } else if (semitons === 12 || semitons === -24) {
      resposta.push(crescente[0])
   } if (semitons < 23 && semitons > 12) {
      let k = semitons - 12
      resposta.push(crescente[k])
   } else if (semitons < 0 && semitons >= -12) {
      let i = 12 + (semitons)
      resposta.push(decrescente[i])
   }
   return resposta;
}