import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, FlexBox, Input, Title } from "../../components";
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
    <Form method="post" width="350px" height="400px" margin=" 50px auto">
      <Title type="h2">로그인</Title>
      <FlexBox
        height="150px"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        margin="40px auto 0"
      >
        <Input
          isLabel={true}
          labelName="아이디"
          name="id"
          type="text"
          placeholder="아이디"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          labelName="비밀번호"
          name="pwd"
          type="password"
          placeholder="비밀번호"
          onChange={handleChange}
        />
      </FlexBox>
      <Button
        backgroundColor="#864fc8"
        fontSize="1.2rem"
        margin="30px auto 0"
        onClick={handleSubmit}
        type="button"
      >
        로그인
      </Button>
    </Form>
  );
}

export { SignInScreen };
