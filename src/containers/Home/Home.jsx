import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAboutInfo } from "../../store/Slice/AboutSlice";

const Home =() =>{
    //How to fetch the values from Redux store
    const dispatch = useDispatch();
    const aboutInfo = useSelector(state => state.aboutInfo);
    const aboutInfoPayload = aboutInfo?.AboutInfo?.payload;

    useEffect(() => {
        dispatch(getAboutInfo("/company"));
      }, [dispatch]);

  return (
    <div>
        <h1>Values From api</h1>
        <h4>Founder : {aboutInfoPayload?.founded}</h4>
        <h4>CEO: {aboutInfoPayload?.ceo}</h4>
        <h4>Employees: {aboutInfoPayload?.employees}</h4>
    </div>
  )
}

export default Home