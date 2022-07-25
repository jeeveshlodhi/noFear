import './App.css';
import SideBar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Trainer from './components/Trainer/Trainer';


function App() {
    return (
        <div className="App">
            <div className='sideSec'>
                <SideBar/>
            </div>
            
            <div className='mainSec'>
                <Header/>
                <Trainer/>
            </div>            
        </div>
    );
}

export default App;
