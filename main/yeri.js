document.addEventListener("DOMContentLoaded", function () {
  const subTitle = document.querySelector(".sub-title-main");
  const infoTexts = [
    "Kim Ye-rim, better known by her stage name Yeri, is a South Korean singer and actress. She is a member of South Korean girl group Red Velvet. Aside from her music career, Yeri is the main actress of Blue Birthday and BITCH X RICH.",
    "She joined the group in the beginning of 2015.<br>Her representative fruit: Violet Grape (not to be confused with Green Grape).<br>Her representative weapon: Beast.",
    "She was part of SM Rookies.<br>Her English name is Katy.<br>Education: Hanlim Multi Art School.",
    "Her favorite color is pink.<br>Her favorite food is Tuna Kimchi Fried Rice.<br>She used to share a room with Joy.",
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
