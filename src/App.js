import './App.css';
import DownloadDoc from './components/DownloadDoc/DownloadDoc';
import Downloadexcel from './components/DownloadDoc/Downloadexcel';
import CustomRichEditor from './components/CustomRichEditor/CustomRichEditor';

function App() {
  return (
    <div className="App">
      <DownloadDoc />
      <Downloadexcel />
      {/* <CustomRichEditor />  */}
    </div>
  );
}

export default App;
