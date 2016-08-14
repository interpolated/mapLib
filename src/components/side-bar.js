import React from 'react';
import ResponsiveFixedDataTable from 'responsive-fixed-data-table';
import {Column, Cell} from 'fixed-data-table';
import ProjectCell from './cell'

export default class projectTable extends React.Component {
  render(){
    return(
        <div className="block side-bar">
          <ResponsiveFixedDataTable
            rowsCount = {100}
            rowHeight= {150}
            headerHeight = {100}>
            <Column
              cell={<ProjectCell/>}
              //width can be adjusted see fb example
              width = {200}
            />
          </ResponsiveFixedDataTable>
        </div>
      );
  }
}
