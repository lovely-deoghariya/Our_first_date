const photos = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg"
];

let index = 0;

setInterval(() => {
  const img = document.getElementById("slideshow");
  if (img) {
    index = (index + 1) % photos.length;
    img.src = photos[index];
  }
}, 2500);

function showLove() {
  document.getElementById("love").innerHTML = `
  ❤️ Dear Vishal ❤️<br><br>
  Thank you for always being there for me.<br>
  Every moment with you is special.<br><br>
  I Love You Forever ❤️<br><br>
  <b>Forever Yours,<br>Lovely 🌹</b>
  `;
}

function playSong() {
  window.open("https://youtu.be/9HbSSNpCwGY?si=9kmxeH5KNiRP0Aj1","_blank");
}
