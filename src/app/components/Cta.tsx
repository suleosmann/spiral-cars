import React from 'react';
import { faCarAlt, faCommentDots, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cta = () => {
  return (
    <div className="text-center bg-gray-200 py-8">
      <div className="text-2xl mb-4">Owning a car is as simple as</div>
      <div className="font-bold text-3xl mb-8">One, Two, Three</div>
      <div className="sm:flex justify-center sm:space-x-8 ml-8 sm:space-y-0 space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <FontAwesomeIcon icon={faCarAlt} size="5x" className="text-gray-300 mb-2" />
          <div className='text-xs'>ONE</div>
          <div className="text-lg font-bold">Select Vehicle</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <FontAwesomeIcon icon={faCommentDots} size="5x" className="text-gray-300 mb-2" />
          <div className='text-xs'>TWO</div>
          <div className="text-lg font-bold">Enquire</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <FontAwesomeIcon icon={faMoneyBillAlt} size="5x" className="text-gray-300 mb-2" />
          <div className='text-xs'>THREE</div>
          <div className="text-lg font-bold">Pay</div>
        </div>
      </div>
    </div>
  );
};

export default Cta;