let nemOk = prompt("Enter your name")
if(nemOk == ""){
    document.getElementById("nem").innerHTML = "You"
}else{
    document.getElementById("nem").innerHTML = nemOk
}

const chooseButtons = document.querySelectorAll('[data-works]')
const finalCol = document.querySelector('[data-after-computer]')
const compScoreSpan = document.querySelector('[data-comp-score]')
const myScoreSpan = document.querySelector('[data-my-score]')
const CHOSE = [
    {
        name : 'Rock',
        emoji : '👊',
        wins : 'Scissors'
    },
    
    {
        name : 'Paper',
        emoji : '🖐',
        wins : 'Rock'
    },    
    
    {
        name : 'Scissors',
        emoji : '✌️',
        wins : 'Paper'
    }
]

chooseButtons.forEach(chooseButton => {
    chooseButton.addEventListener('click', () => {
        const choseName = chooseButton.dataset.works
        const chose = CHOSE.find(chose => chose.name === choseName)
        MakesACall(chose)
    })
})

function MakesACall(info){
    computerCHose = randomChoose()
    
    ourWinner = didWon(info,computerCHose)
    oppWinner = didWon(computerCHose,info)
    
    chosenResult(computerCHose,oppWinner)
    chosenResult(info,ourWinner)

    if(ourWinner) increament(myScoreSpan)
    if(oppWinner) increament(compScoreSpan)
}

let increament = (scoreSpan) => {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
} 

let chosenResult = (chosen,won) => {
    const div = document.createElement('div')
    div.innerText = chosen.emoji
    div.classList.add('score-select')
    if (won) div.classList.add ('winner')
    finalCol.after(div)
}

let didWon = (ourChoose,oppChoose) => {
    return ourChoose.wins === oppChoose.name
}

function randomChoose(){
    const ranIndex = Math.floor(Math.random() * CHOSE.length)
    return CHOSE[ranIndex]
}