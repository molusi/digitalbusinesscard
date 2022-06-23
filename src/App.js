import React from "react";
import './css/mystyles.css'
import About from './Components/About.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Interests from './Components/Interests.jsx';
import Mywork from './Components/Mywork.jsx'



const App=()=>{
return(<div>
    <div className='container maincontainer'>
        <div className="row" pb-5 mb-4>
            <div className='col-md-6 col-sm-12 pt-4'>
            <Header/> 
            </div>
            <div className='col-md-6 col-sm-12 py-2' >
                <div className='row' >
            <About/>
            </div>
            <div className='row'>
            <Interests/>  
            </div>
            </div> 
                 
        </div>  
        <Footer/>       
    </div>
    
    </div>

)
}

export default App
