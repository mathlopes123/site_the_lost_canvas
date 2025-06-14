const characters = [
  {
    nome: "Tenma de Pégasus",
    imagem: "img/tenma.jpeg",
    descricao:
      "Tenma, o jovem Cavaleiro de Pégaso, é uma alma valente moldada por desafios desde a infância. Criado em um ambiente humilde, ele desenvolve um forte senso de justiça, sempre disposto a proteger os mais fracos. Seu vínculo com Sasha, sua amiga de infância, é profundo, e isso o motiva a se tornar um defensor da paz. Ao longo da trama, Tenma enfrenta poderosos inimigos, incluindo os espectros de Hades, demonstrando habilidades de combate excepcionais e uma coragem admirável. Em uma das batalhas mais emocionantes, ele derrota o espectro de Minos, provando que sua determinação e amor por Sasha são mais poderosos que qualquer adversidade. Tenma não apenas luta para vencer, mas busca também redimir Alone, acreditando que ainda há esperança em seu amigo perdido.",
    theme: "tenma",
  },
  {
    nome: "Alone",
    imagem: "img/alone.jpeg",
    descricao:
      "Alone, a reencarnação de Hades, é um personagem trágico que simboliza a luta interna entre luz e escuridão. Desde pequeno, ele é um artista solitário, cuja sensibilidade o torna mais vulnerável ao peso de seu destino. Quando descobre que é o deus do submundo, Alone se vê em um dilema: seguir o caminho de destruição que lhe é imposto ou buscar a compreensão e a conexão humana. Seus momentos de fraqueza e reflexão revelam um lado mais profundo, especialmente em suas interações com Tenma e Sasha. Durante sua jornada, Alone enfrenta não só os Cavaleiros, mas também seus próprios demônios, culminando em uma batalha interna que o força a confrontar seus sentimentos mais sombrios. Sua relação com Tenma é marcada por rivalidade, mas também por um laço de amizade que ressoa ao longo da história.",
    theme: "alone",
  },
  {
    nome: "Sasha",
    imagem: "img/sasha.jpeg",
    descricao:
      "Sasha, a reencarnação da deusa Atena, é a personificação da esperança e da proteção. Desde jovem, ela é instruída sobre seu papel na luta contra Hades, e sua força é tanto física quanto espiritual. Sua determinação em salvar a humanidade a leva a se tornar uma líder inspiradora, unindo os Cavaleiros em torno de uma causa comum. Sasha não hesita em entrar em batalha, mostrando sua habilidade tanto em combate quanto em estratégia. Em um momento crucial, ela se enfrenta a um dos espectros mais poderosos, revelando sua força interior e capacidade de sacrifício. A conexão que ela tem com Tenma é intensa e complexa, repleta de amor não correspondido e desespero, o que a torna ainda mais determinada a salvar Alone, na esperança de que o amor possa redimir até mesmo os corações mais perdidos.",
    theme: "sasha",
  },
  {
    nome: "Yuzuriha",
    imagem: "img/yuzuriha.jpeg",
    descricao:
      'Yuzuriha é uma jovem guerreira de espírito indomável, cujo sonho de se tornar uma Cavaleira se torna realidade ao lado de Tenma e dos outros. Com uma personalidade vibrante e otimista, ela traz luz aos momentos mais sombrios da saga. Yuzuriha não apenas luta com habilidade, mas também é um símbolo de esperança e resistência, mostrando que a força não está apenas em poder físico, mas na determinação de proteger os amigos. Um de seus feitos mais notáveis ocorre quando ela usa sua técnica única, o "Kouka", para enfrentar um espectro poderoso, mostrando que a fé e a amizade são armas tão poderosas quanto qualquer golpe. Sua amizade com os outros Cavaleiros é fundamental, e seu crescimento pessoal ao longo da série destaca a importância da união na luta contra o mal.',
    theme: "yuzuriha",
  },
  {
    nome: "Manigold",
    imagem: "img/manigold.jpeg",
    descricao:
      "Manigold, o Cavaleiro de Ouro de Câncer, é um personagem que encarna a sabedoria e a força dos Cavaleiros. Com um forte senso de dever, ele se coloca à frente na batalha contra as forças de Hades, sempre disposto a sacrificar-se pelo bem maior. Manigold possui um profundo entendimento do que significa ser um Cavaleiro, e sua experiência é vital para guiar os jovens guerreiros em suas lutas. Um dos seus feitos mais impressionantes ocorre durante a Batalha dos Deuses, onde ele utiliza seu poder para conter as forças de Hades e proteger seus aliados. Sua presença é uma fonte de coragem, e ele sempre busca inspirar Tenma e os outros a se tornarem os melhores que podem ser, lembrando-os de que a verdadeira força vem do coração e da dedicação à justiça.",
    theme: "manigold",
  },
]

