let escena = 0;
//arreglo dialogos
let dialogo =[];
let anchopantalla=640;
let altopantalla=480;
let Fuente
let crono = altopantalla;
let sonido;
let dorado, azul;


function preload() {
   sonido = loadSound('data/sonido/ambiente.mp3');
  dialogo = loadStrings('data/dialogo.txt');
  imagenes()
  
   Fuente = loadFont('data/font/WOW.ttf');
    //let rutaImagen = "data/escenas/" + escena + ".png";
    //art = loadImage(rutaImagen);
}
function setup() {
  sonido.loop();
  dorado=color(230,204,128);
  azul=color (0  ,112 , 221);
  createCanvas(anchopantalla, altopantalla);
   textFont(Fuente);
  print(dialogo);
  
}
function draw() {
  titulo();
  //textbox();
  //N°ESCENA
  fill(0);
  rect(0, 0, 30, 30);
  fill(255);
  text(escena, 10, 10);
    if(escena>0){
     textbox(); 
    } 


  if (escena===0) {
    botont();
  }
else if (escena>0&&escena!== 3 && escena !== 10&& escena !== 13&& escena !== 29&& escena !== 39) {

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
    // PANTALLA FINAL Y CREDITOS
    crono--;
    fill(0);

    rect(0, 0, width, height);
    fill(255);
    rect(0, 0, width, 200);
    fill(222,111,22);
    text("www",width/2,crono);
    REINICIO()
    if(crono<0){
      crono = altopantalla;
    }
  }
}
function mouseClicked() {

  clickinicio()
  clicsigue()
  botonescamino()
  clickreinicio()
}
