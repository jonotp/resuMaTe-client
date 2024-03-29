import React, { useContext } from "react";
import PreloaderContext from "./Preloader.Context";
import "./preloader.scss";

const Preloader = () => {
  const { isLoading } = useContext(PreloaderContext);
  const classStyle = isLoading ? "preloader active" : "preloader";
  return (
    <div className={classStyle}>
      {isLoading ? (
        <div>
          {/* eslint-disable */}
          <div role="loader" className="square"></div>
          <div role="loader" className="square"></div>
          <div role="loader" className="square"></div>
          <div role="loader" className="square"></div>
          {/* eslint-enable */}
        </div>
      ) : null}
    </div>
  );
};

export default Preloader;
