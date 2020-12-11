var playerCount=0;
var gameState=0;
var database;
var game,form,player
var allplayer=[];


function setup(){
 createCanvas(800,800);
 database=firebase.database();
 game=new Game();
 game.getGameState();
 game.start();

}

function draw(){
 if(playerCount==4){
  game.updateGameState(1);   
 }   
 if(gameState==1){
game.play();
 }
}