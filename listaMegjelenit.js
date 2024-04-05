export function htmlOsszeallit(lista) {
    let txt="<table class='table table-striped'>"
    txt+="<thead><tr><th>Név</th><th>Kor</th><th>Nem</th></tr>"
    txt+="<tbody>"
    lista.forEach(elem => {
        txt+=`<tr><td>${elem.nev}</td><td>${elem.kor}</td><td>${elem.nem}</td></tr></thead>`
    });
    txt+="</tbody></table>"
    return txt;
}
export function megjelenit(txt) {
    const divELEM=$(".adatok")
    divELEM.html(txt)
}