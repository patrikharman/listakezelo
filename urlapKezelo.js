/*Az űrlapról összegyűjtjük az adatokat a submit gombra kattintva beletesszük a listába*/

import { init } from "./main.js"

export function ujAdat(lista) {
    const nevElem=$("#nev")
    const korElem=$("#kor")

    const nemElem=$("#input[name='nem']:checked")
    const submitElem=$("#submit")
    const adatOBJ={
        nev:"",
        kor:0,
        nem:false
    }
    submitElem.on("click",function (event) {
        event.preventDefault();/*leszedi az alapértelmezett hozzárendelt */
        adatOBJ.nev = nevElem.val()
        adatOBJ.kor = Number(korElem.val())
        adatOBJ.nem = (nemElem.val() === "ferfi" ? true : false)
        console.log(adatOBJ)
        const validElem =$(".valid-feedback")
        const nevValidE = validElem.eq(0).css("display")!=="none"
        const korValidE = validElem.eq(1).css("display")!=="none"
        console.log(nevValidE,korValidE)
        if(nevValidE && korValidE){
            lista.push(adatOBJ)
            init(lista)
        }else{
            console.log("hibás adatok!")
        }
       
    })
}