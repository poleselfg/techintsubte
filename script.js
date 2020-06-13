const boxes = document.querySelectorAll(".box");
const img = document.getElementById("imagen-1");
const imageViewer = document.querySelector("#imageView");

const imageSubte = [
  "./images/CutAndCover_0015_t_01.jpg",
  "./images/CutAndCover_0013_t_02.jpg",
  "./images/CutAndCover_0011_t_03.jpg",
  "./images/CutAndCover_0009_t_04.jpg",
  "./images/CutAndCover_0007_t_05.jpg",
  "./images/CutAndCover_0005_t_06.jpg",
  "./images/CutAndCover_0003_t_07.jpg",
  "./images/CutAndCover_0001_t_08.jpg",
];

function callback(entries, observer) {
  entries.forEach((entry) => {
    const { isIntersecting } = entry;
    if (isIntersecting) {
      const box = entry.target.dataset.box;
      img.src = imageSubte[box - 1];
    }
  });
}

const observer = new IntersectionObserver(callback);
boxes.forEach((box) => observer.observe(box));
