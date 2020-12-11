class Player{
    constructor(){
    this.playerName=null;
    this.distance=0;
    this.playerNumber=null;

    }
    getplayerCount(){
      var  locationofchild=database.ref("playerCount")
        locationofchild.on("value",function(data){
        playerCount=data.val();   
        })
        
    }
    updateplayerCount(count){
      var loc=database.ref("/")
        loc.update({
        playerCount:count
        })
    }
    updatePlayer(){
    var playerReference="players/player"+this.playerNumber;
      var locationofchild=database.ref(playerReference);
    locationofchild.set({
    name:this.playerName,
    distance:this.distance    
    })

    }
    static getAllPlayerInfo(){
    var playerRef=database.ref("players");
    playerRef.on("value",(data)=>{
     allplayer=data.val();   
    })    
    }
}