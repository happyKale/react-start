import React from "react";
import { Button, FlexBox, Input } from "../../components";
import { Form } from "../../components";

function SignInScreen() {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

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
          type="text"
          placeholder="아이디"
          fontSize="1rem"
          radius="4px 4px 0 0"
          borderBottom="0px"
        />
        <Input
          type="password"
          placeholder="비밀번호"
          fontSize="1rem"
          radius="0 0 4px 4px"
        />
      </FlexBox>
      <Button
        backgroundColor="#a374db"
        fontSize="1.2rem"
        display="block"
        margin="0 auto"
      >
        로그인
      </Button>
    </Form>
  );
}

export { SignInScreen };
