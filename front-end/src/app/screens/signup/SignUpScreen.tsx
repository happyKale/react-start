import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, FlexBox, Form, Input, Select, Title } from "../../components";
import { userActions } from "../../redux/modules/user";

type SignUpForm = {
  id: string;
  pwd: string;
  name: string;
  phone: string;
  email: string;
  birth: string;
  gender: "male" | "female" | "none";
};

function SignUpScreen() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();

  // state, ref, querystring hooks
  const [inputData, setInputData] = useState<SignUpForm>({
    id: "",
    pwd: "",
    name: "",
    phone: "",
    email: "",
    birth: "",
    gender: "none",
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

  // 폼이 다 채워졌는지 확인해야함!
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.signUpDB(inputData));
    console.log("회원가입 폼 제출 완료~!");
  };

  // 아이디, 전화번호, 이메일 중복확인
  // 비밀번호 재확인

  console.log("회원가입폼: ", inputData);

  return (
    <Form
      method="post"
      onSubmit={handleSubmit}
      width="400px"
      height="700px"
      margin="0 auto"
    >
      <Title type="h2">회원 가입</Title>
      <FlexBox
        width="400px"
        height="140px"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        margin="30px 0 0 0"
      >
        <FlexBox
          width="300px"
          height="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Input
            width="260px"
            type="text"
            name="id"
            placeholder="아이디"
            onChange={handleChange}
          />
          <Button
            type="button"
            width="30px"
            fontSize="12px"
            weight="light"
            backgroundColor="#864fc8"
          >
            중복확인
          </Button>
        </FlexBox>
        <Input
          type="password"
          name="pwd"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <Input
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
          name="name"
          labelName="이름"
          type="text"
          placeholder="이름"
          onChange={handleChange}
        />
        <FlexBox
          width="300px"
          height="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Input
            width="260px"
            labelWidth="260px"
            isLabel={true}
            name="phone"
            labelName="휴대전화"
            type="tel"
            placeholder="전화번호"
            onChange={handleChange}
          />
          <Button
            type="button"
            margin="24px 0 0 0"
            width="30px"
            fontSize="12px"
            weight="light"
            backgroundColor="#864fc8"
          >
            중복확인
          </Button>
        </FlexBox>
        <FlexBox
          width="300px"
          height="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Input
            width="260px"
            labelWidth="260px"
            isLabel={true}
            name="email"
            labelName="이메일"
            type="email"
            placeholder="이메일"
            onChange={handleChange}
          />
          <Button
            type="button"
            margin="24px 0 0 0"
            width="30px"
            fontSize="12px"
            weight="light"
            backgroundColor="#864fc8"
          >
            중복확인
          </Button>
        </FlexBox>
        <Input
          cursor="pointer"
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
      <Button
        type="submit"
        backgroundColor="#864fc8"
        fontSize="1.2rem"
        margin="30px auto 0"
      >
        가입하기
      </Button>
    </Form>
  );
}

export { SignUpScreen };
