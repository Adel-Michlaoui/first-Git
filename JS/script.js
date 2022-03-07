let btnPlus= document.getElementsByClassName("fas fa-plus-circle")
let btnSum= document.getElementsByClassName("somme")

for (let i of btnPlus) {
i.addEventListener("click", function() {
    this.nextElementSibling.innerHTML ++ ;
    console.log( btnSum.innerHTML =(this.parentNode.nextElementSibling.childNodes[5].innerHTML)+ btnSum);

    if (isNaN(this.nextElementSibling.innerHTML)) {
        this.nextElementSibling.innerHTML = 0
        return (0)
        
    }
    //console.log(this.nextElementSibling.innerHTML --)
})
}

let btnMinus= document.getElementsByClassName("fas fa-minus-circle")

for (let i of btnMinus) {
i.addEventListener("click", function () {
    
     if (this.previousElementSibling.innerHTML <= 0 || isNaN(this.previousElementSibling.innerHTML)) 
     {
        this.previousElementSibling.innerHTML = 0
      return  
     }

    this.previousElementSibling.innerHTML --
    //console.log(this.nextElementSibling.innerHTML --)
})
}

let btnTrash= document.getElementsByClassName("fas fa-trash")

for (let i of btnTrash) {
    i.addEventListener("click", function() {
        this.parentNode.parentNode.parentNode.parentNode.remove()
    })
}

let btnLike= document.getElementsByClassName("fas fa-heart")

for (let i of btnLike) {
i.addEventListener("dblclick", function() {
    if (this.style.color=="") {
        this.style.color="red";
    }else{
    this.style.color="";
}
})

}



    


