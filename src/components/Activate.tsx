import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateActive } from '../redux/slice';


export default function Activate(){
    const dispatch = useDispatch();

    useEffect(()=>{
        const isActive = localStorage.getItem('isActive');
        if(isActive==="true"){
            dispatch(updateActive({type:'ACTIVATE'}));
        }
    },[dispatch])

    const handleActive = () => {
        dispatch(updateActive({type:'ACTIVATE'}));
    }
    return (
        <div className="h-screen w-full mx-5 flex flex-col gap-4 place-content-center place-items-center">
            <div className="bg-white bg-opacity-5 shadow-xl w-full h-80 rounded-2xl flex place-content-center place-items-center bg-blend-overlay">
                <button className="bg-blue-600 text-white w-2/4 py-3 px-5 rounded-3xl font-bold" onClick={handleActive}>Activate ChatGPT</button>
            </div>
        </div>
    )
}