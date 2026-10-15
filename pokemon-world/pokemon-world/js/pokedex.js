const grade = document.getElementById("grade-pokedex");
const campoBusca = document.getElementById("campo-busca");
const filtroTipo = document.getElementById("filtro-tipo");

function classeDoTipo(tipo) {
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
  if (lista.length === 0) {
    grade.innerHTML = `<p class="sem-resultado">Nenhum Pokémon encontrado 🥲</p>`;
    return;
  }

  grade.innerHTML = lista.map(criarCard).join("");
}

function aplicarFiltros() {
  const textoBusca = campoBusca.value.trim().toLowerCase();
  const tipoEscolhido = filtroTipo.value;

  const pokemonsFiltrados = pokemons.filter((pokemon) => {
    const nomeCombina = pokemon.nome.toLowerCase().includes(textoBusca);
    const tipoCombina = tipoEscolhido === "todos" || pokemon.tipo === tipoEscolhido;
    return nomeCombina && tipoCombina;
  });

  mostrarPokemons(pokemonsFiltrados);
}

campoBusca.addEventListener("input", aplicarFiltros);
filtroTipo.addEventListener("change", aplicarFiltros);

mostrarPokemons(pokemons);
