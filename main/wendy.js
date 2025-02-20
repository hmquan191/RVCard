document.addEventListener("DOMContentLoaded", function () {
  const subTitle = document.querySelector(".sub-title-main");
  const infoTexts = [
    "Shon Seung-wan, better known by her stage name Wendy, is a South Korean singer. She is a member of the South Korean girl group Red Velvet. In 2021, she made her solo debut with the EP Like Water. In 2022, she became a member of SM Entertainment's supergroup Got the Beat.",
    "Her representative animal: Deer (Happiness to #Cookie Jar), Squirrel (Summer Magic onwards).<br>Her representative fruit: Blue-flesh Orange.<br>Her representative weapon: Scissors.",
    "She was a part of the predebut team SM Rookies.<br>She can speak English and Korean.<br>She can play the piano, guitar, flute, saxophone.<br>Her hobbies are: finding rare songs, cooking, walking by cafes, singing.",
    "Wendy debuted as a soloist on April 5, 2021 with first mini album ‘Like Water’.<br>Wendy released second solo album Wish You Hell on March 12, 2024.",
  ];

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let vh50 = window.innerHeight * 0.5; // 50vh

    // Xác định index dựa vào vị trí scroll (mỗi 50vh đổi 1 lần)
    let index = Math.min(
      Math.floor(scrollPosition / vh50),
      infoTexts.length - 1
    );

    // Cập nhật nội dung text
    subTitle.innerHTML = infoTexts[index];
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
