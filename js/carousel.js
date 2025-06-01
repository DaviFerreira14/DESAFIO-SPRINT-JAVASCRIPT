let carouselArr = [];

class Carousel {
    constructor(imagem, texto, link) {
        this.imagem = imagem;
        this.texto = texto;
        this.link = link;
    }
    
    static Start(arr){
        if(arr && arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._data = arr;
                Carousel.Next(); 
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const item = Carousel._data[Carousel._sequence];
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        carouselDiv.innerHTML = ` 
            <a href="${item.link}">
                <img src="img/${item.imagem}" alt="${item.texto}"
            </a>
        `;

        titleDiv.innerHTML = `
            <h2> ${item.texto}</h2>
        `;

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
};
