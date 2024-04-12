export function rendez(lista,irany){
    lista.sort(function(e1,e2){
        let eredmeny = 1;
    if (e1.nev < e2.nev) {
        eredmeny = -1;
    }
    /*a sort minden lehetséges listaelem párt összehasnlít (név) ha a visszatérési értéke pozitív akkor nem cserél  ha negatív akkor cserél*/ 
    return eredmeny*irany;
    });
    /*írj egy olyan függvényt ami az ékezetes karaktereket átmenetileg kicseréli Á-A-ra és így rendezd*/
    /*további mezők szerinti rendezések megvalósítása*/ 
    return lista;
}

export function szures(lista,keresoszoveg){
    const szurtLista=lista.filter(function(ember){
        return ember.nev.includes(keresoszoveg);
    });

    return szurtLista;
}

export function torol(lista,id){
    lista.splice(id,1);
    return lista;
}
