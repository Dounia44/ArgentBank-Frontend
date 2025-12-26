import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/auth.slice";
import { getUserProfile } from "../../store/user.slice";

function AppInit({ children }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { status } = useSelector((state) => state.user);

  const isInit = !token || status === "succeeded" || status === "failed";

  useEffect(() => {
    const storedToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile(token));
    }
  }, [token, dispatch]);

  if (!isInit) {
    return null;
  }

  return children;
}

export default AppInit;
