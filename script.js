function nextPage() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function showLove() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}

function moveNo() {
    let btn = document.getElementById("noBtn");

    let x = Math.floor(Math.random() * 220) - 110;
    let y = Math.floor(Math.random() * 220) - 110;

    btn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesAnswer() {
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");

    createHearts();
}

function createHearts() {
    for (let i = 0; i < 80; i++) {
        let heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animation = "fallHeart 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

let style = document.createElement("style");
style.innerHTML = `
@keyframes fallHeart{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(110vh);
opacity:0;
}
}
`;
document.head.appendChild(style);
