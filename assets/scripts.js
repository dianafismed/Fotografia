function inserirImagem(url) {
  let img = document.createElement("img");
  url = ('../images/studio/glasses/*.png\.jpg')
  img.src=url;
  document.body.appendChild(img);
}

function grow(){
  console.log('entrou');
}
const images = document.querySelectorAll('.img-grow'); // pega todas as imagens do documento

for (let contador = 0; contador < images.length; contador++) {
  images.onclick = function(){
    grow;
  }
}