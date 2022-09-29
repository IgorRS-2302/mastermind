import { useState } from 'react';
import './global.scss';

function App() {
  const [password, setPassword] = useState();
  const [display, setDisplay] = useState(false);
  const [result, setResult] = useState();
  const [tries, setTries] = useState([]);

  function GenerateSecretNumbers() {
    let arraySecretNumbers = [];
    let secretNumber = '';

    while(arraySecretNumbers.length < 4) {
      const number = Math.floor(Math.random() * 10);

      if (!arraySecretNumbers.includes(number)) {
        arraySecretNumbers.push(number);
      }
    }

    for(let i = 0; i < arraySecretNumbers.length; i++) {
      secretNumber = secretNumber + arraySecretNumbers[i];
    }
    
    console.log("Senha atual: " + secretNumber)
    setPassword(secretNumber);
  }

  function ComparePassword() {
    let userTry = document.querySelector('#try').value;
    
    console.log("Tentativa do usuário: " + userTry);

    setDisplay(true);
    setTries([...tries, userTry]);

    if (userTry === password) {
      setResult(true);
    }else {
      setResult(false);
    }
  }
  
  function DisplayTries() {
    return tries.map((t) => <p key={t}>{t}</p>)
  }

  return (
    <div className="App">
      <button onClick={GenerateSecretNumbers}>gerar senha</button><br />
      <input type="number" id="try" placeholder='Insira sua tentativa' /><br/>
      <button type="submit" onClick={ComparePassword}>Tentar</button>
      {display ? <p>{result ? 'Correto!' : 'Errado!'}</p> : ''}
      <p>Tentativas anteriores:</p>
      {DisplayTries()}
    </div>
  );
}

export default App;
