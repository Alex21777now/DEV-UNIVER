import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';
import styled from "styled-components";
import movieBackground from "./images/Shwartc2.jpg";
// Адаптивный контейнер
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to right, 	#4682B4, #00f2fe);

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
  
  transition: all 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #0056b3;
  }

  &:active {
    transform: scale(0.90); /* Визуальное уменьшение */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); /* Уменьшаем тень */
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

function App() {
  return (
    <Container>
      <Title>DEV-UNIVER.VERCEL.APP</Title>
      <img
     src={movieBackground}
     alt="Movie Background"
     style={{
      margin: '2px 2px 2px 2px',
      width: '49%',    // Set the width of the image to 100% of the container
      height: '50%',   // Set the height of the image to 100% of the container
      objectFit: 'cover' // Use object-fit to cover the container
             }}
        />
      <Text>Программы тренировок в зале для начинающих и более опытных спортсменов</Text>
      
      <Button>Общая  #1</Button><br></br>
      <Button style={{ background: "#FFA500" }}>Общая  #2</Button><br></br>
      <Button style={{ background: "#B8860B" }}>Общая  #3</Button><br></br>
      <Button style={{ background: "#32CD32" }}>Плечи руки</Button><br></br>
      <Button style={{ background: "#008000" }}>Грудь спина</Button><br></br>
      <Button style={{ background: "#DC143C" }}>Ноги низ</Button><br></br>

      <Text>In the evening get familiar with newly released Movies coming soon</Text>
      <MovieList />
    </Container>
  );
}

export default App;
