import React, { useEffect, useState } from "react";
import { actionCreators as userActions } from "../../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/configStore";
import { FlexBox } from "../FlexBox";

function Header() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state: RootState) => state.user.is_login);

  // state, ref, querystring hooks
  const [loginState, setLoginState] = useState(false);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    setLoginState(isLogin);
    console.log("유즈이펙 안에서 isLogin: ", isLogin);
  }, [isLogin]);

  // handlers

  // handlers
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    history.push("/signin");
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(userActions.logOut());
    alert("로그아웃 되었습니다!");
  };

  console.log("헤더에서 로그인 상태: ", isLogin);

  return loginState ? (
    <FlexBox>
      로그인 된 상태!{" "}
      <Button
        width="70px"
        height="30px"
        backgroundColor="#a374db"
        onClick={handleLogout}
      >
        로그아웃
      </Button>
    </FlexBox>
  ) : (
    <FlexBox>
      로그인 안 된 상태!{" "}
      <Button
        width="120px"
        height="30px"
        backgroundColor="#a374db"
        onClick={handleLogin}
      >
        로그인하러 가기
      </Button>
    </FlexBox>
  );
}

export { Header };
