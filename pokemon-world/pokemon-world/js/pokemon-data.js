const pokemons = [
  {
    id: "pikachu",
    numero: 25,
    nome: "Pikachu",
    tipo: "Elétrico",
    img: "img/pikachu.jpg",
    descricaoCurta: "O Pokémon Ratinho, símbolo da franquia.",
    descricao: "Pikachu é um Pokémon elétrico pequeno e fofo. Ele guarda energia elétrica nas bochechas e a libera quando está assustado ou animado.",
    altura: "0,4 m",
    peso: "6,0 kg"
  },
  {
    id: "eevee",
    numero: 133,
    nome: "Eevee",
    tipo: "Normal",
    img: "img/eevee.jpg",
    descricaoCurta: "Pode evoluir para vários tipos diferentes.",
    descricao: "Eevee é famoso por ter um DNA instável, o que permite que ele evolua para várias formas diferentes, como Sylveon, dependendo do ambiente e do carinho recebido.",
    altura: "0,3 m",
    peso: "6,5 kg"
  },
  {
    id: "sylveon",
    numero: 700,
    nome: "Sylveon",
    tipo: "Fada",
    img: "img/sylveon.jpg",
    descricaoCurta: "Evolução de Eevee do tipo Fada.",
    descricao: "Sylveon usa as fitas ao redor do corpo para acalmar quem está por perto, emitindo uma energia especial que também é usada em batalha.",
    altura: "1,0 m",
    peso: "23,5 kg"
  },
  {
    id: "togepi",
    numero: 175,
    nome: "Togepi",
    tipo: "Fada",
    img: "img/togepi.jpg",
    descricaoCurta: "Recém-nascido, ainda dentro do ovinho.",
    descricao: "Togepi guarda toda a felicidade que sente dentro da casca do ovo. Dizem que ele traz sorte para quem cuida bem dele.",
    altura: "0,3 m",
    peso: "1,5 kg"
  },
  {
    id: "jigglypuff",
    numero: 39,
    nome: "Jigglypuff",
    tipo: "Normal",
    img: "img/jigglypuff.jpg",
    descricaoCurta: "Canta uma canção de ninar hipnotizante.",
    descricao: "Jigglypuff canta enquanto embala os ouvintes para dormir, usando os grandes olhos brilhantes para hipnotizar o público.",
    altura: "0,5 m",
    peso: "5,5 kg"
  },
  {
    id: "cleffa",
    numero: 173,
    nome: "Cleffa",
    tipo: "Fada",
    img: "img/cleffa.jpg",
    descricaoCurta: "Tem o formato de uma estrela cadente.",
    descricao: "Diz a lenda que Cleffa aparece quando uma chuva de meteoros vai acontecer, e seu formato lembra uma estrela cadente.",
    altura: "0,3 m",
    peso: "3,0 kg"
  },
  {
    id: "teddiursa",
    numero: 216,
    nome: "Teddiursa",
    tipo: "Normal",
    img: "img/teddiursa.jpg",
    descricaoCurta: "Adora mel e sempre cheira as próprias patas.",
    descricao: "Teddiursa tem uma marca em formato de lua no rosto e adora mel; costuma lamber as próprias patas para sentir o gostinho doce.",
    altura: "0,6 m",
    peso: "8,8 kg"
  },
  {
    id: "skitty",
    numero: 300,
    nome: "Skitty",
    tipo: "Normal",
    img: "img/skitty.jpg",
    descricaoCurta: "Adora perseguir a própria cauda.",
    descricao: "Skitty é curioso e brincalhão, e vive perseguindo a própria cauda fofinha até ficar tonto e cair no sono.",
    altura: "0,6 m",
    peso: "11,0 kg"
  },
  {
    id: "alcremie",
    numero: 869,
    nome: "Alcremie",
    tipo: "Fada",
    img: "img/alcremie.jpg",
    descricaoCurta: "Parece um docinho de chantilly.",
    descricao: "Alcremie nasce quando o Milcery é rodopiado com um ingrediente doce. O creme do seu corpo nunca estraga e fica cada vez mais gostoso.",
    altura: "0,3 m",
    peso: "0,5 kg"
  },
  {
    id: "milcery",
    numero: 868,
    nome: "Milcery",
    tipo: "Fada",
    img: "img/milcery.jpg",
    descricaoCurta: "Cheira a um creme doce e delicado.",
    descricao: "Milcery flutua carregando um pouco de creme que produz sozinho, e vive em busca de ingredientes doces para se transformar em Alcremie.",
    altura: "0,2 m",
    peso: "0,3 kg"
  },
  {
    id: "cutiefly",
    numero: 742,
    nome: "Cutiefly",
    tipo: "Inseto",
    img: "img/cutiefly.jpg",
    descricaoCurta: "Consegue enxergar energia vital.",
    descricao: "Cutiefly consegue enxergar a energia vital das plantas e por isso nunca se perde na hora de procurar flores cheias de pólen.",
    altura: "0,1 m",
    peso: "0,2 kg"
  },
  {
    id: "comfey",
    numero: 764,
    nome: "Comfey",
    tipo: "Fada",
    img: "img/comfey.jpg",
    descricaoCurta: "Sempre carrega uma guirlanda de flores.",
    descricao: "Comfey prende flores e ervas ao próprio corpo, formando uma guirlanda com aroma calmante usada para curar quem está por perto.",
    altura: "0,1 m",
    peso: "0,3 kg"
  },
  {
    id: "yamper",
    numero: 835,
    nome: "Yamper",
    tipo: "Elétrico",
    img: "img/yamper.jpg",
    descricaoCurta: "Filhote elétrico que adora perseguir coisas.",
    descricao: "Yamper acumula eletricidade estática na cauda em formato de coração e adora sair correndo atrás de qualquer coisa que se mova.",
    altura: "0,3 m",
    peso: "13,5 kg"
  },
  {
    id: "sprigatito",
    numero: 906,
    nome: "Sprigatito",
    tipo: "Grama",
    img: "img/sprigatito.jpg",
    descricaoCurta: "Gatinho inicial do tipo Grama.",
    descricao: "Sprigatito tem um cheiro doce de grama fresca que relaxa quem está por perto, e adora se pendurar nos ombros do seu treinador.",
    altura: "0,4 m",
    peso: "4,1 kg"
  },
  {
    id: "fidough",
    numero: 926,
    nome: "Fidough",
    tipo: "Fada",
    img: "img/fidough.jpg",
    descricaoCurta: "Cheira a pão fresquinho.",
    descricao: "O corpo elástico e fofinho de Fidough cheira a massa de pão fresca, e ele usa o focinho para farejar quem precisa de ajuda.",
    altura: "0,3 m",
    peso: "10,9 kg"
  },
  {
    id: "swablu",
    numero: 333,
    nome: "Swablu",
    tipo: "Normal",
    img: "img/swablu.jpg",
    descricaoCurta: "Tem o corpo feito de algodão macio.",
    descricao: "As asas de Swablu são feitas de um algodão macio parecido com nuvem, e ele costuma pousar em pessoas cansadas para animá-las.",
    altura: "0,4 m",
    peso: "1,2 kg"
  }
];
