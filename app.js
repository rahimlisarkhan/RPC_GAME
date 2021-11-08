//Global General Variables
let gameData = ['r', 'p', 's']
let player1Point = 0
let player2Point = 0

//Play Intro
const playIntro = () => {
    let playIntroContent = document.querySelector('#play_intro')
    let playAreaContent = document.querySelector('#play_content')
    let playBtn = document.querySelector('#play_intro button')
    playBtn.addEventListener('click', () => {
        playIntroContent.classList.toggle('d-none')
        playAreaContent.classList.toggle('d-none')
    })

}

//Random Comp Attack
const randomGameAttack = (arr) => {
    let randomNum = Math.floor(Math.random() * arr.length)

    return arr[randomNum]
}

//Play Result
const playResult = (player1, player2) => {
    let player1Status = document.querySelector('#player_1 .jumbotron .h1')
    let playerCompStatus = document.querySelector('#player_comp .jumbotron .h1')
    let player1Img = document.querySelector('#player_1 img')
    let playerCompImg = document.querySelector('#player_comp img')
    let player1Score = document.querySelector('#player_1 .jumbotron .h4')
    let playerCompScore = document.querySelector('#player_comp .jumbotron .h4')

    if (player1 === player2) {
        console.log('-------------------');
        console.log('Draf')
        console.log(player1);
        console.log(player2);
        console.log('-------------------');

        player1Score.innerHTML = player1Point;
        playerCompScore.innerHTML = player2Point;

        player1Img.src = `./img/${player1}.png`
        playerCompImg.src = `./img/${player2}.png`


        player1Status.classList.remove('text-success')
        playerCompStatus.classList.remove('text-success')

        player1Status.classList.remove('text-danger')
        playerCompStatus.classList.remove('text-danger')


        player1Status.innerHTML = 'DRAF'
        playerCompStatus.innerHTML = 'DRAF'

    } else if (player1 === 'p' && player2 === 'r') {

        console.log('-------------------');
        console.log('player1 win');
        console.log(player1);
        console.log(player2);
        console.log('-------------------');

        player1Point++
        player1Img.src = `./img/${player1}.png`
        playerCompImg.src = `./img/${player2}.png`

        player1Score.innerHTML = player1Point;

        player1Status.innerHTML = 'WIN'
        playerCompStatus.innerHTML = 'LOSE'

        player1Status.classList.add('text-success')
        playerCompStatus.classList.remove('text-success')

        player1Status.classList.remove('text-danger')
        playerCompStatus.classList.add('text-danger')

    } else if (player1 === 'r' && player2 === 's') {
        console.log('-------------------');
        console.log('player1 win');
        console.log(player1);
        console.log(player2);
        console.log('-------------------');

        player1Point++

        player1Img.src = `./img/${player1}.png`
        playerCompImg.src = `./img/${player2}.png`

        player1Score.innerHTML = player1Point;

        player1Status.innerHTML = 'WIN'
        playerCompStatus.innerHTML = 'LOSE'

        player1Status.classList.add('text-success')
        playerCompStatus.classList.remove('text-success')

        player1Status.classList.remove('text-danger')
        playerCompStatus.classList.add('text-danger')

    } else if (player1 === 's' && player2 === 'p') {
        console.log('-------------------');
        console.log('player1 win');
        console.log(player1);
        console.log(player2);
        console.log('-------------------');

        player1Point++

        player1Img.src = `./img/${player1}.png`
        playerCompImg.src = `./img/${player2}.png`

        player1Score.innerHTML = player1Point;

        player1Status.innerHTML = 'WIN'
        playerCompStatus.innerHTML = 'LOSE'


        player1Status.classList.add('text-success')
        playerCompStatus.classList.remove('text-success')

        player1Status.classList.remove('text-danger')
        playerCompStatus.classList.add('text-danger')

    } else {
        console.log('-------------------');
        console.log('player2 win');
        console.log(player1);
        console.log(player2);
        console.log('-------------------');


        player2Point++
        player1Img.src = `./img/${player1}.png`
        playerCompImg.src = `./img/${player2}.png`

        playerCompScore.innerHTML = player2Point;

        player1Status.innerHTML = 'LOSE'
        playerCompStatus.innerHTML = 'WIN'


        player1Status.classList.remove('text-success')
        playerCompStatus.classList.add('text-success')

        player1Status.classList.add('text-danger')
        playerCompStatus.classList.remove('text-danger')
    }
}

//Play Game
const playGame = (event) => {
    realPlayerAttack = event.key
    compRandomAttack = randomGameAttack(gameData)

    if (gameData.indexOf(realPlayerAttack) !== -1) {
        playResult(realPlayerAttack, compRandomAttack)
    } else {
        alert("Please choose 'R S P' button ")
    }
}


//Run App
window.onkeypress = playGame
playIntro()