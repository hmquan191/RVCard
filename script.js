document.addEventListener("DOMContentLoaded", () => {
    let cards = document.querySelectorAll(".card");
    let stackArea = document.querySelector(".stack-area");

    function rotateCards() {
        let angle = 0;
        cards.forEach((card, index) => {
            if (card.classList.contains("away")) {
                card.style.transform = `translateY(-120vh) rotate(-48deg)`;
            } else {
                card.style.transform = `rotate(${angle}deg)`;
                angle -= 10;
                card.style.zIndex = cards.length - index;
            }
        });
    }

    rotateCards();

    window.addEventListener("scroll", () => {
        let distance = window.innerHeight / 2;
        let topVal = stackArea.getBoundingClientRect().top;

        let index = Math.floor(-1 * (topVal / distance + 1)); // Xác định card cần ẩn
        for (let i = 0; i < cards.length; i++) {
            if (i < index) {
                cards[i].classList.add("away");
            } else {
                cards[i].classList.remove("away");
            }
        }

        rotateCards();
    });
});
