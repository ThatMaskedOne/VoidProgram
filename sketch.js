var diam1=0;//determines text size.
    black=173;//determines bg color.
    diam2=0;//determines where ellipse on mouse is centered. 
    diam3=255;//determines "VOID" color.
    diam4=255; //determines transparency.

                    //had to set multiple variables because I wanted different objects to either lose transparency or color at different rates.
function setup() {
	createCanvas(1920, 1080); //went for screen size
}


function draw() {
  background(black ,0,0); 

  fill(0,0,0,255); 
  ellipse(mouseX, mouseY, diam2, diam2);
  fill(0,0,0);
//removed the stroke and strokeweight in order to make the ellipse seem invisible before clicking.
 {
  textSize(0);
  textFont("Segoe UI Black");
  textAlign(CENTER);
  fill(255,255,255,diam4); //made this text go transparent after a couple of clicks in order to remove it.
text("Countinuously click here to get sucked into the",960,485);
text("Refresh page to restart", 960, 525);

}
  textSize(diam1);
  textFont("Segoe UI Black");
  textAlign(CENTER);
  fill(diam3,diam3,diam3);
  text("VOID",960, 500);

  
}

  
function mousePressed(){  //allows the expansion of the ellipse to match with the dimming of the background.
  if(diam1>1000){
    diam1=0;
  if(diam2>200){
  	diam2=0;
  if(diam3>255){
  	diam3=0;
  if(black>173){
  	black=0;
  if(diam4>1000){
  	diam4=0;
  }
  }
  }
  }
  }else{
  	                //paired up the different variables with different parts of the function in order to create a somewhat seamless transition of the black ellipse swallowing everything
    diam1=diam1+20;//determines rate at which textSize increases
    diam2=diam2+100;//determines rate at which ellipse expands
    diam3=diam3-30;//determines rate at which 'VOID' rgb goes to 0
    black=black-12;//determines rate at with rgb of bg goes to 0
    diam4=diam4-190;//determines rate at which transparency drops
  }
}