// Elementos do DOM
const charactersGrid = document.getElementById("characters-grid")
const characterName = document.getElementById("character-name")
const characterDescription = document.getElementById("character-description")
const characterImageLarge = document.getElementById("character-image-large")
const backgroundOverlay = document.querySelector(".background-overlay")

let selectedCharacterIndex = -1

// Função para criar os cards dos personagens
function createCharacterCards() {
  characters.forEach((character, index) => {
    const card = document.createElement("div")
    card.className = "character-card"
    card.innerHTML = `
            <img src="${character.imagem}" alt="${character.nome}" class="character-image" onerror="handleImageError(this)">
            <div class="character-name">${character.nome}</div>
        `

    card.addEventListener("click", () => selectCharacter(index))
    charactersGrid.appendChild(card)
  })
}

// Função para selecionar um personagem
function selectCharacter(index) {
  const character = characters[index]

  // Remove seleção anterior
  const cards = document.querySelectorAll(".character-card")
  cards.forEach((card) => card.classList.remove("selected"))

  // Adiciona seleção atual
  cards[index].classList.add("selected")

  // Atualiza informações do personagem
  characterName.textContent = character.nome
  characterDescription.textContent = character.descricao
  characterImageLarge.src = character.imagem
  characterImageLarge.alt = character.nome

  // Muda o tema de fundo
  changeTheme(character.theme)

  selectedCharacterIndex = index
}

// Função para mudar o tema de fundo
function changeTheme(theme) {
  // Remove todas as classes de tema
  backgroundOverlay.classList.remove("theme-tenma", "theme-alone", "theme-sasha", "theme-yuzuriha", "theme-manigold")

  // Adiciona nova classe de tema
  backgroundOverlay.classList.add(`theme-${theme}`)
}

// Função para tratar erros de imagem
function handleImageError(img) {
  img.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjNDQ0IiByeD0iNDAiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNhYWEiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Im05IDlhMyAzIDAgMSAxIDYgMGEzIDMgMCAwIDEtNiAwIi8+CjxwYXRoIGQ9Im0yMSAyMS0zLjUtMy41TDE0IDIxIi8+CjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjIiIHJ5PSIyIi8+Cjwvc3ZnPgo8L3N2Zz4K"
  img.alt = "Imagem não encontrada"
}

// Adiciona tratamento de erro para imagem grande também
function addImageErrorHandling() {
  characterImageLarge.addEventListener("error", () => handleImageError(characterImageLarge))
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  createCharacterCards()
  addImageErrorHandling()

  // Seleciona o primeiro personagem por padrão
  selectCharacter(0)
})

// Adiciona suporte a teclado
document.addEventListener("keydown", (e) => {
  if (selectedCharacterIndex === -1) return

  switch (e.key) {
    case "ArrowLeft":
      e.preventDefault()
      const prevIndex = selectedCharacterIndex > 0 ? selectedCharacterIndex - 1 : characters.length - 1
      selectCharacter(prevIndex)
      break
    case "ArrowRight":
      e.preventDefault()
      const nextIndex = selectedCharacterIndex < characters.length - 1 ? selectedCharacterIndex + 1 : 0
      selectCharacter(nextIndex)
      break
  }
})
