document.addEventListener("DOMContentLoaded", function () {
  const subTitle = document.querySelector(".sub-title-main");
  const infoTexts = [
    "Kang Seul-gi, known mononymously as Seulgi, is a South Korean singer and dancer. She is a member of the South Korean girl group Red Velvet, its sub-unit Red Velvet – Irene & Seulgi, and the supergroup Got the Beat. She released her debut EP, 28 Reasons, in 2022.",
    "She was a part of the pre-debut team SM Rookies and was the first member to be revealed.<br>Her representative fruit: Pineapple <br>Her representative weapon: Knife",
    "She was casted in 2007 through public audition. <br>Her hobbies are drawing and playing the guitar.<br>Her designated color is yellow/tangerine.",
    "On October 4, 2022 she debuted as a soloist with the mini album 28 Reasons.<br>Seulgi will return with her second solo Accidentally On Purpose on March 10, 2025.",
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
