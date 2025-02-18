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
