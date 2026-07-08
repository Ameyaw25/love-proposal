
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const successScreen = document.getElementById("successScreen");


// No button movement

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);


    noBtn.style.position = "absolute";

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});


// For mobile users (touch)

noBtn.addEventListener("touchstart", () => {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);


    noBtn.style.position = "absolute";

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});




// Yes button action

yesBtn.addEventListener("click", () => {


    document.querySelector(".proposal-container").style.display = "none";


    successScreen.style.display = "flex";


    createConfetti();


});





// Confetti effect

function createConfetti(){


    for(let i = 0; i < 120; i++){


        let confetti = document.createElement("div");


        confetti.innerHTML = "❤️";


        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
        Math.random() * 20 + 15 + "px";


        confetti.style.animation =
        "fall 4s linear";


        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },4000);


    }


}



// Add falling animation dynamically

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall {

    to {

        transform:
        translateY(100vh)
        rotate(360deg);

        opacity:0;

    }

}

`;

document.head.appendChild(style);

