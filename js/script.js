// ハンバーガーメニュー
const hBtn = document.querySelector(".h-btn");
const hMenu = document.querySelector(".h-menu");

hBtn.addEventListener("click", () => {
  hBtn.classList.toggle("close");
  hMenu.classList.toggle("open");
});

// top
const topImg = document.querySelector(".k-img1");
const comment = document.querySelector(".comment");
const topImg2 = document.querySelector(".k-img2");
const topImg3 = document.querySelector(".k-img3");

topImg.addEventListener("click", () => {
  comment.classList.add("hide");
  topImg2.classList.add("show");
  topImg3.classList.add("show");
});

// スムーススクロール
// すべてのaタグにhrefがついているもの
const anchors = document.querySelectorAll('a[href^="#"]');
// headerの高さを取得
const headerHeight = document.querySelector("header").offsetHeight;

// 各アンカーにクリックイベント
anchors.forEach((anchors) => {
  // デフォルトのクリックイベントを無効化
  anchors.addEventListener("click", (event) => {
    event.preventDefault();

    hBtn.classList.remove("close");
    hMenu.classList.remove("open");

    // 各アンカーのhref属性の値を取得
    const href = anchors.getAttribute("href");

    // topに戻る以外のアンカー
    if (href !== "#top") {
      // スクロール先の要素を取得
      // アンカーのリンク先の#を取り除いた名前と一致するIDの取得
      const target = document.getElementById(href.replace("#", ""));

      // スクロール先の要素の位置を取得
      // headerの高さをマイナス
      const position =
        window.pageYOffset + target.getBoundingClientRect().top - headerHeight;

      // スクロールアニメーション
      window.scroll({
        // スクロール先の要素の上までスクロール
        top: position,

        // スクロールアニメーション
        behavior: "smooth",
      });

      // topに戻るアンカー
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});
