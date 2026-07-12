function nextPage() {
  document.getElementById("love").innerHTML = `
    <h2>Do You Love Lovely? ❤️</h2>

    <button onclick="yesAnswer()">YES 💖</button>

    <button id="noBtn" onmouseover="moveNo()">NO 😜</button>
  `;
}

function moveNo() {
  let btn = document.getElementById("noBtn");

  btn.style.position = "absolute";
  btn.style.left = Math.random() * 250 + "px";
  btn.style.top = Math.random() * 450 + "px";
}

function yesAnswer() {
  document.getElementById("love").innerHTML = `
    <h2>🥹❤️</h2>
    <p>
    I knew you would say YES! 💖<br><br>

    Dear Vishal,<br><br>

    Thank you for being in my life.<br>
    I Love You Forever ❤️<br><br>

    <b>Forever Yours,<br>Lovely 🌹</b>
    </p>
  `;
    }
