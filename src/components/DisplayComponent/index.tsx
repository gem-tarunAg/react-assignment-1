import { useEffect, useState } from 'react';
import { DisplayButton } from './DisplayButton';

export const DispayComponent = () => {
  const [clickedCount, setCLickedCount] = useState(0);

  useEffect(() => {
    console.log(`Button clicked ${clickedCount} times`);
  }, [clickedCount]);

  const displayDetails = () => {
    setCLickedCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const buttonText = clickedCount % 2 === 0 ? 'Display Details' : 'Hide Details';
  return (
    <div className="text-center mt-6">
      <DisplayButton displayDetails={displayDetails} buttonText={buttonText} />

      <p className="text-lg mt-5 h-12 text-white">
        {clickedCount % 2 !== 0 &&
          'Hi! Tarun this side. I am learning react and in this assignment I am trying to diplay this paragraph on toggling of the above button.'}
      </p>
    </div>
  );
};
