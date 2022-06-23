import React from 'react';

const Mywork=()=>{return (
    <div className='row'>
        <div className='website px-0 btn-sm'><a href='.' target='_blank' style={{color:'white',textDecoration:'none',margin:'10px',border:'solid 2px white',borderRadius:'3px',padding:'0.3rem'}}>My work</a></div>
    <div className='contacts'>
        <button className="email"><a href='mailto:molusi.abigail@gmail.com' target='_blank'><i class="bi bi-envelope-fill" style={{color:'black'}}></i>Email</a></button>
        <button className="linkedin " ><a href='https://www.linkedin.com/in/abigail-molusi-4990a4225/'target='_blank' >Linkedin</a></button>
    </div>
    
    </div>
)}

export default Mywork;