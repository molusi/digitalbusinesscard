import React from "react";


const Header=()=>{
    return(
        
        
            <div className='header' style={{border:'none',backgroundColor:'inherit'}}>
            
                <img className='img-fluid'  src={"https://am3pap003files.storage.live.com/y4mV7Y3kTfeEEly_EGBolkE-inhL9oLzSM5qMK_n6C8xTm2ckq20L213F89d5OZwcCzzDVkxqNZcFK2fPxi82CvALFBJgifpyOXk_8Y4bhbn4XHzXMb0SGFz9xjlhBNGGItmuLMZhb2XKW4PRTnlBsp9HhigWJJZZTH60F7jBZwBy94q3eLOVHhkGh1I3MzMfUJ?width=2420&height=2359&cropmode=none"} style={{margin:'0 auto',border:'none',width:'50%',height:'45%'}} alt='myimage'  />
                
                <h2 className="name">Abigail Molusi</h2>
                
            
                <p className="position">Full stack Developer</p>
                <div className='row'>
        <div className='website px-0 btn-sm'><a href='https://abimolusi.herokuapp.com/' target='_blank' style={{textAlign:'center',color:'white',textDecoration:'none',margin:'10px',border:'solid 2px white',borderRadius:'3px',padding:'0.3rem'}}>My work</a></div>
    <div className='contacts'>
        <div className="email"><a href='mailto:molusi.abigail@gmail.com' target='_blank'><i class="bi bi-envelope-fill" style={{color:'black'}}></i>Email</a></div>
        <div className="linkedin " ><a href='https://www.linkedin.com/in/abigail-molusi-4990a4225/'target='_blank' >Linkedin</a></div>
    </div>
    
    </div>
            
               
            </div>
     
        )
    }

export default Header;
