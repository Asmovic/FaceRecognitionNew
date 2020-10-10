import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
if(isSignedIn){
    return(
    <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={()=> onRouteChange('signin')} className= 'pa3 underline pointer fr3 link dim black'>Sign Out</p>
    </nav>
    );
}else{
    return(
    <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={()=> onRouteChange('signin')} className= 'pa3 underline pointer fr3 link dim black'>Sign In</p>
        <p onClick={()=> onRouteChange('register')} className= 'pa3 underline pointer fr3 link dim black'>Register</p>
    </nav>  
    );
}
      
    
}

export default Navigation;
