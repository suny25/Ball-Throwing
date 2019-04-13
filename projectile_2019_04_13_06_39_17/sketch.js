const 
{World,Bodies,Engine,Mouse,
 MouseConstraint,Constraint} =Matter;

let ground;
let ball;
let world, engine;
let mConstrait;
let slingshot;

function setup() {
  const canvas=createCanvas(600, 400);
  engine=Engine.create();
  world=engine.world;
  
  ground=new Box(width/2, height-10, width, 20);
  ball=new Ball(150,300,16);
  
  slingshot = new SlingShot(150, 250, ball.body);
    
   const mouse = Mouse.create(canvas.elt);
   const options ={ mouse : mouse}
   mConstraint= MouseConstraint.create (engine,options);
  World.add(world,mConstraint);
}

function keyPressed() {
    if(key == ' ') {
       ball=new Ball(150,300,16);
     // slingshot.attach(ball.body);
       }
  }

function mouseReleased(){
      setTimeout(() => {
       slingshot.fly();
      }, 100);
     }

function draw() {
  background(0);
   Engine.update(engine);
  ground.show();
  ball.show();
  slingshot.show();
}