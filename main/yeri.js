document.addEventListener("DOMContentLoaded", function () {
  const subTitle = document.querySelector(".sub-title-main");
  const infoTexts = [
    "Kim Ye-rim, better known by her stage name Yeri, is a South Korean singer and actress. She is a member of South Korean girl group Red Velvet. Aside from her music career, Yeri hosted Show! Music Core and The Viewable SM. Yeri also appeared on variety show Secret Unnie and Law of the Jungle in Thailand.",
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
