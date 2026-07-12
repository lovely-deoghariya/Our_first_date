function nextPage() {
  document.body.innerHTML = `
  <div class="card">
    <h1>Do You Love Lovely? ❤️</h1>
    <button onclick="yes()">YES 💖</button>
  </div>
  `;
}

function yes() {
  document.body.innerHTML = `
  <div class="card">
    <h1>🥹❤️</h1>
    <h2>I Love You So Much Vishal</h2>
    <p>Forever Yours,<br><b>Lovely ❤️</b></p>
  </div>
  `;
}
