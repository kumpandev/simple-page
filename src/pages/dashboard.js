import React from "react";
import { HomeIcon } from '../components/icons';
import Examiner from "../components/dashboard/Examiner";
import AddButton from "../components/dashboard/AddButton";

const testData = [
  {
    isCompleted: false, 
    completedTests: 22, 
    remainingTests: 58, 
    LTDate: '08/05/2020', 
    examiner: 'FFFFF',
  },
  {
    isCompleted: false, 
    completedTests: 22, 
    remainingTests: 58, 
    LTDate: '08/05/2020', 
    examiner: 'FFFFF',
  },
  {
    isCompleted: false, 
    completedTests: 56, 
    remainingTests: 132, 
    LTDate: '18/07/2020', 
    examiner: 'FFFFF',
  },
  {
    isCompleted: false, 
    completedTests: 120, 
    remainingTests: 99, 
    LTDate: '29/08/2020', 
    examiner: 'FFFFF',
  },
  {
    isCompleted: true, 
    completedTests: 111, 
    LTDate: '22/12/2019', 
    examiner: 'FFFFF',
  },
  {
    isCompleted: true, 
    completedTests: 87,  
    LTDate: '25/08/2020', 
    examiner: 'FFFFF',
  }
]

const Dashboard = props => {
  const getDataByStatus = status => testData.filter(({ isCompleted }) => isCompleted === status)
    .map((data, idx) => <Examiner key={idx} data={data}/>)
 

  return( 
    <div>
      <div className="d-flex flex-column flex-md-row p-3 font-weight-middle text-gray justify-content-between">
        <div className="d-flex align-items-center">
          <HomeIcon className="icon-md mr-3"/>
          <h5 className="lineheight-md m-0">Dashboard</h5>
        </div>
        <div className="d-flex flex-column align-items-md-center mt-4 mt-md-0">
          <span>Principal Loae Yurns Maike</span>
          <span>UIP YU. Ben James</span>
        </div>
      </div>
      <div className="p-3">
        <div className="h4 title-gray">
          In Progress
        </div>
        <div className='d-flex flex-wrap mt-4'>
          {getDataByStatus(false)}
          {getDataByStatus(false)}
          {getDataByStatus(false)}
          {getDataByStatus(false)}
          {getDataByStatus(false)}
        </div>
      </div>
      <div className="p-3">
        <div className="h4 title-gray">
          Completed
        </div>
        <div className='d-flex flex-wrap mt-4'>
          {getDataByStatus(true)}
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
