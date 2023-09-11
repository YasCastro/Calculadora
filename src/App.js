import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = (number) => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0')
    {
      setFirstNumber(currentNumber);  
      setCurrentNumber('0');
      setOperation('+')
    }
    else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0')
    {
      setFirstNumber(currentNumber);  
      setCurrentNumber('0');
      setOperation('-')
    }
    else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('')
    }
  }
  
  const handleMultiplyNumbers = () =>
  {
    if (firstNumber === '0')
    {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('x');
    }  
    else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation('');
    }
  }

  const handleDivisionNumbers = () =>
  {
    if (firstNumber === '0')
    {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }
    else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  }

  const changeSignal = () =>
  {
    if (currentNumber !== '0' && currentNumber.includes('-'))
    {
      setCurrentNumber(currentNumber.replace('-', ''));
    }
    else if (currentNumber !== '0' && !currentNumber.includes('-'))
    {
      setCurrentNumber('-' + currentNumber);
    }
    
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0')
    {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivisionNumbers();
          break;
        default:
          break;
      }  
    }
  }

  return (
    <Container>
      <Content>
        <Input value={ currentNumber } />
        <Row>
          <Button label="AC" style="lighter" onClick={ () => handleOnClear()}/>        
          <Button label="+/-" style="lighter" onClick={ changeSignal }/>        
          <Button label="%" style="lighter" onClick={ () => handleAddNumber('')}/>        
          <Button label="/" style="orange" onClick={ handleDivisionNumbers }/>        
        </Row>    
        <Row>
          <Button label="7" style="normal" onClick={ () => handleAddNumber('7')}/>        
          <Button label="8" style="normal" onClick={ () => handleAddNumber('8')}/>        
          <Button label="9" style="normal" onClick={ () => handleAddNumber('9')}/>        
          <Button label="x" style="orange" onClick={ handleMultiplyNumbers }/>        
        </Row>    
        <Row>
          <Button label="4" style="normal" onClick={ () => handleAddNumber('4')}/>        
          <Button label="5" style="normal" onClick={ () => handleAddNumber('5')}/>        
          <Button label="6" style="normal" onClick={ () => handleAddNumber('6')}/>        
          <Button label="-" style="orange" onClick={ handleMinusNumbers }/>       
        </Row>   
        <Row>
          <Button label="1" style="normal" onClick={ () => handleAddNumber('1')}/>        
          <Button label="2" style="normal" onClick={ () => handleAddNumber('2')}/>        
          <Button label="3" style="normal" onClick={ () => handleAddNumber('3')}/>        
          <Button label="+" style="orange" onClick={ handleSumNumbers }/>     
        </Row>   
        <Row>
          <Button label="0" style="bigger" onClick={ () => handleAddNumber('0')}/> 
          <Button label="." style="normal" onClick={ () => handleAddNumber('.')}/>        
          <Button label="=" style="orange" onClick={ handleEquals } /> 
        </Row> 
      </Content>
    </Container>
  );
}

export default App;
