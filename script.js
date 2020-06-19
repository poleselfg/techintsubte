window.onload = function () {
  const boxes = document.querySelectorAll(".box");
  const img = document.getElementById("imagen-1");
  const toClear = document.getElementById("toClear");
  const alFinal = document.getElementById("alFinal");
  const imageViewer = document.querySelector("#imageView2");

  const imageSubte = [
    "./images/CutAndCover_0015_t_01.jpg",
    "./images/CutAndCover_0013_t_02.jpg",
    "./images/CutAndCover_0011_t_03.jpg",
    "./images/CutAndCover_0009_t_04.jpg",
    "./images/CutAndCover_0007_t_05.jpg",
    "./images/CutAndCover_0005_t_06.jpg",
    "./images/CutAndCover_0003_t_07.jpg",
    "./images/CutAndCover_0001_t_08.jpg",
    "./images/Empty.png",
  ];

  function callback(entries, observer) {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        const box = entry.target.dataset.box;
        if (box === "1") {
          if (toClear.style.display === "flex") {
            toClear.style.display = "none";
          } else {
            toClear.style.display = "flex";
          }
        }
        if (box === "9") {
          if (alFinal.style.display === "none") {
            alFinal.style.display = "flex";
          } else {
            alFinal.style.display = "none";
          }
        }
        img.src = imageSubte[box - 1];
      }
    });
  }

  const observer = new IntersectionObserver(callback);
  boxes.forEach((box) => observer.observe(box));
};
