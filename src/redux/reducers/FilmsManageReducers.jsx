import {LAY_DANH_SACH_PHIM,LAY_CHI_TIET_PHIM, TIM_KIEM_PHIM} from '../constans/FilmsConstans';

const initialState = {
    listFilms: [],
    detailFilm: {},
    searchLists:[]
}

const FilmManageReducer = (state = initialState, action) => {
    switch (action.type) {

    case LAY_DANH_SACH_PHIM:{
        state.listFilms = action.listFilms;
        return {...state};
    }
    
    case LAY_CHI_TIET_PHIM:{
        state.detailFilm = action.detailFilm;
        return {...state};
    }
    case TIM_KIEM_PHIM: {
        state.searchLists = action.searchList;
        return { ...state };
    }

    default:
        return state;
    }
}
export default FilmManageReducer;
