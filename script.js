function nextPage(){

document.body.innerHTML=`

<div class="container">

<h1>Do You Love Lovely? ❤️</h1>

<button onclick="yesAnswer()">YES 💖</button>

<button id="noBtn" onclick="moveNo()">NO 😜</button>

</div>

`;

}

function moveNo(){

let b=document.getElementById("noBtn");

b.style.position="fixed";

b.style.left=Math.random()*(window.innerWidth-120)+"px";

b.style.top=Math.random()*(window.innerHeight-80)+"px";

}

function yesAnswer(){

document.body.innerHTML=`

<div class="container">

<h1>🥹❤️</h1>

<h2>I Love You Too Betuuuu ❤️😘</h2>

<p>

Thank You For Loving Me ❤️<br><br>

Forever Yours,<br>

<b>Lovely ❤️🌹</b>

</p>

</div>

`;

  }
