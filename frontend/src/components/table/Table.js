import React from 'react';
import DataTable from 'react-data-table-component';

// const chatSocket = new WebSocket('ws://127.0.0.1:8000/ws/streaming/room_name/');

const columns = [
  {
    name: 'Reading',
    selector: 'reading',
    sortable: true,
    center: true
  },
  {
    name: 'TimeStamp',
    selector: 'timestamp',
    sortable: true,
    center: true
  },
  {
    name: 'SensorType',
    selector: 'sensorType',
    sortable: true,
    center: true
  },
];

function CustomTable(props) {

  return (
    <div>
      <DataTable
        title="Dashboard"
        columns={columns}
        theme="solarized"
        data={props.data}
        pagination={true}
        paginationPerPage = {5}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
      />
    </div>
  );
}

export default CustomTable;
