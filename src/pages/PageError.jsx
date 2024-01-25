import { useEffect, useState } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import '../sass/errorPage.scss';

function PageError() {
  const [remainingSecondes, setRemainingSecondes] = useState(10);

  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingSecondes((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate("/");
      clearInterval(intervalId);
    }, 10000);

    return () => {
      clearInterval(intervalId);
      clearInterval(timeoutId);
    };
  }, [navigate]);

  return (
    <div id="errorContainer">
      <div className="errorInfoText big">
      <h1>Page 404 !</h1>
      </div>
      <div className="errorInfoText">
        <p>Oups, une erreur est survenue !</p>
      </div>
      <div className="errorInfoText">
        <i>{error.statusText || error.message}</i>
      </div>
      <div className="errorInfoText">
        <i>
          Redirection vers la page page 404 dans {remainingSecondes} secondes
          ...
        </i>
      </div>
    </div>
  );
}

export default PageError;
