window.onload = function () {
    var mq = window.matchMedia( "(min-width: 768px)" ),
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
                    Wrapper.hide().html(data).fadeIn();
                }, Tempo);                
            }
        });
    }

    function LoadMaisMobile(NomeArquivo){
        bMais.on('click', function(e) { 
            e.preventDefault();

            loader.fadeIn();          

            LoadMais(NomeArquivo, 2000);
            window.setTimeout(function() {
                Scroll('listagem-wrapper');
            }, 2100);

            bMais.fadeOut(2000);

            loader.fadeOut(2000);        
        });
    }

    function Scroll(id){
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            1000);
    }

    if( mq.matches ){
            
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

        }

    }
    

    


}