import React,{useState,useSelector, useEffect} from 'react'

export default function Searching() {

    const searchList = useSelector(state => state.FilmManageReducer.searchLists);
    useEffect(() => {
        dispatch(timKiemPhimAction())
    }, []);
    
    return (
        <div>
            
        </div>
    )
}
