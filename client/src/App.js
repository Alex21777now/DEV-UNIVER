import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';
import styled from "styled-components";
import movieBackground from "./images/Shwartc2.jpg";
import { useState } from "react";
import { ClipLoader } from "react-spinners"; // Импортируем спиннер

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

const a = [
  "1. Жим штанги лежа                        4 по (7-10)",
  "2. Жим гантелей вверх стоя перед собой    4 по (7-10)",
  "3. Тяга штанги в наклоне (спина)          4 по (7-10)",
  "4. Подъем гантелей на бицепс стоя         4 по (7-10)",
  "5. Французский жим гантелей сидя трицепс  4 по (10-12)",
  "6. Приседания со штангой                  4 по (7-10)",
  "7. Становая тяга                          3 по (10-12)",
  "8. Подъем ног перед собой в висе (пресс)  3 по (20-25)"
];
const b = [
  "1. Жим штанги на наклонной скамье 45град   4 по (7-10)",
  "2. Подъемы гантелей поочередно перед собой 4 по (10-12)",
  "3. Подтягивания широким хватом к груди (+вес) 4 по (7-10)",
  "4. Подъем штанги на бицепс стоя            4 по (7-10)",
  "5. Жим штанги лежа узким хватом трицепс    4 по (7-10)",
  "6. Приседания со штангой                   4 по (7-10)",
  "7. Мертвая тяга (прямые ноги) бицепс бедра 3 по (10-12)",
  "8. Подъемы тела на наклонной сидя (пресс)  3 по (20-25)"
];
const c = [
  "1. Жим штанги на наклонной скамье 45град   4 по (7-10)",
  "2. Тяга штанги к подбородку (дельты)       4 по (7-10)",
  "3. Подтягивания широким хватом за спину (+вес) 4 по (7-10)",
  "4. Тяга нижнего блока сидя к животу (спина) 4 по (7-10)",
  "5. Французский жим изогн. штанги лежа      4 по (10-12)",
  "6. Приседания со штангой                  4 по (7-10)",
  "7. Становая тяга                           3 по (10-12)",
  "8. Подъем тела лежа ноги закреплены        3 по (20-25)"
];
const d = [
  "1. Тяга штанги к подбородку (дельты)       4 по (7-10)",
  "2. Жим гантелей вверх стоя перед собой     3 по (10-12)",
  "3. Подъемы гантелей поочередно перед собой 3 по (10-12)",
  "4. Подтягивания обратным хватом (бицепс) (+вес) 4 по (7-10)",
  "5. Подъем штанги на бицепс стоя            3 по (7-10)",
  "6. Жим штанги лежа узким хватом трицепс    4 по (7-10)",
  "7. Французский жим сидя с гирей трицепс    4 по (7-10)",
  "8. Приседания со штангой                   2 по (12-15)",
  "9. Склепки в висе (пресс)                  3 по (12-15)"
];
const e = [
  "1. Жим штанги лежа                         3 по (7-10)",
  "2. Жим штанги на наклонной скамье 45град   4 по (7-10)",
  "3. Отжимания на брусьях (грудь)    (+вес)  3 по (7-10)",
  "4. Тяга верхнего блока к груди широк. хватом 4 по (7-10)",
  "5. Тяга штанги в наклоне (спина)             3 по (7-10)",
  "6. Тяга нижнего блока сидя к животу (спина)  3 по (7-10)",
  "7. Приседания со штангой                    2 по (12-15)",
  "8. Склепки лежа (пресс)                     3 по (20-25)"
];
const f = [
  "1. Приседания со штангой                   5 по (7-10)",
  "2. Мертвая тяга (прямые ноги) бицепс бедра 5 по (10-12)",
  "3. Подъемы с гантелями в руках на носки (голень) 5 по (12-15)",
  "4. Жим штанги на наклонной скамье 45град   3 по (10-12)",
  "5. Подъем штанги на бицепс стоя            3 по (10-12)",
  "6. Французский жим на трицепс стоя (гантель/гиря) 3 по (10-12)",
  "7. Подъем тела лежа ноги закреплены        2 по (20-25)"
];

