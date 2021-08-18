function retornaTempoMinimoEmMinutos(p,s,n) {
  let filaDoShow = Math.ceil(p / n)
  let tempo = (filaDoShow * s) / 60
  
  return Math.ceil(tempo)
}