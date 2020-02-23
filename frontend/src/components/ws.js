import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomTable from './table/Table'
import CustomChart from './chart/CustomChart'
import CustomPost from './post/Post'

const chatSocket = new WebSocket('ws://'+ window.location.host +'/ws/streaming/room_name/');

function Ws() {

  const [data, setdataState] = useState([]);
  const [log, setlogState] = useState();

  chatSocket.onmessage = function(e) {
    if(data.length === ( 24 * 60 )){
      setdataState([]);
    }
    const localdata = [JSON.parse(e.data),...data]
    setdataState(localdata);
  };

  chatSocket.onclose = function(e) {
    setlogState({
        "status":"danger",
        "message": "socket closed unexpectedly"
    });
  };

  const sendhandleClick = () => {
      setlogState({
        "status":"primary",
        "message": "Sending Data to Backend..."
      });
      chatSocket.send(JSON.stringify({
        'reading': Math.random(),
        'timestamp': Date.now(),
        'sensorType': 'Temperature'
      }));
      setlogState({
        "status":"success",
        "message": "Sent Data to Backend..."
      });
  };

  const genertorhandleClick = () => {
    setInterval(sendhandleClick, 100);
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

export default Ws;
