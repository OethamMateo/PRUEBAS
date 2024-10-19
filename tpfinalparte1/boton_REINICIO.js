function REINICIO() {
  posXR = width/2-100;
  posYR = height/2;
  anchoR =200;
  altoR = 100;
  push();
  fill(255,22,100);
  rect(posXR,posYR,anchoR,altoR);
  fill(0);
  textSize(22);
  textAlign(CENTER,CENTER);
  text("Volver a jugar",posXR+anchoR/2,posYR+altoR/2);
  pop();

}


function clickreinicio(){
if (mouseX > posXR && mouseX < posXR + anchoR &&
     mouseY > posYR && mouseY < posYR + altoR&&escena===39) {
   escena=0
   imagenes()
     }
}
