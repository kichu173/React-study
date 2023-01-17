// This is a hook react-router-dom gives us. 'use' appended at start will be identified as hook.
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("error:>", err);
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong!</h2>
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};

export default Error;
