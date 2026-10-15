const area = document.getElementById("area-detalhes");

const parametros = new URLSearchParams(window.location.search);
const idProcurado = parametros.get("id");

const pokemon = pokemons.find((p) => p.id === idProcurado);

if (pokemon) {
  const numeroFormatado = String(pokemon.numero).padStart(3, "0");

  area.innerHTML = `
    <div class="detalhes-cartao">
      <div class="detalhes-imagem">
        <img src="${pokemon.img}" alt="${pokemon.nome}">
      </div>
      <div class="detalhes-info">
        <span class="numero">Nº ${numeroFormatado}</span>
        <h1>${pokemon.nome}</h1>
        <span class="selo-tipo">${pokemon.tipo}</span>
        <p class="descricao">${pokemon.descricao}</p>
        <div class="lista-atributos">
          <div>
            ${pokemon.altura}
            <span>Altura</span>
          </div>
          <div>
            ${pokemon.peso}
            <span>Peso</span>
          </div>
        </div>
      </div>
    </div>
  `;
} else {

  area.innerHTML = `
    <p class="sem-resultado">
      Não encontramos esse Pokémon 🥲 <br>
      <a href="pokedex.html">Voltar para a Pokédex</a>
    </p>
  `;
}
