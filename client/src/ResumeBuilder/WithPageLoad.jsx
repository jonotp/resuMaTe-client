import { useEffect } from "react"
import React from "react";

function WithPageLoad(Component) {
  return (props) => {
    useEffect(() => {
      props.onPageLoad();
    }, []);
    return (<Component {...props} />);
  }
}

export default WithPageLoad;