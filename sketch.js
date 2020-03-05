var canvas,backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1_img,car2_img,car3_img,car4_img,track,ground;
function preload(){
  ground=loadImage("images/ground.png");
  track=loadImage("images/track.jpg");
  car1_img=loadImage("images/rocket.png");
  car2_img=loadImage("images/sonic.jpg");
  car3_img=loadImage("images/emoji.png");
  car4_img=loadImage("images/india_flag.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  car4_img.scale=0.1;
  if(gameState === 1){
    clear();
    game.play();
  }
}