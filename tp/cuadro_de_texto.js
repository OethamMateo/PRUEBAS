
function textbox() {
  let centrocuadrox = width/2;
  let centrocuadroy = height-80;

push();
  fill(12);  // Blanco
  stroke(0);  // Borde negro
  rectMode(CENTER);
  // Dibuja el cuadro
  rect(centrocuadrox, centrocuadroy, anchopantalla - 10, 100);
  fill(255);
  rectMode(CORNER);
  text(dialogo[escena], 20, centrocuadroy-40,anchopantalla-20);
  pop();
}
