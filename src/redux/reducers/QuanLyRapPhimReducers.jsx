import { LAY_DANH_SACH_HE_THONG_RAP } from "../constans/FilmsConstans";

const initialState = {
    listHeThongRap :[],
    cumRap:[],
    lichChieuHTRArray: [],
}

export const QuanLyRapPhimReducer = (state = initialState, action) => {
    switch (action.type) {

    case LAY_DANH_SACH_HE_THONG_RAP:{
        state.listHeThongRap = action.listHeThongRap;
        return {...state};
    }
    // case LAY_DANH_SACH_CUM_RAP:{
    //     state.cumRap = action.cumRap;
    //     return {...state};
    // }

    default:
        return state;
    }
}
