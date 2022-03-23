class Noticia{
    constructor(titulo, dataPubli, resumo, texto){
    this.titulo = titulo;
    this.dataPubli = dataPubli;
    this.resumo = resumo;
    this.texto = texto;
}

divulgarNoticia(){
console.log(this.titulo + "\n" + this.dataPubli + "\n" + this.resumo + "\n\n" + this.texto);
}
}


let noti = new Noticia("Atenção atenção, você caiu no pão!", "28/12/2005", "ele caiu no pão.", "top10textosdosanimes");
noti.divulgarNoticia();
