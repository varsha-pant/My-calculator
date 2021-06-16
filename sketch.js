var n1, n2;

function setup() {
  createCanvas(400, 400);
  //Input box
  num1=createInput();
  num1.position(5,60);

  num2=createInput();
  num2.position(200,60);

    //Buttons
  b1=createButton("ADD");
  b1.position(10,200);
  b1.mousePressed(add);

  b2=createButton("MULTIPLY");
  b2.position(100,200);
  b2.mousePressed(mul);

  b3=createButton("SUBTRACT");
  b3.position(200,200);
  b3.mousePressed(sub);

  b4=createButton("DIVIDE");
  b4.position(300,200);
  b4.mousePressed(div);

  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(220);
  //textbox
  text("Number 1",70,50);
  text("Number 2",270,50);

  //convert num1 input button value into int 
  n1= parseInt(num1.value());
  n2= parseInt(num2.value());
}

function add(){
  console.log(n1+n2);
}

function sub(){
  console.log(n1-n2);
}

function mul(){
  console.log(n1*n2);
}

function div(){
  console.log(n1/n2);
}