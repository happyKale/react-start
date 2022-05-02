import React from "react";
import { Button, FlexBox, Form, Input, Select } from "../../components";

function SignUpScreen() {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values
  const optionList = [
    { name: "남자", selected: false },
    { name: "여자", selected: false },
    { name: "선택안함", selected: true },
  ];

  // effects

  // handlers

  return (
    <Form
      method="post"
      width="400px"
      height="650px"
      border="2px solid red"
      margin=" 50px auto"
    >
      회원가입
      <FlexBox
        width="400px"
        height="100px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        margin="30px 0 0 0"
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
          borderBottom="0px"
          radius="0"
        />
        <Input
          type="password"
          placeholder="비밀번호 재확인"
          fontSize="1rem"
          radius="0 0 4px 4px"
        />
      </FlexBox>
      <FlexBox
        width="400px"
        height="400px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        margin="30px 0 0 0"
      >
        <Input
          label
          labelWidth="300px"
          labelHeight="75px"
          name="이름"
          type="text"
          placeholder="이름"
          fontSize="1rem"
          radius="4px"
          margin="5px auto 10px "
        />
        <Input
          label
          labelWidth="300px"
          labelHeight="75px"
          name="휴대전화"
          type="tel"
          placeholder="전화번호"
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
        />
        <Input
          label
          labelWidth="300px"
          labelHeight="75px"
          name="이메일"
          type="email"
          placeholder="이메일"
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
        />
        <Input
          label
          labelWidth="300px"
          labelHeight="75px"
          name="생년월일"
          type="date"
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
        />
        <Select
          label
          labelWidth="300px"
          labelHeight="75px"
          name="성별"
          optionList={optionList}
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
        />
      </FlexBox>
      <Button
        backgroundColor="#a374db"
        fontSize="1.2rem"
        margin="0 auto"
        display="block"
      >
        회원가입
      </Button>
    </Form>
  );
}

export { SignUpScreen };
