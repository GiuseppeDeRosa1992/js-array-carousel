console.log("ciao giuseppe");

//Prendo la lista di immagini da html con .getelementbyclassname
let imgList = document.getElementsByClassName("image");
console.log(imgList)

let imgBlock;
let nextImg;

//Inizio ciclo
for (let i = 0; i < imgList.length; i++) {
    //creo la costante img e gli dico che è uguale al numero del ciclo che in quel momento ha imgList
    const img = imgList[i]
    console.log(i, img)

    //se img contiene block allora glielo rimuovo
    if(img.classList.contains("block")) {
        img.classList.remove("block");
        console.log("ho tolto block all'immagine?", i);
        imgBlock = i;
    } 
}

//creo variabile nextImg e gli dico che e uguale alla variabile imgBlock +1 (imgBlock vale il valore del ciclo for )
nextImg = imgBlock + 1;



