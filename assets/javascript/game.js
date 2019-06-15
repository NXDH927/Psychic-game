var wins = 0;
var losses = 0;
var guesses = 9;
var result = '';
var characters= 'abcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length;

function reWriteStats() {

    console.log("Wins: " + wins );
    console.log("Losses: " + losses);
    console.log("Guesses:" + guesses);
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Losses").innerHTML = "Losses: " + losses;
    document.getElementById("Guesses").innerHTML = "Guesses: " + guesses;
    document.getElementById("Letters").innerHTML += letter;

  }

  function letteranswer(length) {

    console.log('length=', length)
    for ( var i = 0; i < length; i++ ) {
       result = characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    return result;
    
 }
 
  console.log(letteranswer(1));


    document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        letter = event.key.toLowerCase();

        console.log(letter);

        if(letter === result){

            wins++;
            guesses=9;
            reWriteStats();
            letteranswer(1);
            alert("Correct!")
            document.getElementById("Letters").innerHTML = '';            
        }
        else{

            guesses--;

            reWriteStats();

        }

        if(guesses <= 1){

            losses++;
            guesses=9;
            console.log(result);
            letteranswer(1);
            document.getElementById("Letters").innerHTML = '';

        }

    }


    

