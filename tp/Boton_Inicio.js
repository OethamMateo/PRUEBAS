function botont(){
  posXBoton = width/2-70;
  posYBoton = height/2;
  anchoBoton =140;
  altoBoton = 40;
  
  
   push();
  fill(255,22,100);
  rect(posXBoton,posYBoton,anchoBoton,altoBoton);
  fill(0);
  textSize(22);
  textAlign(CENTER,CENTER);
  text("COMENZAR",posXBoton+anchoBoton/2,posYBoton+altoBoton/2);
  pop();
}


function clickinicio(){
if (mouseX > posXBoton && mouseX < posXBoton + anchoBoton &&
     mouseY > posYBoton && mouseY < posYBoton + altoBoton&&escena===0) {
   escena++
   imagenes()
     }
}

  
