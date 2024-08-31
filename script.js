document.addEventListener("DOMContentLoaded", function() {
  let cantidad = document.getElementById("cantidad");
  const cambiarValor = document.querySelector("#cambiar-valor");
  let resultado = document.querySelector(".pantalla-resultado");
  let paisOrigen = document.querySelector("#pais-origen");
  let paisDestino = document.querySelector("#pais-destino");

  cantidad.value = "1";

  // Conversion
  cantidad.addEventListener("input", function conversion() {
    // CLP a EUR // EUR a CLP
    if (paisOrigen.value === "CLP" && paisDestino.value === "EUR") {
      let calculo = parseFloat(cantidad.value) * 0.00098947214;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } else if (paisOrigen.value === "EUR" && paisDestino.value === "CLP"){
      let calculo = parseFloat(cantidad.value) * 1015.8669;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } 
    // CLP a JPY // JPY a CLP 
    if (paisOrigen.value === "CLP" && paisDestino.value === "JPY"){
      let calculo = parseFloat(cantidad.value) * 15.827969;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } else if (paisOrigen.value === "JPY" && paisDestino.value === "CLP") {
      let calculo = parseFloat(cantidad.value) * 6.3229995 ;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    }
    // CLP a USD // USD a CLP
    if (paisOrigen.value === "USD" && paisDestino.value === "CLP") {
      let calculo = parseFloat(cantidad.value) * 915.15231;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } else if (paisOrigen.value === "CLP" && paisDestino.value === "USD"){
      let calculo = parseFloat(cantidad.value) * 0.0010927143;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } 
    // JPY a EUR // EUR a JPY
    if (paisOrigen.value === "JPY" && paisDestino.value === "EUR") {
      let calculo = parseFloat(cantidad.value) * 0.0062381502 ;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } else if (paisOrigen.value === "EUR" && paisDestino.value === "JPY"){
      let calculo = parseFloat(cantidad.value) * 160.30393;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    }     
    // JPY a USD // USD a JPY
    if (paisOrigen.value === "USD" && paisDestino.value === "JPY") {
      let calculo = parseFloat(cantidad.value) * 144.76762;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } else if (paisOrigen.value === "JPY" && paisDestino.value === "USD"){
      let calculo = parseFloat(cantidad.value) * 0.006907612;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    }
    // USD a EUR // EUR a USD
    if (paisOrigen.value === "USD" && paisDestino.value === "EUR") {
      let calculo = parseFloat(cantidad.value) * 0.90298094;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } else if (paisOrigen.value === "EUR" && paisDestino.value === "USD"){
      let calculo = parseFloat(cantidad.value) * 1.1074431;
      resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
    } 

    if (cantidad.value === "" || cantidad.value === "0") {
      resultado.innerHTML = `<span></span><span>Ingresa una cantidad </span>`;
    }
    
  });  

  cambiarValor.addEventListener("click", () => {
    if (paisOrigen.value && paisDestino.value) {
      const temp = paisOrigen.value;
      paisOrigen.value = paisDestino.value;
      paisDestino.value = temp;
      actualizarImagen();
      if (paisOrigen.value === "CLP" && paisDestino.value === "EUR") {
        let calculo = parseFloat(cantidad.value) * 0.00098415198 ;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } else if (paisOrigen.value === "EUR" && paisDestino.value === "CLP"){
        let calculo = parseFloat(cantidad.value) * 1015.8669;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } 
      if (paisOrigen.value === "CLP" && paisDestino.value === "JPY"){
        let calculo = parseFloat(cantidad.value) * 15.827969;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } else if (paisOrigen.value === "JPY" && paisDestino.value === "CLP") {
        let calculo = parseFloat(cantidad.value) * 6.3229995 ;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      }
      if (paisOrigen.value === "USD" && paisDestino.value === "CLP") {
        let calculo = parseFloat(cantidad.value) * 915.15231;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } else if (paisOrigen.value === "CLP" && paisDestino.value === "USD"){
        let calculo = parseFloat(cantidad.value) * 0.0010927143;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } 
      if (paisOrigen.value === "JPY" && paisDestino.value === "EUR") {
        let calculo = parseFloat(cantidad.value) * 0.0062381502 ;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } else if (paisOrigen.value === "EUR" && paisDestino.value === "JPY"){
        let calculo = parseFloat(cantidad.value) * 160.30393;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      }     
      if (paisOrigen.value === "USD" && paisDestino.value === "JPY") {
        let calculo = parseFloat(cantidad.value) * 144.76762;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } else if (paisOrigen.value === "JPY" && paisDestino.value === "USD"){
        let calculo = parseFloat(cantidad.value) * 0.006907612;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      }
      if (paisOrigen.value === "USD" && paisDestino.value === "EUR") {
        let calculo = parseFloat(cantidad.value) * 0.90298094;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } else if (paisOrigen.value === "EUR" && paisDestino.value === "USD"){
        let calculo = parseFloat(cantidad.value) * 1.1074431;
        resultado.innerHTML = `<span>${paisOrigen.value} ${parseFloat(cantidad.value).toLocaleString()} =</span><span>${calculo.toLocaleString()} ${paisDestino.value}</span>`;
      } 
    }
  });

let banderasA = document.querySelector(".titulo-2");
let banderasB = document.querySelector(".titulo-3");

if (paisOrigen.value === "CLP") {
  banderasA.insertAdjacentHTML("beforeend", `<img src="./img/CLP.png">`);
}

paisOrigen.addEventListener("change", function cambiarImg(){
  if (paisOrigen.value === "CLP") {
    removerA();
    banderasA.insertAdjacentHTML("beforeend", `<img src="./img/CLP.png">`);
  } else if (paisOrigen.value === "USD") {  
    removerA();
    banderasA.insertAdjacentHTML("beforeend", `<img src="./img/USD.png">`);
  } else if (paisOrigen.value === "EUR") {
    removerA();
    banderasA.insertAdjacentHTML("beforeend", `<img src="./img/EUR.png">`);
  } else if (paisOrigen.value === "JPY") {  
    removerA();
    banderasA.insertAdjacentHTML("beforeend", `<img src="./img/JPY.png">`);
  }
});

if (paisDestino.value === "EUR") {
  removerB();
  banderasB.insertAdjacentHTML("beforeend", `<img src="./img/EUR.png">`);
}

paisDestino.addEventListener("change", function cambiarImg2(){
  if (paisDestino.value === "CLP") {
    removerB();
    banderasB.insertAdjacentHTML("beforeend", `<img src="./img/CLP.png">`);
  } else if (paisDestino.value === "USD") {  
    removerB();
    banderasB.insertAdjacentHTML("beforeend", `<img src="./img/USD.png">`);
  } else if (paisDestino.value === "EUR") {
    removerB();
    banderasB.insertAdjacentHTML("beforeend", `<img src="./img/EUR.png">`);
  } else if (paisDestino.value === "JPY") {  
    removerB();
    banderasB.insertAdjacentHTML("beforeend", `<img src="./img/JPY.png">`);
  }
});

function removerA() {
  if (banderasA.lastChild) {
    banderasA.removeChild(banderasA.lastChild);
  }
}

function removerB() {
  if (banderasB.lastChild) {
    banderasB.removeChild(banderasB.lastChild);
  } 
}
  

function actualizarImagen() {
  var valorActual = paisOrigen.value;
  
  if (valorActual === "CLP") {
    removerA();
    banderasA.insertAdjacentHTML("beforeend", `<img src="./img/CLP.png">`);
  } else if (valorActual === "USD") {  
    removerA();
    banderasA.insertAdjacentHTML("beforeend", `<img src="./img/USD.png">`);
  } else if (valorActual === "EUR") {
    removerA();
    banderasA.insertAdjacentHTML("beforeend", `<img src="./img/EUR.png">`);
  } else if (valorActual === "JPY") {  
    removerA();
    banderasA.insertAdjacentHTML("beforeend", `<img src="./img/JPY.png">`);
  }

  var valorActual2 = paisDestino.value;
  
  if (valorActual2 === "CLP") {
    removerB();
    banderasB.insertAdjacentHTML("beforeend", `<img src="./img/CLP.png">`);
  } else if (valorActual2 === "USD") {  
    removerB();
    banderasB.insertAdjacentHTML("beforeend", `<img src="./img/USD.png">`);
  } else if (valorActual2 === "EUR") {
    removerB();
    banderasB.insertAdjacentHTML("beforeend", `<img src="./img/EUR.png">`);
  } else if (valorActual2 === "JPY") {  
    removerB();
    banderasB.insertAdjacentHTML("beforeend", `<img src="./img/JPY.png">`);
  }
}
});

