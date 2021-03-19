const btn = document.querySelector(".btn-toggle");
const replay = document.querySelector(".replay");

const weapon_btn = document.querySelectorAll(".weapon");

let c_score = document.querySelector(".computer-score");
let p_score = document.querySelector(".player-score");

let com_score = 0,player_score=0;

btn.addEventListener("click",function()
{
    document.body.classList.toggle("dark");

    btn.innerHTML == "Dark-mode" ? btn.innerHTML="Light-mode" : btn.innerHTML="Dark-mode";
});

replay.addEventListener("click",()=>
{
    location.reload();
})

function computer()
{
    const weapons = ["stone","paper","scissor"];
    const computerSelected = weapons[Math.floor(Math.random()*weapons.length)];
    return computerSelected;
}

function countScore(player,computer)
{
     const playerSelected =  document.querySelector(".selection-0");
     const computerSelected =  document.querySelector(".selection-1");
     playerSelected.textContent = `You Selected : `+player;
     computerSelected.innerHTML = `Computer Selected : `+computer;
     switch (true) 
     {
         case(player===computer) :
         break;

         case(player==='stone' && computer==='scissor'):
         case(player==='paper' && computer==='stone'):
         case(player==='scissor' && computer ==='paper'):
         player_score += 1;
        //  console.log(computer);
         break;

         default:
             com_score +=1;
             break;
     }
     c_score.innerHTML = "COMPUTER :" + com_score;
     p_score.innerHTML = "YOU : " + player_score;
     let comment = document.getElementById("comment")
     if(com_score == 10 || player_score ==10)
     {
        weapon_btn.forEach((buttons)=>
        {
            buttons.setAttribute('disabled', '');
            buttons.classList.add('weapon-opacity');
        });

         if(com_score==10)
         {
            comment.innerHTML="Good Luck Next time !!! Computer Wins";
            return;
         }
         else{
            comment.innerHTML="Congrats!!!! You have WON ";
            return;
         }
     }
     return;

}

function playGame()
{
    let playerSelected;
    weapon_btn.forEach((weapons)=>
    {
        weapons.addEventListener('click',function()
        {
            if(weapons.classList.contains('stone-btn'))
            {
                playerSelected = "stone";
            }
            else if(weapons.classList.contains("paper-btn"))
            playerSelected = "paper";
            else
            playerSelected = "scissor";

            // console.log(playerSelected)
            countScore(playerSelected,computer());
            return;
        })
    })
}

playGame();
