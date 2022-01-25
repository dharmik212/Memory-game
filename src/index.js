document.addEventListener('DOMContentLoaded',() => {
    const cardsArray = [
        {
            name:'fires',
            img:'src/images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'src/images/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name:'hotdog',
            img:'src/images/hotdog.png'
        },
        {
            name:'fires',
            img:'src/images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'src/images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'src/images/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name:'hotdog',
            img:'src/images/hotdog.png'
        },

    ]
    cardsArray.sort(() => 0.5 - Math.random())
    console.log(cardsArray)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard(){
        for(let i =0; i< cardsArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','src/images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }

    function flipcard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src',cardsArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }

        function checkForMatch(){
            const cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenIds[0]
            const optionTwoId = cardsChosenIds[1]

            if(optionOneId == optionTwoId){
                alert('You Have Clicked The Same Image!')
                cards[optionOneId].setAttribute('src','src/images/blank.png')
                cards[optionTwoId].setAttribute('src','src/images/blank.png')
            }else if(cardsChosen[0] === cardsChosen[1]){
                alert('You Have Found a Match!!')
                cards[optionOneId].setAttribute('src','src/images/white.png')
                cards[optionTwoId].setAttribute('src','src/images/white.png')
                cards[optionOneId].removeEventListener('click',flipcard)
                cards[optionTwoId].removeEventListener('click',flipcard)
                cardsWon.push(cardsChosen)
            } else{
                cards[optionOneId].setAttribute('src','src/images/blank.png')
                cards[optionTwoId].setAttribute('src','src/images/blank.png')
                alert('Sorry Try Again!')

            }
                
            cardsChosen = []
            cardsChosenIds = []
            resultDisplay.textContent = cardsWon.length
            if(cardsWon.length === 6){
                resultDisplay.textContent = 'Congratulations! You Have Won!'
            }

            console.log(cardsWon)
            console.log(cardsChosen)
        }
    }

    createBoard()



})