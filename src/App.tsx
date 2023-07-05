import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import './App.css'
import Activate from './components/Activate'
import Chat from './components/Chat';


function App() {
  const { isActive } = useSelector((state:RootState)=>state.chatSlice);
  return (
    <div className=' min-w-[400px] min-h-[400px] bg-abstract bg-cover flex place-content-center place-items-center'>
        {
          !isActive ?
            <Activate/>
          :
            <Chat/>
        }
    </div>
  )
}

export default App
