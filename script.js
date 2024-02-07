function CriarArrayNumerosAleatorios(){
    const arrayDeNumeros = [];
    
    for(let i = 0; i < 15; i++){
      const numeroParaSerAdicionado = 
        Math.round(Math.random() * 100);
      arrayDeNumeros.push(numeroParaSerAdicionado);
    }
    return arrayDeNumeros;
}

function EncontrarMenorNumeroNoArray(array){

    for(let i = 0; i < array.length; i++){
  
        let valorSelecionado = i;
        let menorNumeroEncontrado = true;
        
        for(let j = 0; j < array.length; j++){
            
          if(array[valorSelecionado] > array[j]){
            valorSelecionado = j;
            menorNumeroEncontrado = false;                  
          }         
        }
    
        if(menorNumeroEncontrado){
            return array[valorSelecionado];
        }
    }
}
  
function CompararArray(array1, array2){
  
    const menorNumeroArray1 = EncontrarMenorNumeroNoArray(array1);
    const menorNumeroArray2 = EncontrarMenorNumeroNoArray(array2);
    const subtraindoValores = menorNumeroArray1 > menorNumeroArray2? menorNumeroArray1 - menorNumeroArray2: menorNumeroArray2 - menorNumeroArray1;

    return {
        primeiroArray: array1,
        segundoArray: array2,
        menorNumeroDoArray1: menorNumeroArray1,
        menorNumeroDoArray2: menorNumeroArray2,
        distanciaEntreOsDoisNumeros: subtraindoValores
    };
}

function ExibeNaTela(objeto){

  const elementPrimeiroArray = document.createElement("p");
  const elementSegundoArray = document.createElement("p");
  const elementMenorNumeroPrimeiroArray = document.createElement("p");
  const elementMenorNumeroSegundoArray = document.createElement("p");
  const elementDistanciaDosNumeros = document.createElement("p");
  const elementAviso = document.createElement("p");

  elementPrimeiroArray.innerHTML = "Primeiro Array: "  + objeto.primeiroArray;
  elementSegundoArray.innerHTML = "Segundo Array: "  + objeto.segundoArray;
  elementMenorNumeroPrimeiroArray.innerHTML = "Menor número do primeiro Array: "  + objeto.menorNumeroDoArray1;
  elementMenorNumeroSegundoArray.innerHTML = "Menor número do segundo Array: "  + objeto.menorNumeroDoArray2;
  elementDistanciaDosNumeros.innerHTML = "Distancia entre os dois números: "  + objeto.distanciaEntreOsDoisNumeros;
  elementAviso.innerHTML = "Resultado Disponível Também no console!!";
  elementAviso.style = "font-weight: bold; font-size: 1.5em;";
  const container = document.getElementById("container");

  container.appendChild(elementPrimeiroArray);
  container.appendChild(elementSegundoArray);
  container.appendChild(elementMenorNumeroPrimeiroArray);
  container.appendChild(elementMenorNumeroSegundoArray);
  container.appendChild(elementDistanciaDosNumeros);
  container.appendChild(elementAviso);
}

const objetoComOResultado = CompararArray(CriarArrayNumerosAleatorios(), CriarArrayNumerosAleatorios());

console.log("Primeiro Array: "  + objetoComOResultado.primeiroArray);
console.log("Segundo Array: "  + objetoComOResultado.segundoArray);
console.log("Menor número do primeiro Array: "  + objetoComOResultado.menorNumeroDoArray1);
console.log("Menor número do segundo Array: "  + objetoComOResultado.menorNumeroDoArray2);
console.log("Distancia entre os dois números: "  + objetoComOResultado.distanciaEntreOsDoisNumeros);

ExibeNaTela(objetoComOResultado);

