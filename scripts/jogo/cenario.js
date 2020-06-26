class Cenario {
    constructor(imagem, velocidade){
        this.imagem = imagem
        this.velocidade = velocidade
        //Posição inicial da imagem no eixo X
        this.x1 = 0
        //Posição da 2° imagem no eixo X
        this.x2 = width
    }
    
    exibe(){
        // 1° param - Img que queremos carregar
        // 2° e 3° params - Eixo X e Y da tela
        // 4° e 5° params - Largura e altura da img como um todo
        image(this.imagem, this.x1, 0, width, height)
        image(this.imagem, this.x2, 0, width, height)
    }

    move(){
        this.x1 = this.x1 - this.velocidade
        this.x2 = this.x2 - this.velocidade
        // Quando a primeira imagem sai da tela, a segunda imagem entra
        // Quando a segunda imagem sai, a primeira entra logo atrás
        // Formando um loop e dando uma ideia de movimentação
        if(this.x1 < -width){
            this.x1 = width
        }
        if(this.x2 < -width){
            this.x2 = width
        }
    }
}
