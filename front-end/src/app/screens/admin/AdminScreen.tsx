import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../redux/modules/product";

function AdminScreen() {
  // prop destruction

  // lib hooks
  const dispatch = useDispatch();
  const product_list = useSelector((state: RootState) => state.product.list);

  // state, ref, querystring hooks
  let [name, setName] = useState("");
  let [newName, setNewName] = useState(product_list);
  let [count, setCount] = useState(2);

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers
  // handler이름이 너무 뜨레긴뎅 컨벤션 찾아서 고치기
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const newNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const addProductHandler = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // 여긴 이제 주석처리!
    // setList([...list, text.current.value]);
    dispatch(createProduct({ id: count, name: name }));
    setCount(count + 1);
    console.log(product_list);
  };

  const updateProductHandler = (id: any, name: string) => {
    return (event: React.MouseEvent) => {
      dispatch(updateProduct({ id, name }));
    };
  };

  const deleteProductHandler = (id: any) => {
    return (event: React.MouseEvent) => {
      dispatch(deleteProduct({ id }));
      event.preventDefault();
    };
  };

  return (
    <div>
      Admin
      <input type="text" value={name} onChange={nameChangeHandler} />
      <button onClick={addProductHandler}>제품 추가하기</button>
      <h1>제품 리스트</h1>
      <div>
        {product_list.map((item: any) => {
          return (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <input />
              <button onClick={updateProductHandler(item.id, newName)}>
                수정하기
              </button>
              <button onClick={deleteProductHandler(item.id)}>삭제</button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>제품 등록하기</h2>
      </div>
    </div>
  );
}

export { AdminScreen };
