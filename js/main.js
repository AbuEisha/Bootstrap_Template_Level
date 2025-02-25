$(".datepicker").datepicker();
$(".recommend-slick").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});
let videoIconBox = document.querySelector(".video .box .overlay");
let video = document.querySelector(".video video");
videoIconBox.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    videoIconBox.innerHTML = `<i class="fas fa-solid fa-circle-pause"></i>`;
  } else {
    video.pause();
    videoIconBox.innerHTML = `<i class="fas fa-solid fa-circle-play"></i>`;
  }
});
