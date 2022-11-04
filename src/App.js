
import './App.css';
import Get_Data from './Components/Get_Data/Get_Data';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Uploadfile from './Components/UploadFile/Uploadfile';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header/>
      {/* <Uploadfile/> */}
      <Get_Data/>
     
    </div>
  );
}

export default App;
