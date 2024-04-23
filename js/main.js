console.log("ciao giuseppe");

//Prendo la lista di immagini da html con .getelementbyclassname
let imgList = document.getElementsByClassName("image");
console.log(imgList)

let imgBlock;
let nextImg;

//Richiamo tramite id il bottone dell'html
document.getElementById("next").addEventListener("click", function () {
    //Inizio ciclo
    for (let i = 0; i < imgList.length; i++) {
        //creo la costante img e gli dico che è uguale al numero del ciclo che in quel momento ha imgList
        const img = imgList[i]
        console.log(i, img)

        //se img contiene block allora glielo rimuovo
        if (img.classList.contains("block")) {
            img.classList.remove("block");
            console.log("ho tolto block all'immagine?", i);
            //do alla variabile imgBlock lo stesso valore di i senno non viene visto fuori dal ciclo questo valore
            imgBlock = i;
        }
    }
    //do a next img il valore di imgblock +1 e quando esce fuori dal ciclo ritorna all'img 0 della lista
    nextImg = imgBlock + 1
    if (nextImg >= imgList.length) {
        nextImg = 0
    }

    //metto il dispaly block alle immagini successive uno per volta
    imgList[nextImg].classList.add("block")
    console.log("Chi ha adesso display block?", imgBlock + 1)


})


//Richiamo tramite id il bottone dell'html
document.getElementById("previous").addEventListener("click", function () {
    //Inizio ciclo
    for (let i = 0; i < imgList.length; i++) {
        //creo la costante img e gli dico che è uguale al numero del ciclo che in quel momento ha imgList
        const img = imgList[i]
        console.log(i, img)

        //se img contiene block allora glielo rimuovo
        if (img.classList.contains("block")) {
            img.classList.remove("block");
            console.log("ho tolto block all'immagine?", i);
            //do alla variabile imgBlock lo stesso valore di i senno non viene visto fuori dal ciclo questo valore
            imgBlock = i;
        }
    }
    
    nextImg = imgBlock - 1
    //dopo che la lista arriva all'ultima img allora riparte il ciclo
    if (nextImg < 0) {
        nextImg = 4;
    }

    //per il tasto previuos cambio il +1 con -1 per andare avanti con next e andare indietro con previous
    imgList[nextImg].classList.add("block")
    console.log("Chi ha adesso display block?", imgBlock)
})
