class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play")
        this.title=createElement("h2","CAR RACING GAME")
        this.greeting=createElement("h3");

    }
    display(){

        this.input.position(130,160);
        this.button.position(250,200);
        this.title.position(130,0);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.playerName=this.input.value();
            playerCount=playerCount+1;
            player.playerNumber=playerCount;
            this.greeting.html("hello "+player.playerName);
            this.greeting.position(130,160)
            player.updateplayerCount(playerCount);
            player.updatePlayer();

        })

    }   
    hide(){
     this.greeting.hide();
     this.button.hide();
     this.input.hide();   
    }
}