var nome = prompt('qual o nome do aluno')  // pergunta o nome do aluno

var materia = prompt('qual a materia de referencia')  //pergunta a matéria

var nota1 = Number(prompt('qual a nota do primeiro bimestre'))  //pergunta as notas
var nota2  = Number (prompt('qual a nota do segundo bimestre'))
var nota3 = Number (prompt('qual a nota do terceira bimestre'))
var nota4 = Number (prompt('qual a nota do quarto bimestre'))
var nota5 = Number (prompt('qual a nota do quinto bimestre'))

var media = (nota1+nota2+nota3+nota4+nota5)/4

var conceito=''

if(media <= 4 ){
    conceito ='reprovado'
}else if(media <= 7){
    conceito ='aprovado mas em recuperação'
}
else if(media <= 9){
    conceito ='aprovado'
}else{
    conceito = 'aprovado com excelencia'
}

switch(conceito){

    case 'reprovado':
        var elogio = ' você tem muito que melhorar'
        break
    case 'aprovado mas em recuperação':
        var elogio = 'você tem pouca coisa a melhorar'
        break  
    case 'aprovado':
        var elogio = 'continue assim,excelente'
        break
    case 'aprovado com excelencia':
        var elogio = 'você está perfeito'
        break   
}

alert(`o aluno ${nome} teve média ${media} \n na matéria ${materia} \n voce está ${conceito.toUpperCase()} \n  ${elogio}`)

