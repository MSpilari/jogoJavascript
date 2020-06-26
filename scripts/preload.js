function preload(){
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png')
    imagemInimigoGota = loadImage('assets/imagens/inimigos/gotinha.png')
    imagemInimigoTroll = loadImage('assets/imagens/inimigos/troll.png')
    imagemInimigoGotaVoadora = loadImage('assets/imagens/inimigos/gotinha-voadora.png')
    imagemGameOver = loadImage('assets/imagens/componentes/game-over.png')
    imagemTelaInicial = loadImage('assets/imagens/componentes/telaInicial.png')
    imagemVida = loadImage('assets/imagens/componentes/coracao.png')
    
    fita = loadJSON('../fitas/fita.json')
    fonteTelaInicial = loadFont('assets/imagens/componentes/fonteTelaInicial.otf')
    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3')
    somDoPulo = loadSound('assets/sons/somPulo.mp3')
}