
import './App.css';
import Get_Data from './Components/Get_Data/Get_Data';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Uploadfile from './Components/UploadFile/Uploadfile';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Get_Data_Multisend from './Components/Get_Data2/Get_Data_Multisend';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      {/* <Uploadfile/> */}

      {/* <Get_Data/> */}
      <div className='container'>
        <Tabs
          defaultActiveKey="Direct"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Direct" title="Direct">
            <Get_Data />

          </Tab>
          <Tab eventKey="Approve" title="Approve">
            <Get_Data_Multisend />

          </Tab>

        </Tabs>
      </div>


    </div>
  );
}

export default App;
