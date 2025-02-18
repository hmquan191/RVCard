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
