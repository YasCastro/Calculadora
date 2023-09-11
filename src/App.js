import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from "./styles";

function App() {
  return (
    <Container>
      <Content>
        <Input />
        <Row>
          <Button label="AC" style="lighter"/>        
          <Button label="+/-" style="lighter"/>        
          <Button label="%" style="lighter"/>        
          <Button label="/" style="orange"/>        
        </Row>    
        <Row>
          <Button label="7" style="normal"/>        
          <Button label="8" style="normal"/>        
          <Button label="9" style="normal"/>        
          <Button label="x" style="orange"/>        
        </Row>    
        <Row>
          <Button label="4" style="normal"/>        
          <Button label="5" style="normal"/>        
          <Button label="6" style="normal"/>        
          <Button label="-" style="orange"/>       
        </Row>   
        <Row>
          <Button label="1" style="normal"/>        
          <Button label="2" style="normal"/>        
          <Button label="3" style="normal"/>        
          <Button label="+" style="orange"/>     
        </Row>   
        <Row>
          <Button label="0" style="bigger" /> 
          <Button label="." style="normal"/>        
          <Button label="=" style="orange"/> 
        </Row> 
      </Content>
    </Container>
  );
}

export default App;
