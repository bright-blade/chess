for(let y=0 ; y<8 ; y++){
    document.querySelector(".chess").innerHTML += ` <div class="line line${y}"> </div>`
    for (let x=0; x<8; x++)

        if((x+y)%2===0){

            document.querySelector(".line"+y).innerHTML +=  `<div class="box red" onclick="changecolor(this)"></div>` ;
        }else{
            document.querySelector(".line"+y).innerHTML +=  `<div class="box blue" onclick="changecolor(this)"></div>` ;
        }
}
function changecolor(thisElem){
    thisElem.classList.toggle("white");
    }
