import React, { createContext } from "react";

const PreloaderContext = createContext<{
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isLoading: false,
  setIsLoading: () => null,
});

export default PreloaderContext;
