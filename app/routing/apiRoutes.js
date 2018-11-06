
//aquí está el json con los friends
//lo ponemos aquí porque en este archivo estamos manejando la información que está en la api
var friends = require("../data/friends");


module.exports= function(app){
        
    // Displays all friends
    //Get todos los friends de la api
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    

    //Post resultados del survey
    //Sería crear un nuevo elemento en el json
    // Crear nuevo friends - takes in JSON input
    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newfriends = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newfriends);
        //agregas a la variable el nuevo character
        friends.push(newfriends);
        //la respuesta será el nuevo 
        res.json(newfriends);
    });







}//cierre module.exports