function nextPage() {
  document.body.innerHTML = `
    <div class="container">

      <h1>Do You Love Lovely? ❤️</h1>

      <br>

      <button onclick="yesAnswer()">YES 💖</button>

      <button id="noBtn" onclick="moveNo()">NO 😜</button>

    </div>
  `;
}

function moveNo() {
  const btn = document.getElementById("noBtn");

  btn.style.position = "absolute";
  btn.style.left = Math.random() * (window.innerWidth - 120) + "px";
  btn.style.top = Math.random() * (window.innerHeight - 80) + "px";
}

function yesAnswer() {
  document.body.innerHTML = `
    <div class="container">

      <h1>🥹❤️</h1>

      <h2>I Love You So Much Vishal ❤️</h2>

      <p>
      Dear Vishal,<br><br>

      Thank you for being in my life. ❤️<br>

      Every moment with you is special. 🥹<br>

      I promise to love you forever. 💖<br><br>

      <b>Forever Yours,<br>Lovely 🌹</b>

      </p>

    </div>
  `;
    }
