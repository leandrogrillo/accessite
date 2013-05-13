window.onload = function () {

    // Carregamento das Imagens de topo apenas para desktop, via data-* atributo
    var mqDataAttr = window.matchMedia("(max-width: 767px)"),
        ImgMobile = document.querySelector(".mobileimg"),
        el = document.createElement("img"),
        // data = ImgMobile,
        imgFull = ImgMobile.getAttribute("data-srcfull"),
        imgHeight = ImgMobile.getAttribute("data-heightfull"),
        imgWidth = ImgMobile.getAttribute("data-widthfull");

    if ( !mqDataAttr.matches) {
        el.src = imgFull;
        el.width = imgWidth;
        el.height = imgHeight;
        ImgMobile.appendChild(el);
        ImgMobile.classList.add('imghide');
        window.setTimeout(function() {
            ImgMobile.classList.remove('imghide');
            ImgMobile.classList.add('imgshow');
        }, 1200);
    }

    // -----------------------------------------------------

    // Carregamento de noticias, eventos e locais acessíveis via ajax para desktop
    var mq = window.matchMedia("(max-width: 768px)"),
        Wrapper = $("#listagem-wrapper"),
        bMais = $("#b-mais"),
        guia = $('body').data('guia'),
        loader = $('#loader');

    function LoadMais(NomeArquivo, Tempo){
        $.ajax({
            url: "includes/"+NomeArquivo+".html",
            dataType: "html",
            success: function(data) {
                window.setTimeout(function() {
                    Wrapper.html(data).addClass('fadein');
                }, Tempo);
            }
        });
    }

    function LoadMaisMobile(NomeArquivo){
        bMais.on('click', function(e) {
            e.preventDefault();

            loader.addClass('fadein');
            bMais.addClass('fadein');

            LoadMais(NomeArquivo, 2000);
            window.setTimeout(function() {
                loader.removeClass('fadein').addClass('fadeout');
                bMais.removeClass('fadein').addClass('fadeout');
            }, 2100);

        });
    }

    if( !mq.matches ){

        switch (guia) {
            case "home":
                LoadMais('listagem-noticias-home', 1000);
                break;

            case "noticias":
                LoadMais('listagem-noticias', 1000);
                break;

            case "locais":
                LoadMais('listagem-locais', 1000);
                break;

            case "interna-locais":
                LoadMais('comentarios-desktop', 1000);
                break;

        }
    } else {

        switch (guia) {
            case "home":
                LoadMaisMobile('listagem-noticias-home');
                break;

            case "noticias":
                LoadMaisMobile('listagem-noticias');
                break;

            case "locais":
                LoadMaisMobile('listagem-locais');
                break;

            case "interna-locais": 
                LoadMaisMobile('comentarios-mobile');
                break;

        }

    }

    if ( mq.matches ) {
        var element = document.getElementById('mobile-swipe'),
            body = document.getElementById('page'),          
            SwipeRightMenu = Hammer(element).on("swiperight", function(event) {
                event.gesture.stopPropagation();
                body.classList.add('active');
            }),
            SwipeRightMenu = Hammer(element).on("swipeleft", function(event) {
                event.gesture.stopPropagation();
                body.classList.remove('active');
            }),
            FastTap = Hammer(element).on("tap", function(event) {
                var link = this.href;
                if ( typeof link != 'undefined' ){
                    location.href = link;
                }                
                event.preventDefault();
            });
    }
    // -----------------------------------------------------

}