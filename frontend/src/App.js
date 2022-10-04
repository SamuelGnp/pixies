import React, { Fragment, useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Axios from 'axios';

const App = () => {
  const[items,setItems]=useState([]);

  useEffect(() => {
    const url = 'http://localhost:9090/api/';
    Axios.get(url)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
}

export default App;