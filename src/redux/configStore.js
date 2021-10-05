import {combineReducers,createStore,applyMiddleware} from 'redux';
import FilmManageReducer from './reducers/FilmsManageReducers';
import {QuanLyRapPhimReducer} from './reducers/QuanLyRapPhimReducers.jsx';
import QuanLyNguoiDungReducer from './reducers/QuanLyNguoiDungReducer';
import { QuanLyPhongVeReducer }  from './reducers/QuanLyPhongVeReducers.jsx';
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    //reducer khai báo tại đây
    FilmManageReducer,
    QuanLyRapPhimReducer,
    QuanLyNguoiDungReducer,
    QuanLyPhongVeReducer,
})





const store = createStore(rootReducer,applyMiddleware(reduxThunk));




export default store;
