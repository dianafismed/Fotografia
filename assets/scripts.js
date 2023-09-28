function InserirImagem(url) {
  let img = document.createElement("img");
  url = ('../images/studio/glasses/*.png\.jpg')
  img.src=url;
  document.body.appendChild(img);
}

function Teste(){
  document.write(Date());
}