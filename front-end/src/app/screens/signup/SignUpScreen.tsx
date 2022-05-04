import React, { useState } from "react";
import { Button, FlexBox, Form, Input, Select } from "../../components";

type SignUpForm = {
  id: string;
  pwd: string;
  pwdCheck: string;
  name: string;
  phone: string;
  email: string;
  birth: string;
  gender: string;
};

function SignUpScreen() {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks
  const [inputData, setInputData] = useState<SignUpForm>({
    id: "",
    pwd: "",
    pwdCheck: "",
    name: "",
    phone: "",
    email: "",
    birth: "",
    gender: "",
  });

  // form hooks

  // query hooks

  // calculated values
  const optionList = [{ name: "남자" }, { name: "여자" }, { name: "선택안함" }];

  // effects

  // handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  console.log("회원가입폼: ", inputData);

  return (
    <Form
      method="post"
      width="400px"
      height="700px"
      border="2px solid red"
      margin="20px auto"
    >
      회원가입
      <FlexBox
        width="400px"
        height="140px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        margin="30px 0 0 0"
      >
        <Input
          cursor="text"
          type="text"
          name="id"
          placeholder="아이디"
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
          onChange={handleChange}
        />
        <Input
          cursor="text"
          type="password"
          name="pwd"
          placeholder="비밀번호"
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
          onChange={handleChange}
        />
        <Input
          cursor="text"
          type="password"
          name="pwdCheck"
          placeholder="비밀번호 재확인"
          fontSize="1rem"
          radius="4px"
          onChange={handleChange}
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
          isLabel={true}
          cursor="text"
          name="name"
          labelWidth="300px"
          labelHeight="75px"
          labelName="이름"
          type="text"
          placeholder="이름"
          fontSize="1rem"
          radius="4px"
          margin="5px auto 10px"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          cursor="text"
          name="phone"
          labelWidth="300px"
          labelHeight="75px"
          labelName="휴대전화"
          type="tel"
          placeholder="전화번호"
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          cursor="text"
          name="email"
          labelWidth="300px"
          labelHeight="75px"
          labelName="이메일"
          type="email"
          placeholder="이메일"
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          name="birth"
          labelWidth="300px"
          labelHeight="75px"
          labelName="생년월일"
          type="date"
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
          onChange={handleChange}
        />
        <Select
          name="gender"
          isLabel={true}
          labelWidth="300px"
          labelHeight="75px"
          labelName="성별"
          optionList={optionList}
          fontSize="1rem"
          radius="4px"
          margin="0 0 10px 0"
          onChange={handleChange}
        />
      </FlexBox>
      <Button
        backgroundColor="#864fc8"
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
