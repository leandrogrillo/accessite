// Carregamento das Imagens de topo apenas para desktop, via data-* atributo para IE9
var ImgMobile = $(".mobileimg"),
    el = document.createElement("img"),
    // data = ImgMobile,
    imgFull = ImgMobile.data("srcfull"),
    imgHeight = ImgMobile.data("heightfull"),
    imgWidth = ImgMobile.data("widthfull");

if ( !matchMedia('(max-width: 767px)').matches) {
    ImgMobile.addClass('imghide'); 
    el.src = imgFull;
    el.width = imgWidth;
    el.height = imgHeight;
    ImgMobile.prepend(el);
    window.setTimeout(function() {
        ImgMobile.removeClass('imghide'); 
        ImgMobile.addClass('imgshow'); 
    }, 1200);
}
// -----------------------------------------------------