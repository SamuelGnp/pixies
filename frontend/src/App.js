import React, { Fragment, useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Axios from 'axios';

const App = () => {
  const[items,setItems2]=useState([]);
  useEffect(
    () => {  
    const url = window.settings.backendUrl;
    Axios.get(url)
      .then(response => {
        setItems2(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <Carousel>
          {items.map(item => (
            <Carousel.Item>
              <img className='d-block w-100' src={item.url} alt='' />
              <Carousel.Caption>
                <h3>{item.caption}</h3>
                <p>{item.details}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default App;