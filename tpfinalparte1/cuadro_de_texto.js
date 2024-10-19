
function textbox() {
  let centrocuadrox = width/2;
  let centrocuadroy = height-80;

push();
  fill(azul);  // Blanco
  stroke(0);  // Borde negro
  rectMode(CENTER);
  // Dibuja el cuadro
  rect(centrocuadrox, centrocuadroy, anchopantalla - 10, 100);
  fill(255);
  rectMode(CORNER);
  textSize(16);
  text(dialogo[escena], 20, centrocuadroy-35,anchopantalla-20);
  pop();
}
