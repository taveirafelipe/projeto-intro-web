//Itens
const item1 = {
  nome: "Macarrão",
  marca: "Amália",
  preco: 2.89,
  quantidade: 2000,
  validade: new Date("12/10/2022"),
  tipo: ["Penne", "Grande"],
  img: "/Fotos/macarrao-amalia-penne.jpg",
  link: "https://pt.wikipedia.org/wiki/Macarr%C3%A3o",
};

const item2 = {
  nome: "Arroz",
  marca: "Tio João",
  preco: 26.99,
  quantidade: 300,
  validade: new Date("12/09/2022"),
  tipo: ["Branco", "Pequeno"],
  img: "/Fotos/arroz-tiojoao-branco.png",
  link: "https://pt.wikipedia.org/wiki/Arroz",
};

const item3 = {
  nome: "Feijão",
  marca: "Supang",
  preco: 6.99,
  quantidade: 5000,
  validade: new Date("01/09/2022"),
  tipo: ["Vermelho", "Grande"],
  img: "/Fotos/feijao-vermelho-supang.jpg",
  link: "https://pt.wikipedia.org/wiki/Feij%C3%A3o",
};

const item4 = {
  nome: "Farinha",
  marca: "Anchieta",
  preco: 5.99,
  quantidade: 2500,
  validade: new Date("05/09/2022"),
  tipo: ["Branca", "Mandioca"],
  img: "/Fotos/farinha-mandioca-yoki.png",
  link: "https://pt.wikipedia.org/wiki/Farinha",
};

const item5 = {
  nome: "Sal",
  marca: "Cisne",
  preco: 2.49,
  quantidade: 3000,
  validade: new Date("01/01/2025"),
  tipo: ["Iodado", "Refinado"],
  img: "/Fotos/sal-cisne.jpg",
  link: "https://pt.wikipedia.org/wiki/Sal",
};

const item6 = {
  nome: "Pasta de Dente",
  marca: "Colgate",
  preco: 3.97,
  quantidade: 5000,
  validade: new Date("10/21/2023"),
  tipo: ["Menta"],
  img: "/Fotos/pasta-de-dente-colgate.jpg",
  link: "https://pt.wikipedia.org/wiki/Dent%C3%ADfrico",
};

const item7 = {
  nome: "Cerveja",
  marca: "Heineken",
  preco: 7.99,
  quantidade: 1200,
  validade: new Date("06/06/2023"),
  tipo: ["Puro Malte"],
  img: "/Fotos/heineken-original-bottle.jpg",
  link: "https://pt.wikipedia.org/wiki/Cerveja",
};

const item8 = {
  nome: "Frango",
  marca: "Seara",
  preco: 15.99,
  quantidade: 1000,
  validade: new Date("12/01/2022"),
  tipo: ["Filé de Peito"],
  img: "/Fotos/File-de-Peito-de-Frango-Seara-Congelado-Bandeja-1-kg.webp",
  link: "https://pt.wikipedia.org/wiki/Frango",
};

const item9 = {
  nome: "Refrigerante",
  marca: "Coca-Cola",
  preco: 7.99,
  quantidade: 500,
  validade: new Date("10/21/2022"),
  tipo: ["Cola"],
  img: "/Fotos/coca-coca.jpg",
  link: "https://pt.wikipedia.org/wiki/Refrigerante",
};

const item10 = {
  nome: "Café",
  marca: "Três Corações",
  preco: 9.99,
  quantidade: 1500,
  validade: new Date("09/03/2022"),
  tipo: ["Tradicional", "Moído"],
  img: "/Fotos/cafe-tres.webp",
  link: "https://pt.wikipedia.org/wiki/Caf%C3%A9",
};

const item11 = {
  nome: "Biscoito",
  marca: "Marilan",
  preco: 10.99,
  quantidade: 2300,
  validade: new Date("01/05/2024"),
  tipo: ["Maizena"],
  img: "/Fotos/biscoito-marilan.webp",
  link: "https://pt.wikipedia.org/wiki/Biscoito",
};

