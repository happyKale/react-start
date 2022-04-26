// 액션
const LOAD = "product/LOAD";
const CREATE = "product/CREATE";
const UPDATE = "product/UPDATE";
const DELETE = "product/DELETE";

// 초기 상태값
const initialState = {
  // product 리스트를 가지고 있음.
  // models 폴더에 product 모델을 만들어야 될 듯???
  list: [
    {
      id: 1,
      name: "조던",
      image: "12345",
      price: "100000",
      brand: "나이키",
      category: "농구화",
      desc: "조던 농구화는 왕 멋지다.",
      wishList: [4, 12],
    },
  ],
};

// 액션 생성 함수
export const loadProduct = (product: any) => {
  return { type: LOAD, product };
};
export const createProduct = (product: any) => {
  return { type: CREATE, product };
};
export const updateProduct = (product: any) => {
  return { type: UPDATE, product };
};
export const deleteProduct = (product: { id: any }) => {
  return { type: DELETE, product };
};

// 리듀서
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(
  state = initialState,
  action = { type: "", product: { id: 1 } }
) {
  switch (action.type) {
    // do reducer stuff
    case "product/LOAD": {
      return state;
    }
    case "product/CREATE": {
      const new_product_list = [...state.list, action.product];
      return { list: new_product_list };
    }
    case "product/UPDATE": {
      return state;
    }
    case "product/DELETE": {
      const new_product_list = state.list.filter(
        (item) => item.id !== action.product.id
      );
      console.log(action.product);
      return { list: new_product_list };
    }
    default:
      return state;
  }
}
