import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
    
let startingNumber=(Math.ceil(Math.random() *100));

function GuessingGame() {
    let [luckyNumber, setLuckyNumber] = useState(startingNumber);
    let [currentGuess, setCurrentGuess] = useState("");
    let [numberofGuesses, setNumberofGuesses] = useState(0);
    let [hint, setHint] = useState('Start Guessing');
    
    function startOver () {
            setCurrentGuess('');
            setNumberofGuesses(0);
            setHint('Start guessing again');
            setLuckyNumber(Math.ceil(Math.random() * 100));
        } 
    console.log(luckyNumber)
    localStorage.setItem("lucky number", luckyNumber);
    // My local storage is working, as reflected in my documentation, both for
    // "lucky number" above and "number of guresses"; however, when the browser
    // window closes, the data persists in documentation, but not on the webpage.
    // I don't think I entirely understand local storage.
    
    function handleGuess(event) {
        setCurrentGuess(event.target.value);
    }

    function handleSubmitGuess () {
        setNumberofGuesses(numberofGuesses += 1)
        localStorage.setItem("number of guesses", numberofGuesses)
        if (currentGuess < luckyNumber) {
            setHint('Your guess is too low!')
        } 
        else {
            setHint('Congratulations! You guessed the Lucky Number!')
        }
        if (currentGuess > luckyNumber) {
            setHint('Your guess is too high!')
        }
    }

    return (
        <div>
            <h3>I am thinking of a number between 1 and 100.   
            Guess the Lucky Number!</h3>
            <h3 className="Guesses">You have made {numberofGuesses} guesses.</h3>
            <Form>
                <Form.Group className="mb-3" >
                 <Form.Label>Enter Your Guess</Form.Label>
                 <Form.Control className="w-50" type="text" value={currentGuess} onChange={handleGuess} />
                </Form.Group>
            </Form>
            <h3 className="Hint"> {hint}! </h3>
            <Button onClick={handleSubmitGuess} >Submit Your Guess</Button>
            <p></p>
            <Button onClick={startOver} >Start Over</Button>
            <p/>
        </div>
      );

}
export default GuessingGame