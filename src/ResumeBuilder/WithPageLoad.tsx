import { useEffect, PropsWithChildren } from "react";
import React from "react";

function WithPageLoad(Component: PropsWithChildren<any>) {
  return (props: any) => {
    useEffect(() => {
      props.onPageLoad();
    }, []);
    return <Component {...props} />;
  };
}

export default WithPageLoad;
