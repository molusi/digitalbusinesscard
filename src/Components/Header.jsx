import React from "react";


const Header=()=>{
    return(
        
        
            <div className='header' style={{border:'none',backgroundColor:'inherit'}}>
            
                <img className='img-fluid'  src={"https://am3pap003files.storage.live.com/y4m_WGQWZwU27ImtHqb6rACMc245TX-c7Rf8C0JGRQNmkacMuZuwNsAziFnifgpCaiA-EFl0iPY4NslbyvlaC_LC8l0BVB7CKhBak4lKx4eqYIoHmMnBJ9OVFtup0qo16tLThdlMsePy43kwcGDwQx4Ci7aO5DaJMQS8wB_TzuTkCnFl3SqgadSixrta5n6E-zb?width=959&height=959&cropmode=none"} style={{margin:'0 auto',border:'none',width:'50%',height:'45%'}} alt='myimage'  />
                
                <h2 className="name">Abigail Molusi</h2>
                
            
                <p className="position">Full stack Developer</p>
                <div className='row'>
        <div className='website px-0 btn-sm'><a href='.' target='_blank' style={{color:'white',textDecoration:'none',margin:'10px',border:'solid 2px white',borderRadius:'3px',padding:'0.3rem'}}>My work</a></div>
    <div className='contacts'>
        <div className="email"><a href='mailto:molusi.abigail@gmail.com' target='_blank'><i class="bi bi-envelope-fill" style={{color:'black'}}></i>Email</a></div>
        <div className="linkedin " ><a href='https://www.linkedin.com/in/abigail-molusi-4990a4225/'target='_blank' >Linkedin</a></div>
    </div>
    
    </div>
            
               
            </div>
     
        )
    }

export default Header;