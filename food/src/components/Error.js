import { useRouteError } from "react-router-dom";
const Error = () => {
  const data = useRouteError();

  return (
    <div>
      <h2>OOPS SOMETHING WENT WRONG !</h2>
      <h4>
        {data.status}:{data.statusText}
      </h4>
    </div>
  );
};

export default Error;
