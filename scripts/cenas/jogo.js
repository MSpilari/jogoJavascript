class Jogo{
    constructor(){
        this.indice = 0
        this.mapa = fita.mapa
    }

    setup(){
    cenario = new Cenario(imagemCenario, 3)
    
    pontuacao = new Pontuacao()

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

    personagem = new Personagem(
        matrizPersonagem, 
        imagemPersonagem, 
        0,
        30,
        110, 
        135, 
        220, 
        270
    )
        
    const inimigoGota = new Inimigo(
        matrizInimigoGota,
        imagemInimigoGota, 
        width - 52,
        30,
        52, 
        52, 
        104, 
        104,
        10
    )

    const inimigoTroll = new Inimigo(
        matrizInimigoTroll,
        imagemInimigoTroll,
        width * 2,
        0,
        200, 
        200, 
        400, 
        400,
        10
    )

    const inimigoGotaVoadora = new Inimigo(
        matrizInimigoGotaVoadora,
        imagemInimigoGotaVoadora,
        width - 52,
        200, 
        100, 
        75,
        200, 
        150,
        10
    )
    
    inimigos.push(inimigoGota)
    inimigos.push(inimigoTroll)
    inimigos.push(inimigoGotaVoadora)
    }

    keyPressed(key){
        if(key == 'ArrowUp'){
            personagem.pula()
            somDoPulo.play()
        }
    }

    draw(){
        cenario.exibe()
        cenario.move()
        
        vida.draw()

        pontuacao.exibe()
        pontuacao.adicionaPonto()
        
        personagem.exibe()
        personagem.anima()
        personagem.aplicaGravidade()
        
        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo]
        const inimigoVisivel = inimigo.x <= -inimigo.largura
        
        inimigo.velocidade = linhaAtual.velocidade
        
        inimigo.exibe()
        inimigo.move()
    

        if(inimigoVisivel){
            this.indice += 1
            inimigo.aparece()
            if(this.indice > this.mapa.length - 1){
                this.indice = 0
            }
        }
        
        if(personagem.estaColidindo(inimigo)){
            vida.perdeVida()
            personagem.tornarInvencivel()
            if(vida.vidas === 0){
                image(imagemGameOver, width / 2 - 200, height / 2)
                noLoop()
                // somDoJogo.stop()
            }
            
        }
    }
}