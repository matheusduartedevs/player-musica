let musicas = [
    {titulo: 'Samba do Arnesto', artista: 'Adoniran Barbosa', src: 'musicas/Adoniran Barbosa - Samba do Arnesto.mp3', img: 'img/samba1.png'},
]
let musica = document.querySelector('audio')
let indexMusica = 0
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

function duration(){
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(CurrentSong.duration));
}

// eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica)

document.querySelector('.botao-pause').addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra)

// functions
function renderizarMusica() {
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(CurrentSong.duration));
    })
}

function tocarMusica(){
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}

function pausarMusica() {
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
}

function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos
}