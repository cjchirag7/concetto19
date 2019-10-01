import React,{ Component } from 'react';

class ComingSoon extends Component{
  componentDidMount(){
      document.body.style.overflow='hidden';
      window.scrollTo(0,0);//to fix bug of component not showing
      console.log('sdfkj');
  }
  componentWillUnmount(){
      document.body.style.overflowY='scroll';
  }
   render(){
        return(
        <div>
            <h1 
            style={{
                textAlign: 'center',
                left: '40%',
                height:'100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                COMING SOON......
            </h1>
        </div>
       )
   }
}

export default ComingSoon;