import React from "react";
import stran from "../../image/cotegory.png";
import cat2 from "../../image/cat2.png";
import cat3 from "../../image/cat3.png";
import cat4 from "../../image/cat4.png";
import cat5 from "../../image/cat5.png";
import cat6 from "../../image/cat6.png";
import "./index.scss";
const Current = () => {
  return (
    <div id="current">
      <div className="container">
        <h2>Категория</h2>
        <div className="current">
          <div className="current__block">
            <img src={stran} alt="img" />
            <div className="current__block-bl">
              <h1 className="h4">
                Юридическая <br /> помощь
              </h1>
              <button className="btn">Оставить заявку</button>
            </div>
          </div>{" "}
          <div className="current__block">
            <img src={cat2} alt="img" />
            <div className="current__block-bl">
              <h1 className="h4">
                Психологическая <br />
                помощь
              </h1>
              <button className="btn">Оставить заявку</button>
            </div>
          </div>{" "}
          <div className="current__block">
            <img src={cat3} alt="img" />
            <div className="current__block-bl">
              <h1 className="h4">Инструкция для пострадавших</h1>
              <button className="btn">Оставить заявку</button>
            </div>
          </div>{" "}
          <div className="current__block">
            <img src={cat4} alt="img" />
            <div className="current__block-bl">
              <h1 className="h4">
                Группы <br /> поддержки
              </h1>
              <button className="btn">Оставить заявку</button>
            </div>
          </div>{" "}
          <div className="current__block">
            <img src={cat5} alt="img" />
            <div className="current__block-bl">
              <h1 className="h4">SOS-размещение Обратитесь к нам</h1>
              <button className="btn">Оставить заявку</button>
            </div>
          </div>{" "}
          <div className="current__block">
            <img src={cat6} alt="img" />
            <div className="current__block-bl">
              <h1 className="h4">Обучение Курсы, библиотека</h1>
              <button className="btn">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
