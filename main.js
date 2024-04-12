import { emberekLISTA } from "./adat.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";
import {rendez, szures,torol} from "./adatKezelo.js"
/*jelenítsük meg a listánkat táblázatban,majd a listát tudjuk rendezni pl név szerint ha rákattintunk a táblázat fejlécére akkor rendezze be a táblázat sorait. tudjunk szűrni név alapján 
tudjunk új adatot hozzáadni
tudjunk törölni a táblázat egy sorát*/
/*függvények és eljárások
1. htmlOszzeallit(lista)->txt | összelátja a táblázat html szerkezetét egy szöveges változóba
2. megjelenit(txt)->megjelenit egyadott html elemben paraméterben kapott szzöveget
3. rendez(lista)-> rendezettlista a paraméterben kapott listát név szerint megrendezi
4. adathozzáadás(lista) -> kibővítettlista | ősszegyűjti az űrlapról az adatokat és összeállít belőlük  egy objektumot majd azt beleteszi listába
5. torol(lista,id)->tlista | kitörli a listából az adott id-jű elemet.
Akkor fog lefutni,ha a sor melletti töröl gombra kattintunk.
6. szűrés(lista,keresoszoveg) -> szűrtlista | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében,mindez akkor fut le ha beírunk valamit a keresőmezőbe*/


let irany = 1 /*1 - növekvő rendezés*/
init(emberekLISTA)

szuresEsemeny();

function init(lista){
    megjelenit(htmlOsszeallit(lista));
    rendezEsemeny();
    torolEsemeny();
}
function rendezEsemeny(){
    const nevElem = $(".adatok table th").eq(0)
    nevElem.on("click",function () {
    const rLista = (rendez(emberekLISTA,irany));
    console.log(rLista);
    init(rLista)
    irany*=(-1)
    });


}
function szuresEsemeny(){
const keresoElem=$("#szuro")
keresoElem.on("keyup",function(){
    let keresoszoveg=keresoElem.val()
    const szLista= szures(emberekLISTA,"Á")
    console.log(szLista)
    init(szLista)
});
}

function torolEsemeny(){
    const torolGomb=$(".torol")
torolGomb.on("click",function(event){
    let id = event.target.id;
    const LISTA = torol(emberekLISTA,id);
    init(LISTA);
});
}
