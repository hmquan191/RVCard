document.addEventListener("DOMContentLoaded", () => {
  let cards = document.querySelectorAll(".card");
  let stackArea = document.querySelector(".stack-area");
  let hiddenImage = document.querySelector("img");
  let totalCards = cards.length;
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

    // Điều chỉnh opacity của ảnh nền
    let awayCount = document.querySelectorAll(".card.away").length;
    let opacityValue = Math.min(awayCount / totalCards, 1);
    console.log(awayCount);
    console.log(totalCards);
    hiddenImage.style.opacity = opacityValue;

    // Khi cuộn đến 500vh, ẩn stack-area và hiển thị achievement-area
    if (window.scrollY >= 5 * window.innerHeight) {
      stackArea.classList.add("hidden");
    } else {
      stackArea.classList.remove("hidden");
    }

    rotateCards();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const menu = document.querySelector(".menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // let sectors = document.querySelectorAll(".sector");
  // let options = document.querySelectorAll(".option");
  // const totalSectors = sectors.length;
  // const angleStep = 360 / totalSectors; // Góc mỗi sector

  // sectors.forEach((sector, index) => {
  //     let angle = index * angleStep; // Tính góc theo index
  //     sector.style.transform = `rotate(${angle}deg) skewY(-30deg)`; // Điều chỉnh skewY
  // });

  // options.forEach((option, index) => {
  //     let angle = index * angleStep;
  //     option.style.transform = `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`;
  // });

  let sectors = document.querySelectorAll(".sector");

  let options = document.querySelectorAll(".option");

  const totalSectors = sectors.length;
  const skewVal = 360 / totalSectors - 90;

  var deviation = 0;
  if ((totalSectors / 2) % 2 != 0) {
    deviation = 360 / totalSectors / 2;
  }

  sectors.forEach((sector, index) => {
    const angle = (360 / totalSectors) * (index + 1) - deviation;

    let optionAngle = angle + Math.abs(skewVal) + (90 - Math.abs(skewVal)) / 2;
    options[
      index
    ].style.transform = `rotateZ(${optionAngle}deg) translateY(-140px) rotate(-${optionAngle}deg)`;
    sector.style.transform = `rotate(${angle}deg) skew(${skewVal}deg)`;
  });
});
