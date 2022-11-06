var MeuNome = "Leonardo Gomes da Silva"
var MinhaProfissao = "Desenvolvedor";
var x = 0;
var y = 0;

function typeForMe() {
    
    if (MeuNome.length >= x) {
        $("#typing2").attr('class', '');
        var h1 = $("#typing").text();
        $("#typing").text(h1 + MeuNome.charAt(x));
        x++;
    }

    if(MinhaProfissao.length >= y && MeuNome.length <= x){
        $("#typing").attr('class', '');
        $("#typing2").attr('class', 'typing');

        var h2 = $("#typing2").text();
        $("#typing2").text(h2 + MinhaProfissao.charAt(y));
        y++
    }

    if(MinhaProfissao.length === y && MeuNome.length <= x){
        $("#typing2").attr('class', '');
        clearInterval(timer);
    }
}


var timer = setInterval(typeForMe, 150);
