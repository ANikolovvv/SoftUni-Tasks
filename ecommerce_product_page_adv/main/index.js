let myPic = document.getElementById("avatar");
let clImage = document.getElementById("cl-img");
let allImage = document.getElementById("all-img");

console.log("work", myPic);

myPic.addEventListener("click", function (e) {
  e.preventDefault();
  let myCard = document.getElementById("card");
  if (myCard.style.display === "flex") {
    myCard.style.display = "none";
  } else {
    myCard.style.display = "flex";
  }
});

clImage.addEventListener("click", function (e) {
  e.preventDefault();
  clImage.style.display = "none";
});

allImage.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("img", e.target.src);
  let currentImage = document.getElementById("current");
  clImage.style.display = "flex";

  if (e.target.src.includes("1")) {
    currentImage.src = "./images/image-product-1.jpg";
  }
  if (e.target.src.includes("2")) {
    currentImage.src = "./images/image-product-2.jpg";
  }
  if (e.target.src.includes("3")) {
    console.log("yes");
    currentImage.src = "./images/image-product-3.jpg";
  }
  if (e.target.src.includes("4")) {
    currentImage.src = "./images/image-product-4.jpg";
  }
});
