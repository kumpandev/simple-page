import React from "react";
import classnames from 'classnames'
import { ChartCircle } from "../icons";

const Examiner = ({data, className}) => {
  const { isCompleted, completedTests, remainingTests, LTDate, examiner } = data

  const getPrincipalOfDoneTest = () => {
    if (isCompleted) {
      return 100
    }

    return Math.round((completedTests / (completedTests + remainingTests)) * 100)
  }

  const classes = classnames(className, `d-flex flex-column justify-content-between border-tests${isCompleted ? '-completed' : ''} main-container`)

  return (
    <div className='col-4 mb-3'>
      <div className={classes}>
        <div className='font-weight-bold'>
          {`Priniciap Examiner (${examiner})`}
        </div>
        <div className='d-flex flex-fill align-items-end justify-content-between border-bottom border-dark'>
          <div className='d-flex flex-column'>
            <div className={`${!isCompleted ? "font-weight-bold" : '' }`}>
            {isCompleted ? `Qualified` : `${remainingTests} Test Remaining`}
            </div>
            <div>
            {`${completedTests} Test Completed`}
            </div>
          </div>
          <ChartCircle principal={getPrincipalOfDoneTest()} isCompleted={isCompleted}/>
        </div>
        <div className='d-flex justify-content-end LTDate'>
          <div>
          {`${!isCompleted ? 'Expected ' : ''}LT. Date`}
          </div>
          <div className='ml-3'>
            {LTDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examiner;
