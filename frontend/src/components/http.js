import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomTable from './table/Table'
import CustomChart from './chart/CustomChart'
import CustomPost from './post/Post'
import axios from 'axios';

const url = 'collector/';

function CustomHttp() {

  const [data, setdataState] = useState([]);
  const [log, setlogState] = useState();

  useEffect(() => { 
    setInterval(longlooping, 500);
     axios.get(url)
    .then(function (response) {
      const localdata = [response.data,...data];
      setdataState(localdata);
      setInterval(longlooping, 500);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);

  const longlooping = () => {
    axios.get(url)
    .then(function (response) {
      if(response.data['timestamp'] !== data['timestamp']){
        const localdata = [response.data,...data];
        setdataState(localdata);
      }
    })
    .catch(function (error) {
      setlogState({
          "status":"danger",
          "message": error
      });
    });
  };

  const sendhandleClick = () => {
    setlogState({
      "status":"primary",
      "message": "Sending Data to Backend..."
    });
    axios.post(url + 'v1/iotdata/', {
      'reading': Math.random(),
      'timestamp': Date.now(),
      'sensorType': 'Temperature'
    })
    .then(function (response) {
      setlogState({
        "status":"success",
        "message": "Sent Data to Backend..."
      });
    })
    .catch(function (error) {
      setlogState({
          "status":"danger",
          "message": error
      });
    });
  };

  const genertorhandleClick = () => {
    setInterval(sendhandleClick, 600);
  };

  return (
    <Container>
      <div className="row">
        <div className="col-5">
          <CustomTable
            data = {data}
          />
        </div>
        <div className="col-7">
          <CustomChart
            data = {data}
          />
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-12">
          <CustomPost
            data = { data }
            log = { log }
            sendhandleClick = { sendhandleClick }
            genertorhandleClick = { genertorhandleClick }
          />
        </div>
      </div>
    </Container>
  );
}

export default CustomHttp;
