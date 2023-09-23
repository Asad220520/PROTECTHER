import React from "react";
import "./index.scss";
import one from "../../icons/one.svg";
import two from "../../icons/two.png";
import three from "../../icons/three.png";
import stran from "../../image/stran.png";

const Bonuses = () => {
  return (
    <div id="bonuses">
      <div className="container">
        <div className="bonuses">
          <div className="bonuses__text">
            <h1>
              Мы делаем проблему домашнего насилия видимой и поддерживаем тех,
              кому нужна наша помощь
            </h1>
            <p>
              <span>«MyLaw»</span>— это десятки людей, которых объединяет
              желание изменить отношение к проблеме домашнего насилия и помочь
              тем, кто пострадал от него. Мы работаем благодаря поддержке наших
              доноров.
            </p>
            <div className="bonuses__text-btn">
              <button>See our impact</button>
              <button className="btn">Start your petition</button>
            </div>
          </div>
          <div className="bonuses__img">
            <div className="rounded w-[380px] bg-gray-200 text-black-500">
              <img src={stran} alt="img" />
              <div className="block1">
                <h3 className="h3">Petition</h3>
                <h2 className="h4">Minimum Standardsfor MPs</h2>
                <div className="pb-4">
                  <div className="flex pt-4 pb-2 justify-between">
                    <span>
                      <h4 className="font-bold">94536</h4>
                      <h3>Supporters</h3>
                    </span>
                    <span>
                      <h4 className="font-bold">200000</h4>
                      <h3>Target</h3>
                    </span>
                  </div>
                  <div className="reiting"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arm">
          <div className="arm__ar">
            <img src={one} alt="" />
            <div>
              <h3>274</h3>
              <h4>Currently Online</h4>
            </div>
          </div>
          <div className="arm__ar">
            <img src={two} alt="" />
            <div>
              <h3>274</h3>
              <h4>Currently Online</h4>
            </div>
          </div>
          <div className="arm__ar">
            <img src={three} alt="" />
            <div>
              <h3>274</h3>
              <h4>Currently Online</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
