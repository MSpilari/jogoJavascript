class Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, 
        alturaSprite){
            /* - Matriz é a matriz que será usada para selecionar os sprites
             - Imagem é o conjunto de sprites
             - X é o posicionamento na tela
             - Largura/Altura são do personagem que estamos usando
              */
            this.matriz = matriz
            this.imagem = imagem
            this.largura = largura
            this.altura = altura
            this.x = x
            this.variacaoY = variacaoY
            this.y = height - this.altura - this.variacaoY
            this.larguraSprite = larguraSprite
            this.alturaSprite = alturaSprite
            this.frameAtual = 0
        }
        exibe(){
            // 1° param - Img que queremos carregar
            // 2° e 3° params - Eixo X e Y da tela
            // 4° e 5° params - Largura e altura da img como um todo
            // 6° e 7° params - Coordenadas de X e Y dentro da imagem mapeada
            // 8° e 9° param - Quantos pixels de dentro da imagem serão pegos
            image(
                this.imagem, 
                this.x, 
                this.y, 
                this.largura, 
                this.altura, 
                this.matriz[this.frameAtual][0], 
                this.matriz[this.frameAtual][1], 
                this.larguraSprite, 
                this.alturaSprite
            )
            this.anima()
        }
        anima(){
            this.frameAtual >= this.matriz.length - 1 ? this.frameAtual = 0 : this.frameAtual += 1
        }
}