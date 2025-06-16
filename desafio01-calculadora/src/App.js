
import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './styles'
import { useState } from 'react';



const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  const handleMultiplyNumbers = () => {
     
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation('');
    }

  }

  const handleDivisionNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation('');
    }

  }

  const handlePercentNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const percent = (Number(firstNumber) / 100)  * Number(currentNumber);
      setCurrentNumber(String(percent));
      setOperation('');
    }

  }

  const handleExponent = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('^');
    } else {
      const exponent = Number(firstNumber) ** Number(currentNumber);
      setCurrentNumber(String(exponent));
      setOperation('');
    }

  }

  const handleSquareRootNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('Sqrt');
    } else {
      const sqrt = Math.sqrt(Number(firstNumber));
      setCurrentNumber(String(sqrt));
      setOperation('');
    }

  }

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivisionNumbers();
          break;
        case '%':
          handlePercentNumbers();
          break;
        case '^':
          handleExponent();
          break;
        case 'Sqrt':
          handleSquareRootNumber();
          break;
        default:
          break;
      }
    } 
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button label="Sqrt" onClick={handleSquareRootNumber}/>
            <Button label="^" onClick={handleExponent}/>
            <Button label="%" onClick={handlePercentNumbers}/>
            <Button label="/" onClick={handleDivisionNumbers}/>
          </Row>
          <Row>
            <Button label="7" onClick={()=> handleAddNumber('7')}/>
            <Button label="8" onClick={()=> handleAddNumber('8')}/>
            <Button label="9" onClick={()=> handleAddNumber('9')}/>
            <Button label="x" onClick={handleMultiplyNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={()=> handleAddNumber('4')}/>
            <Button label="5" onClick={()=> handleAddNumber('5')}/>
            <Button label="6" onClick={()=> handleAddNumber('6')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={()=> handleAddNumber('1')}/>
            <Button label="2" onClick={()=> handleAddNumber('2')}/>
            <Button label="3" onClick={()=> handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="0" onClick={()=> handleAddNumber('0')}/>
            <Button label="." onClick={()=> handleAddNumber('.')}/>
            <Button label="AC" onClick={handleOnClear}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
