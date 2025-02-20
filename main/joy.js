document.addEventListener("DOMContentLoaded", function () {
  const subTitle = document.querySelector(".sub-title-main");
  const infoTexts = [
    "Park Soo-young, better known by her stage name Joy, is a South Korean singer, actress, and host. She debuted as a member of South Korean girl group Red Velvet in August 2014.",
    "Her designated color is green.<br>Her representative animal: Canary (Happiness to #Cookie Jar), Chick (Summer Magic onwards).<br>Her representative fruit: Green Kiwi.",
    "She was casted in 2012 Global Audition in Seoul.<br>She was not a part of SM Rookies.<br>Education: School of Performing Arts Seoul.",
    "Her representative weapon: Submachine Gun.<br>She used to share a room with Yeri.<br>Joy debuted as a soloist with album “Hello” on May 31st, 2021.",
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
