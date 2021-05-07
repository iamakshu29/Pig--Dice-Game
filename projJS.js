let score,roundScore,activePlayer,gamePlaying,prevDice;
init();

// Below Function is used for the roll-dice button


document.querySelector(".btn--roll").addEventListener('click', function()
{
    
    if(gamePlaying)
    {
        let dice = Math.floor(Math.random()*6+1);
        prevDice = dice;
        document.querySelector(".dice").style.display = 'block';
        document.querySelector(".dice").src = 'dice-' + dice + '.png';

        if(dice === 6 && prevDice === 6)
        {
            score[activePlayer] = 0;
            document.querySelector("#score--" + activePlayer).textContent = '0';
            nextPlayer();
        }

        else if(dice !== 1)
        {
            roundScore += dice;
            document.querySelector("#current--" + activePlayer).textContent = roundScore;  
        }
        else
        {   
            nextPlayer();
        }
    }
});   

// Below Function is used for the hold button

    document.querySelector(".btn--hold").addEventListener('click', function()
    {
        if(gamePlaying)
        {
            score[activePlayer] += roundScore;
            document.querySelector("#score--" + activePlayer).textContent = score[activePlayer];

            let input = document.querySelector(".final-score").value;
            if(input)
            {
                var winScore   = input;
            }

            else {
                winScore = 100;
            }

            if(score[activePlayer] >= winScore)
            {
                document.querySelector("#name--" + activePlayer).textContent = "Winner";
                document.querySelector(".dice").style.display = 'none';
                document.querySelector(".player--" + activePlayer).classList.add('winner');
                document.querySelector(".player--" + activePlayer).classList.remove('player--active');
                gamePlaying = false; 
            }
            else
            {
                nextPlayer();
            } 
        }
         
    });


// Below Function is used for switching the player     
function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current--0").textContent = roundScore;
    document.getElementById("current--1").textContent = roundScore;

    document.querySelector(".player--0").classList.toggle('player--active');
    document.querySelector(".player--1").classList.toggle('player--active');

    document.querySelector(".dice").style.display = 'none';
}


// init function is invoked when the new game button is being pressed..

document.querySelector(".btn--new").addEventListener('click',init);



// Below Function is used for the new game as to initialize all the things to 0

function init()
{
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = 'none';

    document.querySelector("#current--0").textContent = '0';
    document.querySelector("#current--1").textContent = '0';
    document.querySelector("#score--0").textContent = '0';
    document.querySelector("#score--1").textContent = '0';

    document.querySelector("#name--0").textContent = "PLAYER 1";
    document.querySelector("#name--1").textContent = "PLAYER 2";

    document.querySelector(".player--0").classList.remove('winner');
    document.querySelector(".player--1").classList.remove('winner');
    document.querySelector(".player--0").classList.remove('player--active');
    document.querySelector(".player--0").classList.remove('player--active');
    document.querySelector(".player--1").classList.add('player--active');
}
