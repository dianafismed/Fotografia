function inserirImagem(url) {
  let img = document.createElement("img");
  url = ('../images/studio/glasses/*.png\.jpg')
  img.src=url;
  document.body.appendChild(img);
}

//let page = document.getElementsByName('glasses.html');


let imagens = document.getElementsByClassName('img-fluid'); // pega todas as imagens do documento


