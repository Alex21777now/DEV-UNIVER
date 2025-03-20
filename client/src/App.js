import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';
import styled from "styled-components";

// Адаптивный контейнер
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to right, #4facfe, #00f2fe);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Заголовок
const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Обычный текст
const Text = styled.p`
  font-size: 1.2rem;
  color: #e0f7fa;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Кнопка
const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

function App() {
  return (
    <Container>
      <Title>DEV-UNIVER</Title>
      <Text>Программы тренировок в зале для начинающих и более опытных спортсменов</Text>
      
      <Button>Общая  #1</Button><br></br>
      <Button style={{ background: "#FFA500" }}>Общая  #2</Button><br></br>
      <Button style={{ background: "#B8860B" }}>Общая  #3</Button><br></br>
      <Button style={{ background: "#32CD32" }}>Плечи руки</Button><br></br>
      <Button style={{ background: "#008000" }}>Грудь спина</Button><br></br>
      <Button style={{ background: "#DC143C" }}>Ноги низ</Button><br></br>
    </Container>
  );
}

export default App;
