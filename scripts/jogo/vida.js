class Vida{
    constructor(vidaMaxima, vidaInicial){
        this.vidaMaxima = vidaMaxima
        this.vidaInicial = vidaInicial
        this.vidas = this.vidaInicial
        
        this.largura = 25
        this.altura = 25
        this.xInicial = 20
        this.yInicial = 20
    }
    
    draw(){
        for(let i = 0; i < this.vidas; i += 1){
            const margem = i * 10
            const posicao = this.xInicial * (1 + i)
            
            image(imagemVida, posicao + margem, this.yInicial, this.largura, this.altura)
        }
    }

    ganhaVida(){
        if(this.vidas < this.vidaMaxima){
            this.vidas += 1
        }
    }

    perdeVida(){
        this.vidas -= 1
    }
}