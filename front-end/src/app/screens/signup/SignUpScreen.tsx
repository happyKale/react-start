import React, { useState } from "react";
import { Button, FlexBox, Form, Input, Select, Title } from "../../components";

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
    <Form method="post" width="400px" height="700px" margin="0 auto">
      <Title type="h2">회원 가입</Title>
      <FlexBox
        width="400px"
        height="140px"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        margin="30px 0 0 0"
      >
        <Input
          cursor="text"
          type="text"
          name="id"
          placeholder="아이디"
          onChange={handleChange}
        />
        <Input
          cursor="text"
          type="password"
          name="pwd"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <Input
          cursor="text"
          type="password"
          name="pwdCheck"
          placeholder="비밀번호 재확인"
          onChange={handleChange}
        />
      </FlexBox>
      <FlexBox
        width="400px"
        height="360px"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        margin="20px 0 0 0"
      >
        <Input
          isLabel={true}
          cursor="text"
          name="name"
          labelName="이름"
          type="text"
          placeholder="이름"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          cursor="text"
          name="phone"
          labelName="휴대전화"
          type="tel"
          placeholder="전화번호"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          cursor="text"
          name="email"
          labelName="이메일"
          type="email"
          placeholder="이메일"
          onChange={handleChange}
        />
        <Input
          isLabel={true}
          name="birth"
          labelName="생년월일"
          type="date"
          onChange={handleChange}
        />
        <Select
          name="gender"
          isLabel={true}
          labelName="성별"
          optionList={optionList}
          onChange={handleChange}
        />
      </FlexBox>
      <Button backgroundColor="#864fc8" fontSize="1.2rem" margin="30px auto 0">
        가입하기
      </Button>
    </Form>
  );
}

export { SignUpScreen };
