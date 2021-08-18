function retornaTempoArenaEmMilisegundos(distancia,velocidade) {
   // Velocidade do som = distância / tempo
   // Tempo = distância / velocidade do som
   let distanciaConvertida = parseFloat(distancia);
   
   let tempo = distanciaConvertida / velocidade;
   let tempoEmMilisegundos = tempo * 1000000;
   
   return Math.ceil(tempoEmMilisegundos.toFixed(0));
}