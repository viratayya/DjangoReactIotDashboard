import React, { useState, useEffect} from 'react';
import { LineChart } from 'react-d3-components-2'

function CustomChart(props) {
  const [data, setdataState] = useState(
    [{
      values: [{x: 0, y: 0}]
    }]
  )

  useEffect(() => { 

  },[]);
  
  // Hook on prop 
  useEffect(() => { 
    if(props.data.length != 0){
      const localdata = [...data];
      const timestamp = new Date(props.data[0]['timestamp'] * 1000);
      const rdata = {
        x: (timestamp.getHours() * 60) + timestamp.getMinutes(),
        y: props.data[0]['reading'],
      }
      localdata[0].values = [...localdata[0].values,rdata]
      setdataState(localdata);
    }   
  }, [props.data]);

  return ( 
    <div>
      <LineChart
        data={data}
        width={600}
        height={430}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}
      />
    </div>
  );
}

export default CustomChart;
