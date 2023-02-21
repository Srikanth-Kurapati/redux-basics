import { legacy_createStore as CreateStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import ReducerStore from "./Reducer";

const Store = CreateStore(ReducerStore, devToolsEnhancer({trace:true}))

export default Store


