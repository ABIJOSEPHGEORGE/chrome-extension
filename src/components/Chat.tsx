import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineSend } from 'react-icons/ai'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ChatList from './ChatList';
import { resetChatList, updateActive, updateChatList } from '../redux/slice';
import { toast,Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function Chat(){
    const dispatch = useDispatch();
    const [chat, setChat] = useState<string>('');

    useEffect(() => {
      const chatList = localStorage.getItem('chatList');
      if (chatList){
        dispatch(resetChatList())
        JSON.parse(chatList).forEach((chat:object)=>{
            dispatch(updateChatList(chat))
        })
      }
    }, [])
    

    const RequestChat = async () => {
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{chat});
            await new Promise(resolve=> setTimeout(resolve,1000))
            dispatch(updateChatList({isUser:false,message:response.data.chat,currentTime:Date.now()}));
        }catch(err){
            toast.error("Something wen't wrong...")
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setChat(e.target.value);
    }
    const handleSubmit = (e:React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!chat.trim().length){
            toast.error('Please enter a valid message')
        }else{
            dispatch(updateChatList({isUser:true,message:chat,currentTime:Date.now()}));
            setChat('');
            RequestChat();
        }
    }

    const handleDeactivate = () => {
        localStorage.removeItem('isActive');
        dispatch(updateActive({type:'DEACTIVATE'}))
    }

    return (
        <div className="w-full flex h-screen flex-col place-content-end py-12 px-6">
            <Toaster position='top-center'/>
            <div className="bg-white bg-opacity-20 rounded-2xl h-full p-3 flex flex-col place-content-end py-2">
                <ChatList/>
                <form className="flex place-items-center place-content-center w-full gap-3 bg-white px-3 rounded-2xl" onSubmit={handleSubmit}>
                    <input type="text" className="w-full py-3 px-4 rounded-2xl outline-none bg-transparent" placeholder="Ask me anything" value={chat} onChange={handleChange}/>
                    <AiOutlineSend size={30} className=" text-blue-600 cursor-pointer" type="submit" onClick={handleSubmit}/>
                </form>
            </div>
            <div className="w-full flex place-content-center place-items-center mt-5">
                <button className='bg-red-500  text-white px-5 font-semibold py-2 rounded-3xl flex gap-3 place-items-center' onClick={handleDeactivate}>Deactivate <IoIosCloseCircleOutline size={20}/></button>
            </div>
        </div>
    )
}