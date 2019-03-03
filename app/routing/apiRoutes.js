
let friends = require("../data/friends")



// Routing

module.exports = app => {

    app.get("/api/friends", (req, res)=>{
        res.json(friends);
    });

    app.post("/api/friends", (req, res)=>{
        console.log(req.body);
        // this function compares the scores of two arrays to find the absolute value of the difference
        const compare = function(array1, array2){
            let diff = 0;
            for(let i =0; i < array1.length; i++){  
                diff += Math.abs((parseInt(array1[i]) - parseInt(array2[i])));
            }
            return diff;
        }
        let diffArray = [];
        // this loop finds the difference between all of friends and the user and stores the difference in an array
        for(let i = 0; i < friends.length; i++ ){
          diffArray.push(compare(req.body.scores, friends[i].scores));

        };
        // finds the lowest difference in our difference array
        let match =  Math.min(...diffArray);
        let matchIndex = diffArray.indexOf(match)



        friends.push(req.body);
        res.json(friends[matchIndex]);
    });
}