const item12 = {
  nome: "Sabão em Pó",
  marca: "Tixan",
  preco: 7.99,
  quantidade: 1400,
  validade: new Date("06/06/2025"),
  tipo: ["Primavera"],
  img: "/Fotos/tixan-ype.jpg",
  link: "https://pt.wikipedia.org/wiki/Sab%C3%A3o",
};

const item13 = {
  nome: "Pão de Queijo",
  marca: "Maricota",
  preco: 14.99,
  quantidade: 500,
  validade: new Date("06/06/2023"),
  tipo: ["Congelado", "Pequeno"],
  img: "/Fotos/pao-de-queijo.jpg",
  link: "https://pt.wikipedia.org/wiki/P%C3%A3o_de_queijo",
};

const item14 = {
  nome: "Leite",
  marca: "Piracanjuba",
  preco: 5.29,
  quantidade: 1200,
  validade: new Date("09/09/2022"),
  tipo: ["Integral", "UHT"],
  img: "/Fotos/leite.webp",
  link: "https://pt.wikipedia.org/wiki/Leite",
};

const item15 = {
  nome: "Chinelo",
  marca: "Havaianas",
  preco: 24.99,
  quantidade: 1200,
  validade: new Date("12/12/2032"),
  tipo: ["Brasil", "Branca"],
  img: "/Fotos/Chinelo.webp",
  link: "https://pt.wikipedia.org/wiki/Chinelo",
};

//Arrays para guardarem os objetos.
let estoque = [];
let descarte = [];

//FUNÇÕES EM USO

function agruparItensComValidadeBoaOuNaoEmArrays(objeto) {
  if (objeto.validade > new Date()) {
    estoque.push(objeto);
  } else {
    descarte.push(objeto);
  }
}

agruparItensComValidadeBoaOuNaoEmArrays(item1);
agruparItensComValidadeBoaOuNaoEmArrays(item2);
agruparItensComValidadeBoaOuNaoEmArrays(item3);
agruparItensComValidadeBoaOuNaoEmArrays(item4);
agruparItensComValidadeBoaOuNaoEmArrays(item5);
agruparItensComValidadeBoaOuNaoEmArrays(item6);
agruparItensComValidadeBoaOuNaoEmArrays(item7);
agruparItensComValidadeBoaOuNaoEmArrays(item8);
agruparItensComValidadeBoaOuNaoEmArrays(item9);
agruparItensComValidadeBoaOuNaoEmArrays(item10);
agruparItensComValidadeBoaOuNaoEmArrays(item11);
agruparItensComValidadeBoaOuNaoEmArrays(item12);
agruparItensComValidadeBoaOuNaoEmArrays(item13);
agruparItensComValidadeBoaOuNaoEmArrays(item14);
agruparItensComValidadeBoaOuNaoEmArrays(item15);

function organizarOrdemAlfabetica(array, string){
  let array2 = []
  let array3 = []
 
  for(let item of array){
    array2.push(item.nome)
    array2.sort()
  }
  for(let item of array){
    for(let i in array2){
      if(array2[i] === item.nome){
        array3[i] = item
      }
    }
  }
  
  if(string === "estoque"){estoque = [...array3];}
  if(string === "descarte"){descarte = [...array3];}
}

function procuraString(arrayDeObj, string) {
  let array = [];
  let j = 0;
  for (let i in arrayDeObj) {
    let obj = {};
    if (
      arrayDeObj[i].nome
        .toLocaleUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") ===
      string
        .toLocaleUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    ) {
      const arr = [...document.getElementsByClassName("conteiner-produtos")];
      const cont = arr.length;
      for (let itens = 0; itens < cont; itens++) {
        arr[itens].remove();
      }

      obj = { ...arrayDeObj[i] };
      array[j] = obj;
      j++;
    }
  }
  if (j === 0) {
    alert(
      `O item \"${string.toLocaleUpperCase()}\" buscado não foi encontrado!`
    );
  }
  return array;
}

let varImprimirRelatorioAuto = 0;
let variavel = 0;

