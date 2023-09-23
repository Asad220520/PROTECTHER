import React from "react";
import "./index.scss";
import stran from "../../image/stran.png"
const Current = () => {
  return (
    <div id="current">
      <div className="container">
        <div className="current w-full">
          <h2 className="h1 text-center ">Current Campaigns</h2>
          <div className="flex justify-between">
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
      </div>
    </div>
  );
};

export default Current;
