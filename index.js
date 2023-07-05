const imagesArrays = [
  (manha = {
    manha1: "./img/manha1.jpg",
  }),
  (tarde = {
    tarde1: "./img/tarde1.jpg",
  }),
  (noite = {
    noite1: "./img/noite1.jpg",
  }),
];

function load() {
  const msg = document.getElementById("msg");
  const image = document.getElementById("image");

  const currentTime = new Date().getHours();

  msg.textContent = `Agora são ${currentTime} horas.`;

  if (currentTime >= 5 && currentTime < 12) {
    image.src = imagesArrays[0].manha1;
  } else if (currentTime >= 12 && currentTime < 18) {
    image.src = imagesArrays[1].tarde1;
    document.body.style.backgroundColor = "#cf8804b6";
    //boa tarde
  } else {
    //boa noite
    image.src = imagesArrays[2].noite1;
    document.body.style.backgroundColor = "#050505ee";
  }
}
load();
