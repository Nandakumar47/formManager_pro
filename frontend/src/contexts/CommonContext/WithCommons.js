import React from "react";
import CommonContext from "./CommonContext";

const UseCommon =
  (Component) =>
  ({ ...props }) => {
    return (
      <CommonContext>
        <Component {...props} />
      </CommonContext>
    );
  };

export default UseCommon;