function imprimirRelatorioAuto(array) {
  for (let item of array) {
    //criando a section
    document
      .getElementById("centro")
      .insertAdjacentElement("beforeend", document.createElement("section"))
      .setAttribute("id", `item ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "conteiner-produtos");

    //adicionando a img
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .insertAdjacentElement("beforeend", document.createElement("img"))
      .setAttribute("id", `foto ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("src", `${item.img}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("alt", `${item.nome}-${item.marca}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "imagens");

    //adicionando ul
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .insertAdjacentElement("beforeend", document.createElement("ul"))
      .setAttribute("id", `ul ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`ul ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "texto");

    //adicionando li
    for (let caraterística in item) {
      if (caraterística === "link") {
      } else if (caraterística === "img") {
      } else if (caraterística === "validade") {
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong>${caraterística.toLocaleUpperCase()}</strong>: ${item[
          caraterística
        ].toLocaleDateString()}`;
        variavel++;
      } else if (caraterística === "nome") {
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong><a href="${item.link}">${item[
          caraterística
        ].toLocaleUpperCase()}</a></strong> `;
        variavel++;
      } else {
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong>${caraterística.toLocaleUpperCase()}</strong>: ${
          item[caraterística]
        }`;
        variavel++;
      }
    }
    varImprimirRelatorioAuto++;
  }
  
}

const imprimirEstoque = () => {
  agruparItensComValidadeBoaOuNaoEmArrays(criarItem())
  organizarOrdemAlfabetica(estoque, "estoque")
  imprimirRelatorioAuto(estoque);
}
const imprimirDescarte = () => {
  agruparItensComValidadeBoaOuNaoEmArrays(criarItem())
  organizarOrdemAlfabetica(descarte, "descarte")
  imprimirRelatorioAuto(descarte);
}

const procuraElementoEstoque = () => {
  imprimirRelatorioAuto(
    procuraString(estoque, document.getElementById("procura").value.trim())
  );
};

const limparPesquisaEstoque = () => {
  const arr = [...document.getElementsByClassName("conteiner-produtos")];
  const cont = arr.length;
  for (let s = 0; s < cont; s++) {
    arr[s].remove();
  }

  imprimirRelatorioAuto(estoque);
};

const procuraElementoDescarte = () => {
  imprimirRelatorioAuto(
    procuraString(descarte, document.getElementById("procura").value.trim())
  );
};

const limparPesquisaDescarte = () => {
  const arr = [...document.getElementsByClassName("conteiner-produtos")];
  const cont = arr.length;
  for (let s = 0; s < cont; s++) {
    arr[s].remove();
  }

  imprimirRelatorioAuto(descarte);
};

function cadastroItem() {
  if(document.getElementById("nome").value !== "" && document.getElementById("marca").value !== "" && document.getElementById("validade").value !== "" && document.getElementById("link").value !== "" && document.getElementById("img").value !== ""
  ) {
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("marca", document.getElementById("marca").value);
    localStorage.setItem("preco", Number(document.getElementById("preco").value));
    localStorage.setItem("quantidade", Number(document.getElementById("quantidade").value));
    localStorage.setItem("validade", new Date(document.getElementById("validade").value));
    localStorage.setItem("tipo", String(document.getElementById("tipo").value));
    localStorage.setItem("img", document.getElementById("img").value);
    localStorage.setItem("link", document.getElementById("link").value);

    alert("Item cadastrado com sucesso!")
  }else{
    alert("Digite valores válidos!")
  }
}

function criarItem(){
  let item = {}

  item.nome = localStorage.getItem("nome")
  item.marca = localStorage.getItem("marca")
  item.preco = localStorage.getItem("preco")
  item.quantidade = localStorage.getItem("quantidade")
  item.validade = new Date (localStorage.getItem("validade"))
  item.tipo = localStorage.getItem("tipo")
  item.img = localStorage.getItem("img")
  item.link = localStorage.getItem("link")
  
  return item
}

const avencer = () =>{
  let auxiliar = [];
  let validade = [];
  let retorno = [];
  
  for(let item of estoque){
    if((Date.parse(item.validade) - Date.parse(new Date()))/86400000 < 90 && (Date.parse(item.validade) - Date.parse(new Date()))/86400000 > 0){
      auxiliar.push(item)
      validade.push((Date.parse(item.validade) - Date.parse(new Date()))/86400000)
      validade.sort()
    }
  }for(let i in validade){
    for (let j in auxiliar){
      if(validade[i] === (Date.parse(auxiliar[j].validade) - Date.parse(new Date()))/86400000){
      retorno.push(auxiliar[j])
      }
    }
  }return retorno;
}

function imprimirRelatorioAVencer(array) {
  for (let item of array) {
    //criando a section
    document
      .getElementById("centro")
      .insertAdjacentElement("beforeend", document.createElement("section"))
      .setAttribute("id", `item ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "conteiner-produtos");

    //adicionando a img
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .insertAdjacentElement("beforeend", document.createElement("img"))
      .setAttribute("id", `foto ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("src", `${item.img}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("alt", `${item.nome}-${item.marca}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "imagens");

    //adicionando ul
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .insertAdjacentElement("beforeend", document.createElement("ul"))
      .setAttribute("id", `ul ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`ul ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "texto");

    //adicionando li
    for (let caraterística in item) {
      if (caraterística === "link") {
      } else if (caraterística === "img") {
      } else if (caraterística === "validade") {
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong>${caraterística.toLocaleUpperCase()}</strong>: ${item[
          caraterística
        ].toLocaleDateString()}`;
        variavel++;
      } else if (caraterística === "nome") {
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong><a href="${item.link}">${item[
          caraterística
        ].toLocaleUpperCase()}</a></strong> `;
        variavel++;
      } else if (caraterística === "tipo"){
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong>${caraterística.toLocaleUpperCase()}</strong>: ${
          item[caraterística]
        }`;
        variavel++;

        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);
        document.getElementById(`li ${variavel}`).setAttribute("class", `validade`);

        let validade = (Date.parse(item.validade) - Date.parse(new Date()))/86400000;

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<br><strong>Faltam ${Math.trunc(validade)} dias para o produto vencer!</strong>`;
        variavel++;
      } else {
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong>${caraterística.toLocaleUpperCase()}</strong>: ${
          item[caraterística]
        }`;
        variavel++;
      }
     
    }
    varImprimirRelatorioAuto++;
  }

}

const imprimirAVencer = () => {
  imprimirRelatorioAVencer(avencer());
}

const procuraElementoAVencer = () =>{
  imprimirRelatorioAVencer(
    procuraString(avencer(), document.getElementById("procura").value.trim())
  );
}

const limparPesquisaAVencer = () => {
  const arr = [...document.getElementsByClassName("conteiner-produtos")];
  const cont = arr.length;
  for (let s = 0; s < cont; s++) {
    arr[s].remove();
  }

  imprimirRelatorioAVencer(avencer());
};

const aside = () =>{
  const itensAVencer = avencer();
  if(itensAVencer.length<3){
    iteracao = itensAVencer.length;
    for(let i=0; i<iteracao; i++){
      let validade = (Date.parse(itensAVencer[i].validade) - Date.parse(new Date()))/86400000;
      
      document.getElementById("infos").innerHTML += `<h4>${itensAVencer[i].nome} ${itensAVencer[i].marca}</h4><p>Vence em ${Math.trunc(validade)} dias</p>`
    }
    document.getElementById("infos").innerHTML += `<p id="saiba"><a href="/vencer.html">+ Saiba mais</a></p>`
  }else{
    iteracao = 3;
    for(let i=0; i<iteracao; i++){
      let validade = (Date.parse(itensAVencer[i].validade) - Date.parse(new Date()))/86400000;
      
      document.getElementById("infos").innerHTML += `<h4>${itensAVencer[i].nome} ${itensAVencer[i].marca}</h4><p>Vence em ${Math.trunc(validade)} dias</p>`
    }
    document.getElementById("infos").innerHTML += `<p id="saiba"><a href="/vencer.html">+ Saiba mais</a></p>`
  }
  
  
}



