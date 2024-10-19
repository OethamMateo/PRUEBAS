let escena = 0;
//arreglo dialogos
let dialogo =[];
let anchopantalla=640;
let altopantalla=480;



function preload() {
  dialogo = loadStrings('data/dialogo.txt');
  imagenes()
    //let rutaImagen = "data/escenas/" + escena + ".png";
    //art = loadImage(rutaImagen);
}
function setup() {
  createCanvas(anchopantalla, altopantalla);
  print(dialogo);
}
function draw() {
  titulo();
  textbox();
  //N°ESCENA
  fill(0);
  rect(0, 0, 30, 30);
  fill(255);
  text(escena, 10, 10);


  if (escena===0) {
    botont();
  } else if (escena>0&&escena!== 3 && escena !== 10&& escena !== 13&& escena !== 29&& escena !== 39) {

    botonsig()
  }
  //Escenas de decicion
  if (escena ===3||escena ===10||escena ===13||escena ===29) {
    caminos()
    
  }

  if (escena ===16||escena ===20||escena ===24||escena ===30||escena ===35) {
    escena = 39;
  }


  if (escena==39) {
    fill(0);

    rect(0, 0, width, height);
    REINICIO()
  }
}
function mouseClicked() {

  clickinicio()
  clicsigue()
  botonescamino()
  clickreinicio()
}
