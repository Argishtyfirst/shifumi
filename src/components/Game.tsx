import React, { useState } from "react";
import styled from "styled-components";
import images, { ImageMap } from "../assets";

const choices = ["rock", "paper", "scissors"];

export const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function handleClick(choice: any) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult("Tie!");
    } else if (
      (choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      setResult("You lose!");
      setComputerScore((prevScore) => prevScore + 1);
    }
  }

  return (
    <AppWrapperStyled>
      <h1>Shifumi</h1>
      <ScoreStyled>
        <p>You: {playerScore}</p> vs
        <p>Computer: {computerScore}</p>
      </ScoreStyled>
      <ChoicesStyled>
        {choices.map((choice) => (
          <ChoiceWrapperStyled>
            <ChoiceStyled
              key={choice}
              onClick={() => handleClick(choice)}
              src={images[choice as keyof ImageMap]}
              alt={choice}
            />
          </ChoiceWrapperStyled>
        ))}
      </ChoicesStyled>

      <ResultStyled className="result">
        {playerChoice && (
          <>
            <ResultText >
              You{" "}
              <img src={images[playerChoice as keyof ImageMap]} width={20} alt={playerChoice}/>
            </ResultText>
            <p data-testid="result">{result}</p>
            <ResultText >
              <img src={images[computerChoice as keyof ImageMap]} width={20} alt={computerChoice}/>
              Computer
            </ResultText>
          </>
        )}
      </ResultStyled>
    </AppWrapperStyled>
  );
};

export default Game;

const AppWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: palevioletred;
  background: #ffbea8;
`;
const ScoreStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  font-size: 18px;
  font-weight: 700;
`;
const ResultStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 50px;
`;
const ChoicesStyled = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  justify-content: space-between;
`;

const ChoiceWrapperStyled = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChoiceStyled = styled.img`
  width: 100px;
  transition: all 200ms ease-in;
  height: fit-content;

  :hover {
    width: 110px;
    transition: all 200ms ease-in;
    cursor: pointer;
  }
`;

const ResultText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
