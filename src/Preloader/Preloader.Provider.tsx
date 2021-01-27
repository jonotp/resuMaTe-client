import React, { PropsWithChildren, useState } from "react";
import PreloaderContext from "./Preloader.Context";

const PreloaderProvider = ({ children }: PropsWithChildren<any>) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export default PreloaderProvider;