function App() {

  const [isLoading1, setIsLoading1] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const handleOpenModal1 = () => {
    setIsLoading1(true);
    setTimeout(() => {
      setIsLoading1(false);
      setIsOpen1(true);
    }, 1150); // Спиннер работает 1.5 секунды перед появлением окна
  };

  const [isLoading2, setIsLoading2] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleOpenModal2 = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
      setIsOpen2(true);
    }, 1150); // Спиннер работает 1.5 секунды перед появлением окна
  };

  const [isLoading3, setIsLoading3] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleOpenModal3 = () => {
    setIsLoading3(true);
    setTimeout(() => {
      setIsLoading3(false);
      setIsOpen3(true);
    }, 1150); // Спиннер работает 1.5 секунды перед появлением окна
  };

  const [isLoading4, setIsLoading4] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const handleOpenModal4 = () => {
    setIsLoading4(true);
    setTimeout(() => {
      setIsLoading4(false);
      setIsOpen4(true);
    }, 1150); // Спиннер работает 1.5 секунды перед появлением окна
  };

  const [isLoading5, setIsLoading5] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const handleOpenModal5 = () => {
    setIsLoading5(true);
    setTimeout(() => {
      setIsLoading5(false);
      setIsOpen5(true);
    }, 1150); // Спиннер работает 1.5 секунды перед появлением окна
  };

  const [isLoading6, setIsLoading6] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const handleOpenModal6 = () => {
    setIsLoading6(true);
    setTimeout(() => {
      setIsLoading6(false);
      setIsOpen6(true);
    }, 1150); // Спиннер работает 1.5 секунды перед появлением окна
  };

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
      
      <Button onClick={handleOpenModal1}>Общая  #1</Button><br></br>

     {/* Спиннер (пока загружается) */}
     {isLoading1 && (
        <div style={{ marginTop: "20px" }}>
          <ClipLoader color="#004080" size={150} /> 
        </div>
      )}


      {isOpen1 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#B0E0E6", // Светло-голубой фон
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            {/* Кнопка-крестик (Закрыть) */}
            <button
              onClick={() => setIsOpen1(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              ❌
            </button>

            {/* Текст в модальном окне */}
            <h2 style={{ color: "#004080" }}>Программа #Общая 1</h2>
            <h2 style={{ color: "#004080" }}>отдых 2-3 мин</h2>
            <p style={{ color: "#003366" }}>
            <ul>
        {a.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
            </ul>
            </p>

            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen1(false)}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                fontSize: "14px",
                background: "#3399FF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>


        </div>
      )}
      <Button onClick={handleOpenModal2} style={{ background: "#FFA500" }}>Общая  #2</Button><br></br>
      {/* Спиннер (пока загружается) */}
     {isLoading2 && (
        <div style={{ marginTop: "20px" }}>
          <ClipLoader color="#004080" size={150} /> 
        </div>
      )}


      {isOpen2 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#B0E0E6", // Светло-голубой фон
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            {/* Кнопка-крестик (Закрыть) */}
            <button
              onClick={() => setIsOpen2(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              ❌
            </button>

            {/* Текст в модальном окне */}
            <h2 style={{ color: "#004080" }}>Программа #Общая 2</h2>
            <h2 style={{ color: "#004080" }}>отдых 2-3 мин</h2>
            <p style={{ color: "#003366" }}>
            <ul>
        {b.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
            </ul>
            </p>

            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen2(false)}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                fontSize: "14px",
                background: "#3399FF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>


        </div>
      )}
      <Button onClick={handleOpenModal3} style={{ background: "#B8860B" }}>Общая  #3</Button><br></br>
      {/* Спиннер (пока загружается) */}
     {isLoading3 && (
        <div style={{ marginTop: "20px" }}>
          <ClipLoader color="#004080" size={150} /> 
        </div>
      )}


      {isOpen3 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#B0E0E6", // Светло-голубой фон
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            {/* Кнопка-крестик (Закрыть) */}
            <button
              onClick={() => setIsOpen3(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              ❌
            </button>

            {/* Текст в модальном окне */}
            <h2 style={{ color: "#004080" }}>Программа #Общая 3</h2>
            <h2 style={{ color: "#004080" }}>отдых 2-3 мин</h2>
            <p style={{ color: "#003366" }}>
            <ul>
        {c.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
            </ul>
            </p>

            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen3(false)}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                fontSize: "14px",
                background: "#3399FF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>


        </div>
      )}

      <Button onClick={handleOpenModal4} style={{ background: "#32CD32" }}>Плечи руки</Button><br></br>
      {isLoading4 && (
        <div style={{ marginTop: "20px" }}>
          <ClipLoader color="#004080" size={150} /> 
        </div>
      )}


      {isOpen4 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#B0E0E6", // Светло-голубой фон
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            {/* Кнопка-крестик (Закрыть) */}
            <button
              onClick={() => setIsOpen4(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              ❌
            </button>

            {/* Текст в модальном окне */}
            <h2 style={{ color: "#004080" }}>Программа #Плечи руки</h2>
            <h2 style={{ color: "#004080" }}>отдых 2-3 мин</h2>
            <p style={{ color: "#003366" }}>
            <ul>
        {d.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
            </ul>
            </p>

            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen4(false)}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                fontSize: "14px",
                background: "#3399FF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>


        </div>
      )}

      <Button onClick={handleOpenModal5}  style={{ background: "#008000" }}>Грудь спина</Button><br></br>
      {isLoading5 && (
        <div style={{ marginTop: "20px" }}>
          <ClipLoader color="#004080" size={150} /> 
        </div>
      )}


      {isOpen5 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#B0E0E6", // Светло-голубой фон
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            {/* Кнопка-крестик (Закрыть) */}
            <button
              onClick={() => setIsOpen5(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              ❌
            </button>

            {/* Текст в модальном окне */}
            <h2 style={{ color: "#004080" }}>Программа #Грудь спина</h2>
            <h2 style={{ color: "#004080" }}>отдых 2-3 мин</h2>
            <p style={{ color: "#003366" }}>
            <ul>
        {e.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
            </ul>
            </p>

            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen5(false)}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                fontSize: "14px",
                background: "#3399FF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>


        </div>
      )}
       
      <Button  onClick={handleOpenModal6} style={{ background: "#DC143C" }}>Ноги низ</Button><br></br>
      {isLoading6 && (
        <div style={{ marginTop: "20px" }}>
          <ClipLoader color="#004080" size={150} /> 
        </div>
      )}


      {isOpen6 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#B0E0E6", // Светло-голубой фон
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            {/* Кнопка-крестик (Закрыть) */}
            <button
              onClick={() => setIsOpen6(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              ❌
            </button>

            {/* Текст в модальном окне */}
            <h2 style={{ color: "#004080" }}>Программа #Ноги низ</h2>
            <h2 style={{ color: "#004080" }}>отдых 2-3 мин</h2>
            <p style={{ color: "#003366" }}>
            <ul>
        {f.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
            </ul>
            </p>

            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsOpen6(false)}
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                fontSize: "14px",
                background: "#3399FF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>


        </div>
      )}

      <Text>In the evening get familiar with newly released Movies coming soon</Text>
      <MovieList />
    </Container>
  );
}

export default App;
