class Game{
    constructor(){

    }

    getGameState(){
        var locationofchild=database.ref("gameState")
        locationofchild.on("value",function(data){
        gameState=data.val();   
        })
        
    }
    updateGameState(state){
       var loc=database.ref("/")
        loc.update({
        gameState:state
        })
        

    }
    start(){
    if(gameState==0){
     player=new Player();
     player.getplayerCount;
     form=new Form();
     form.display();   
    }    
    }
    play(){
     form.hide();
     textSize(30);   
     Player.getAllPlayerInfo();
     if(allplayer!=undefined){
     var yposition=130
     for(var i in allplayer){
      if(i=="player"+player.playerNumber){
      fill("red");  
      }   
      else{
       fill("black")
    }
    text(allplayer[i].name+" :"+allplayer[i].distance,120,yposition)
    yposition=yposition+50
     }   
     if(keyDown(UP_ARROW)&&player.playerNumber!=null){
     player.distance=player.distance+50
     player.updatePlayer();   
     }
     }
    }
}
