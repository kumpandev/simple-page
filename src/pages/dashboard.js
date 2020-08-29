import React from "react";
import { HomeIcon } from '../components/icons';

const Dashboard = props => {
  return( 
    <div className="">
      <div className="d-flex p-3 font-weight-middle text-gray justify-content-between">
        <div className="d-flex align-items-center">
          <HomeIcon className="icon-md mr-3"/>
          <h5 className="lineheight-md m-0">Dashboard</h5>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>Principal Loae Yurns Maike</span>
          <span>UIP YU. Ben James</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
