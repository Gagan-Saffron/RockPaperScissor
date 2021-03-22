var you_score=00;
var com_score=00;

function gameLogic(choice){

    if(you_score>=15 || com_score>=15)
    {
        return;
    }
   
    let ranchoice=Math.floor(Math.random() * 3);
    let compchoice;
    if(ranchoice==0){
        compchoice="rock";
        comp.src='rock.png';
    }
    else if(ranchoice==1){
        compchoice="pap";
        comp.src='paper.png';
    }
    else{
        compchoice="scis";
        comp.src='sciss.png';
    }


    if(choice=="rock"){
        if(compchoice=="pap")
        {
            result.innerHTML="Paper covers rock and you LOOSE!!!";
            com_score++;
        }
        else if(compchoice=="scis")
        {
            result.innerHTML="Rock destroys scissor and you WIINN!!";
            you_score++;
        }
        else
            result.innerHTML="You are friends....!!";
    }
    else if(choice=="pap"){
        if(compchoice=="scis")
        {
            result.innerHTML="scissors cut paper and you LOOSE!!!";
            com_score++;
        }   
        else if(compchoice=="rock")
        {
            result.innerHTML="Paper covers rock and you WIINN!!";
            you_score++;
        }   
        else
            result.innerHTML="You are friends....!!";
    }
    else if(choice=="scis"){
        if(compchoice=="pap")
        {
            result.innerHTML="scissors cut paper and you WINN!!!";
            you_score++;
        }  
        else if(compchoice=="rock")
        {
            result.innerHTML="Rock destroys scissor and you LOOSE!!";
            com_score++;
        }
        else
            result.innerHTML="You are friends....!!";
    }

    you.children[1].innerHTML=you_score;
    com.children[1].innerHTML=com_score;

    if(you_score>=15 || com_score>=15)
    {
        if(you_score>com_score)
            final.children[0].innerHTML="Brao!!! You are the Winner."
        else
            final.children[0].innerHTML="Computer won!!. Better luck next time."

        final.classList.add("final_show");
    }

    return;
}


function restartGame()
{
    you_score=0;
    com_score=0;
    you.children[1].innerHTML=you_score;
    com.children[1].innerHTML=com_score;
    final.classList.remove("final_show");
    result.innerHTML="Start the game and play fair";
    return;
}


rock=document.querySelector(".rock");
pap=document.querySelector(".pap");
scis=document.querySelector(".scis");
comp=document.querySelector(".compchoice");

rock.addEventListener("click",()=>gameLogic("rock"));
pap.addEventListener("click",()=>gameLogic("pap"));
scis.addEventListener("click",()=>gameLogic("scis"));


result=document.querySelector(".result");
you=document.querySelector(".you");
com=document.querySelector(".com");
final=document.querySelector(".final");

restart=document.querySelector(".restart");
restart.addEventListener("click",restartGame);






