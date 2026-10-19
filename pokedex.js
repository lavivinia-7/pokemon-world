// Elementos existentes da página local
const grade = document.getElementById("grade-pokedex");
const campoBusca = document.getElementById("campo-busca");
const filtroTipo = document.getElementById("filtro-tipo");

// Elementos da busca na API
const inputApi = document.getElementById("api-busca-input");
const btnBuscarApi = document.getElementById("btn-buscar-api");
const mensagemErroApi = document.getElementById("mensagem-erro-api");
const containerResultadoApi = document.getElementById("resultado-api");

function classeDoTipo(tipo) {
  if (!tipo) return "normal";
  return tipo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); 
}

function criarCard(pokemon) {
  const numeroFormatado = String(pokemon.numero).padStart(3, "0");

  return `
    <div class="card-pokemon">
      <img src="${pokemon.img}" alt="${pokemon.nome}">
      <span class="numero">Nº ${numeroFormatado}</span>
      <h3>${pokemon.nome}</h3>
      <span class="selo-tipo ${classeDoTipo(pokemon.tipo)}">${pokemon.tipo}</span>
      <p style="font-size:0.85rem; color:var(--texto-claro); min-height:38px;">
        ${pokemon.descricaoCurta}
      </p>
      <a class="botao" href="detalhes.html?id=${pokemon.id}">Ver detalhes</a>
    </div>
  `;
}

function mostrarPokemons(lista) {
  if (!grade) return;
  if (lista.length === 0) {
    grade.innerHTML = `<p class="sem-resultado">Nenhum Pokémon encontrado 🥲</p>`;
    return;
  }

  grade.innerHTML = lista.map(criarCard).join("");
}

function aplicarFiltros() {
  if (!campoBusca || !filtroTipo) return;
  const textoBusca = campoBusca.value.trim().toLowerCase();
  const tipoEscolhido = filtroTipo.value;

  const pokemonsFiltrados = pokemons.filter((pokemon) => {
    const nomeCombina = pokemon.nome.toLowerCase().includes(textoBusca);
    const tipoCombina = tipoEscolhido === "todos" || pokemon.tipo === tipoEscolhido;
    return nomeCombina && tipoCombina;
  });

  mostrarPokemons(pokemonsFiltrados);
}

async function buscarPokemonNaAPI() {
  if (!inputApi || !mensagemErroApi || !containerResultadoApi) return;

  const pokemonBuscado = inputApi.value.trim().toLowerCase();

  mensagemErroApi.textContent = "";
  containerResultadoApi.innerHTML = "";
  containerResultadoApi.style.display = "none";

  if (!pokemonBuscado) {
    mensagemErroApi.textContent = "Por favor, digita o nome ou número (ID) de um Pokémon.";
    return;
  }

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`);

    if (!resposta.ok) {
      throw new Error("Pokémon não encontrado na API.");
    }

    const dados = await resposta.json();

    const nomeFormatado = dados.name ? (dados.name.charAt(0).toUpperCase() + dados.name.slice(1)) : pokemonBuscado;
    const tipoPrincipal = (dados.types && dados.types.length > 0 && dados.types[0].type) ? dados.types[0].type.name : "normal";
    const imagemUrl = (dados.sprites && dados.sprites.front_default) ? dados.sprites.front_default : "";
    const idFormatado = String(dados.id || 0).padStart(3, "0");
    const altura = dados.height ? (dados.height / 10).toFixed(1) : "0";
    const peso = dados.weight ? (dados.weight / 10).toFixed(1) : "0";

    const cardHTML = `
      <div class="card-pokemon" style="grid-column: 1 / -1; justify-self: center; max-width: 320px; width: 100%; text-align: center;">
        ${imagemUrl ? `<img src="${imagemUrl}" alt="${nomeFormatado}">` : ''}
        <span class="numero">Nº ${idFormatado}</span>
        <h3>${nomeFormatado} (API)</h3>
        <span class="selo-tipo ${classeDoTipo(tipoPrincipal)}">${tipoPrincipal.toUpperCase()}</span>
        <p style="font-size:0.85rem; color:var(--texto-claro); margin-top: 8px;">
          Altura: ${altura}m | Peso: ${peso}kg
        </p>
      </div>
    `;

    containerResultadoApi.innerHTML = cardHTML;
    containerResultadoApi.style.display = "grid";

  } catch (erro) {
    console.error("Erro detalhado da busca:", erro);
    mensagemErroApi.textContent = "Pokémon não encontrado na API! Verifica se digitaste o nome corretamente.";
  }
}

if (campoBusca) campoBusca.addEventListener("input", aplicarFiltros);
if (filtroTipo) filtroTipo.addEventListener("change", aplicarFiltros);

if (btnBuscarApi) btnBuscarApi.addEventListener("click", buscarPokemonNaAPI);
if (inputApi) {
  inputApi.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      buscarPokemonNaAPI();
    }
  });
}

if (typeof pokemons !== "undefined") {
  mostrarPokemons(pokemons);
}
