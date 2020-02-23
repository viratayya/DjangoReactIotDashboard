import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Alert, Button } from 'react-bootstrap';

function CustomPost( props ) {
  const [data, setdataState] = useState({});
  const [log, setlogState] = useState();

  // Hook on prop 
  useEffect(() => { 
    if(props.data.length !== 0){
      const localdata = props.data[0];
      setdataState(props.data[0]);
    }
    const locallog = props.log; 
    setlogState(locallog);  
  }, [props.data, props.log ]);

  return (
    <Form>
      <Form.Group controlId="formPostRequestText">
        <Row>
          <Form.Label column sm="2">
            Post request text : 
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" value= { JSON.stringify(data) } />
          </Col>
        </Row> { }<br/>
        {log && <Row><Col sm="12"><Alert variant={log['status']}>{log['message']}</Alert></Col></Row>}
        <Row>
          <Col md={{ span: 6, offset: 5 }}>
            <Button 
              variant="success"
              onClick={ props.sendhandleClick }
            >Generator & Send</Button> {}
            <Button 
              variant="warning"
              onClick={ props.genertorhandleClick }
            >Streaming</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default CustomPost;
