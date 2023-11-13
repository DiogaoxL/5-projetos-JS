const key = '6fbfc9dcd87051aa1060e26e2d47407f' ;


function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value 

  buscarCidade(cidade)
}


async function buscarCidade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json() )

  colocarDadosNaTela(dados)
}

function colocarDadosNaTela(dados) {
  console.log(dados)
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
  document.querySelector(".txt-previsao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%"
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}