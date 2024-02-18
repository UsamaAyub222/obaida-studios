import React, { useState, useEffect } from 'react';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading time with a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // set the timeout to a desired value
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          {/* your content here */}
        </div>
      )}
    </div>
  );
};

export default LoadingPage;