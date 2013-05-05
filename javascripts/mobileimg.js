// Carregamento das Imagens de topo apenas para desktop, via data-* atributo
var mq = window.matchMedia("(max-width: 767px)"),
    ImgMobile = document.querySelector(".mobileimg"),
    el = document.createElement("img"),
    data = ImgMobile.dataset,
    imgFull = data.srcfull,
    imgHeight = data.heightfull,
    imgWidth = data.widthfull;

if ( !mq.matches) {
    ImgMobile.classList.add('imghide'); 
    el.src = imgFull;
    el.width = imgWidth;
    el.height = imgHeight;
    ImgMobile.appendChild(el);
    window.setTimeout(function() {
        ImgMobile.classList.remove('imghide'); 
        ImgMobile.classList.add('imgshow'); 
    }, 1200);
}
// -----------------------------------------------------