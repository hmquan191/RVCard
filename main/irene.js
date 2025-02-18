document.addEventListener("DOMContentLoaded", function () {
  const subTitle = document.querySelector(".sub-title-main");
  const infoTexts = [
    "Bae Joo-hyun, better known by her stage name Irene, is a South Korean singer and actress. She is best known as the member and leader of the South Korean girl group Red Velvet, and its sub-unit Red Velvet – Irene & Seulgi.",
    "Her representative fruit: Red-flesh Watermelon.<br>Her representative weapon: Axe.<br>Her representative animal: Cat (Happiness to #Cookie Jar), Rabbit (Summer Magic onwards).",
    "She was a part of the pre-debut team SM Rookies.<br>She was casted in 2009 through public audition.<br>Her designated color is pink.",
    "Her hobbies are dancing, cooking seaweed soup for the members’ birthdays.<br>Because of her sensitive sense of smell, she will often keep around nice fragrances to help.<br>Her favorite artist is BoA.",
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
