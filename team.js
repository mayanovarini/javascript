const team = {
  _players:[
    {
      firstName:"John",
      lastName:"Isaac",
      age:30,
    },
    {
      firstName:"David",
      lastName:"Isaac",
      age:26,
    },
    
    {
      firstName:"Joseph",
      lastName:"isaac",
      age:28,
    },
    {
      firstName:"Lupita",
      lastName:"ramos",
      age:31,
    }
  ],
  _games:[
    {
      opponent: "Arsenal", teamPoints: 4, oppentPoints:2
    },
    {
      opponent:"Chelsea",teamPoints:2,oppentPoints:1
    },
    {
      opponent:"Manchester City",teamPoints:4,opponentPoints:0
    }
  ],
  
  addGame(opp,myPts,oppPts){
    const game = {
      opponet: opp,
      points:myPts,
      opponentsPoints: oppPts
    };
    
  }
  
  get games(){
    return this._games;
  },
  
  get player(){
    return this._players;
  },
  
  addPlayer(firstName,lastName,age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    
    this.player.push(player);
  },
};

team.addPlayer("John","Isaac",30);
team.addPlayer("Joseph","Isaac",28);
team.addPlayer("David","Isaac",61);

console.log(team.player);