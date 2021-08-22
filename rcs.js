let nemOk = prompt("Enter your name")
if(nemOk == ""){
    document.getElementById("nem").innerHTML = "You"
}else{
    document.getElementById("nem").innerHTML = nemOk
}

const chooseButtons = document.querySelectorAll('[data-works]')
const CHOSE = [
    {
        name : 'Rocks',
        emoji : '👊',
        wins : 'Scissors'
    },
    
    {
        name : 'Papers',
        emoji : '🖐',
        wins : 'Rocks'
    },    
    
    {
        name : 'Scissors',
        emoji : '✌️',
        wins : 'Papers'
    }
]

chooseButtons.forEach(chooseButton => {
    chooseButton.addEventListener('click', () => {
        const choseName = chooseButton.dataset.works
        MakesACall(choseName)
    })
})

function MakesACall(info){
    console.log(info)
}