import React, { Component } from 'react';
import './Loader.scss';

class Loader extends Component {
  //Progress on refactoring with react hooks
  /*const loader =  document.querySelector('.loader-container');
  const showLoader = () => loader.classList.remove('.loader--hide');
  const hideLoader = () => loader.classList.add('loader--hide');

  const 
    useEffect(() => {
      
    }) */

    // Sets the opacity to 0 100ms after component mounted and removes loader from DOM 2 seconds after
    componentDidMount() {
      setTimeout(() => {
  
        document.querySelector('.loader-container').style.transition = 'opacity 5s';
        document.querySelector('.loader-container').style.opacity = '0';
  
        setTimeout(() => {
          document.querySelector('.loader-container').remove();
        }, 2000);
  
      }, 100);
    }
    render(){
    return(
      <div className="loader-container">
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>
    );
  
  }
}

export default Loader;


