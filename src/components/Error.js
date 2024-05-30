import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>error page</h1>
      <h2>{err.statusText}</h2>
    </div>
  );
};

export default Error;
