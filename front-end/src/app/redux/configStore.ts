import { createStore, combineReducers } from "redux";
import product from "./modules/product";

// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({ product });

// 스토어를 만듭니다.
const store = createStore(rootReducer);

export default store;

// RootState 라는 타입을 만들어서 내보내주어야 한다는 것 입니다.
// 이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때
// 스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를 사용 할 때 필요로 합니다.
export type RootState = ReturnType<typeof rootReducer>;
