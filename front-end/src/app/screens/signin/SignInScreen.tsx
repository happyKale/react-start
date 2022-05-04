import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, FlexBox, Input } from "../../components";
import { Form } from "../../components";
import { actionCreators as userActions } from "../../redux/modules/user";

type SignInForm = {
  id: string;
  pwd: string;
};

function SignInScreen() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();

  // state, ref, querystring hooks
  const history = useHistory();
  const [inputData, setInputData] = useState<SignInForm>({
    id: "",
    pwd: "",
  });

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(userActions.logIn(inputData));
    history.push("/");
    console.log("로그인 폼 제출 완료~!");
  };

  console.log(inputData);

  return (
    <Form
      method="post"
      width="400px"
      height="200px"
      border="2px solid red"
      margin=" 50px auto"
    >
      로그인
      <FlexBox
        width="400px"
        height="100px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
      >
        <Input
          name="id"
          type="text"
          placeholder="아이디"
          fontSize="1rem"
          radius="4px 4px 0 0"
          borderBottom="0px"
          onChange={handleChange}
        />
        <Input
          name="pwd"
          type="password"
          placeholder="비밀번호"
          fontSize="1rem"
          radius="0 0 4px 4px"
          onChange={handleChange}
        />
      </FlexBox>
      <Button
        backgroundColor="#a374db"
        fontSize="1.2rem"
        display="block"
        margin="0 auto"
        onClick={handleSubmit}
        type="button"
      >
        로그인
      </Button>
    </Form>
  );
}

export { SignInScreen };
