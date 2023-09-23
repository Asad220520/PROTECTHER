import React, { useState } from "react";
import "./index.scss";

const Create = () => {
  // Создаем состояния для хранения данных петиции
  const [petitionTitle, setPetitionTitle] = useState("");
  const [petitionDescription, setPetitionDescription] = useState("");
  const [email, setEmail] = useState("");

  // Обработчик клика на кнопку "Отправить"
  const handleSendButtonClick = () => {
    // Здесь вы можете отправить данные на сервер или выполнить другие необходимые действия
    alert(
      `Заголовок: ${petitionTitle}, Описание: ${petitionDescription}, Почта для выхода: ${email}`
    );
  };

  return (
    <div id="campaigns">
      <div className="container">
        <div className="campaigns">
          <h1>Петиция</h1>
          <div id="petition-details">
            <div className="petition-info">
              <label htmlFor="petitionTitle">Заголовок петиции:</label>
              <input
                type="text"
                id="petitionTitle"
                value={petitionTitle}
                onChange={(e) => setPetitionTitle(e.target.value)}
              />
            </div>
            <div className="petition-info">
              <label htmlFor="petitionDescription">Описание петиции:</label>
              <textarea
                id="petitionDescription"
                rows="4"
                value={petitionDescription}
                onChange={(e) => setPetitionDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="petition-info">
              <label htmlFor="email">Почта для выхода:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button id="sendButton" onClick={handleSendButtonClick}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
