class Noticia{
    constructor(titulo, dataPubli, resumo, texto){
    this.titulo = titulo;
    this.dataPubli = dataPubli;
    this.resumo = resumo;
    this.texto = texto;
}

divulgarNoticia(){
    console.log(this.titulo);
    console.log(this.dataPubli);
    console.log(this.resumo);
    console.log("")
    console.log(this.texto);
}
}

let noti = new Noticia("Atenção atenção, você caiu no pão!", "28/12/2005", "ele caiu no pão.", "top10textosdosanimes");
noti.divulgarNoticia();
