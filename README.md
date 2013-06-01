#[TCC] Mobile do Site Accessite

## O que foi utilizado?
- HTML5
- CSS3
- [Zurb Foundation](https://github.com/zurb/foundation)
- [jQuery](https://github.com/jquery/jquery)
- Javascript
- [matchMedia() polyfill by Paul Irish](https://github.com/paulirish/matchMedia.js)
- [Hammerjs](http://eightmedia.github.io/hammer.js/)

### Site testado nos browsers:
- IE8,IE9 e IE10
- Firefox v20
- Chrome v26
- Opera 12.15
- Safari Mobile
- Chrome Mobile

### Bugs * Removido
- Ao implementar o Hammerjs, ele cria uma área clicavel aonde não existe um menu, porem essa área sem nada, aciona o menu quando o "[Fast Buttons](https://developers.google.com/mobile/articles/fast_buttons)" é implementado. Ver Changelog 2.9.8.

### Changelog

#### Versão 4.0
- 4.0 : Adicionado Locais, Noticias, Eventos, Banner do Topo.
- 4.0.1 : Fix para botão do menu no Galaxy.
- 4.0.2 : Adicionado descrição das páginas
- 4.0.3 : removido o hammerjs dos arquivos, adicionado resultado da busca, adicionado banner na home

#### Versão 3.1
- 3.1.1 : Removido o Hammerjs por motivos de Bug
- 3.1.2 : Alteração do nome "Locais Acessíveis" para "Acessibilidade"
- 3.1.3 : Adicionado botão de login e cadastro
- 3.1.4 : Adicionado botão de login e cadastro em todas as páginas
- 3.1.5 : Adicionado 6 noticias
- 3.1.6 : Adicionado links de auxilio na página de login, links para cadastro e esqueceu a senha

#### Versão 3.0
- 3.0.1 : Correção do Bug dos links com a implementação do Hammersj
- 3.0.2 : Ainda com bug do menu no mobile

#### Versão 2.9
- 2.9.1 : Teste de implementação de gesture utilizando [Hammerjs](http://eightmedia.github.io/hammer.js/) na home
- 2.9.2 : Ajuste na interna-locais/eventos/noticias para o mobile
- 2.9.3 : Adicionado os comentários na interna de locais, comentarios carregados via ajax.
- 2.9.4 : Adicionado validação do formulário de contato com "required" do HTML5
- 2.9.5 : Adicionado o "swipe" em todas as páginas mobile. Implementação do [Hammerjs](http://eightmedia.github.io/hammer.js/)
- 2.9.6 : Removido o "[Fast Buttons](https://developers.google.com/mobile/articles/fast_buttons)" do main.js
- 2.9.7 : Ao remover o "[Fast Buttons](https://developers.google.com/mobile/articles/fast_buttons)" do main.js, ele quebra o js, por que precisa por um ";" na linha 114 ao invez de ser ","
- 2.9.8 : Correção provisória para o "[Fast Buttons](https://developers.google.com/mobile/articles/fast_buttons)" no mobile.
- 2.9.9 : Problemas ao clicar nos links após implementação do [Hammerjs](http://eightmedia.github.io/hammer.js/)


#### Versão 2.8
- 2.8.1 : Alteração no menu do footer, adaptado para o Mobile
- 2.8.2 : Alterar a estrutura das páginas de locais.html e interna-locais.html, adicionado sidebar de categorias e banner de publicidade
- 2.8.3 : Alteração de estrutura das páginas de eventos, noticias, interna-noticia, interna-evento
- 2.8.4 : Adicionado tamanho nas imagens da index, locais e noticias
- 2.8.5 : Adicionado novo footer em todas as páginas
- 2.8.6 : Alteração de layout nas paginas de locais e noticias, removido padding dos articles
- 2.8.7 : Alterações gerais de layout para formatação no mobile e desktop
- 2.8.8 : Removido input de redigir a senha e alterado class na "collapse" para "mobile-collapse" na página de noticias

#### Versão 2.7
- 2.7.1 : Teste para imagens com Data URI's. Arquivo "interna-locais.php"

#### Versão 2.6
- 2.6.1 : Alterado a chamada dos scripts no footer, alteração baseada na versão 2.5.2
- 2.6.2 : Alterado a chamada do css no header, alteração baseada na versão 2.5.1
- 2.6.3 : Alterado a chamada das imagens de topo nas internas para a nova forma, alteração baseada na versão 2.5.4
- 2.6.4 : Ajustes no HTML

#### Versão 2.5
- 2.5.1 : "Juntado" o offcanvas.css com o app.css para ter apenas um request de css
- 2.5.2 : "Juntado" arquivos js do foundation em um só (build.js)
- 2.5.3 : Adicionado fallback pro jQuery
- 2.5.4 : Adicionado feature para que o carragamento da imagem do topo das págias seja via data-* atributos para evitar que seja carregada no mobile
- 2.5.5 : Fix para IE8/IE9 para a feature da v2.5.4.
- 2.5.5.1 : Removido a request do imgmobile.js, adicionado os códigos no main.js.
- 2.5.5.2 : alterado o tempo do css transition da imagem de destaque.

#### Versão 2.4
- Teste de cores para design
- Adicionado novo header nas internas
- Adicionado class "current-page" no menu principal para desktop e mobile.
- Ajuste no menu mobile, adicionado icone e class current-page
- Adicionado novo footer nas internas, icone de noticias ajustes gerais

#### Versão 2.3
- Estilizando a home para teste

#### Versão 2.2
- Adicionado loader para as páginas home, locais acessíveis, noticias no mobile
- Removido animaçoes de javascript para mostrar mais noticias e locais no mobile
- Adicionado animaçoes simples com CSS3 para mostrar mais noticias e locais no mobile

#### Versão 2.1
- Adicionado página de Parceiros
- Adicionado o Title das Páginas
- Adicionado o Campo de busca em todas as páginas
- Removido CSS adicional - foundation.min.css
- Removido Scripts comentados do footer
- Adicionado listagem de noticias da home via Ajax, para a versão desktop e Mobile
- Adicionado listagem de locais via ajax, para a versão desktop e Mobile
- Adicionado listagem de eventos via ajax, para a versão desktop

#### Versão 2.0
- Indetação do código
- Ajustes finais na estrutura do html
- Iniciado implemtação do ajax.

#### Versão 1.5
- Adicionado as páginas de locais e internas de locais

#### Versão 1.4
- Adicionado as páginas de noticias, eventos e suas internas

#### Versão 1.3
- Corrigido bug do menu no Firefox.

#### Versão 1.2
- Organizado Páginas a entrar no site

#### Versão 1.0
- Projeto Iniciado
