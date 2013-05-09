#[TCC] Mobile do Site Accessite

## O que foi utilizado?
- HTML5
- CSS3
- [Zurb Foundation](https://github.com/zurb/foundation)
- [jQuery](https://github.com/jquery/jquery)
- Javascript
- [matchMedia() polyfill by Paul Irish](https://github.com/paulirish/matchMedia.js)

### Site testado nos browsers:
- IE8,IE9 e IE10
- Firefox v20
- Chrome v26
- Opera 12.15
- Safari Mobile
- Chrome Mobile

### Changelog

#### Versão 2.6
- 2.6.1 : Alterado a chamada dos scripts no footer, alteração baseada na versão 2.5.2

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
