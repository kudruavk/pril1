// let age=prompt('Ur age?')
// if (age<18) {
//     alert('Vhod nizya')
// }
// else {
//     alert('Mozhna')
// }

let odin=document.querySelector(".odin")
let dva=document.querySelector(".dva")

let ramka=document.querySelector(".ramka")

odin.addEventListener("click", () =>{
    let block=document.createElement("div")
    block.classList=("block")
    ramka.append(block)
})
dva.addEventListener("click", () =>{
    for(let i=1;i<=2;i++){
let block=document.createElement("div")
    block.classList=("block")
    ramka.append(block)
    }
    
})
for(a=1;a<=3;a++){
    let block=document.createElement("div")
    block.classList=("block")
    ramka.append(block)
}