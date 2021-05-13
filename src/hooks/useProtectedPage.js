import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin, goToSignUpAddress } from "../Routes/Coordinators";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      goToLogin(history);
    } else if (!user.user.hasAddress) {
      goToSignUpAddress(history);
    }
  }, [history]);
};

export default useProtectedPage;
