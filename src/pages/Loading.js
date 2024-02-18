import React from 'react';

const Loading = (props) => {
  return (
    <div className={`container ${props.class}`}>

        <div id="loader-wrapper" >
        <div id="loader"></div>

        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>

    </div>
    </div>

  );
};

export default Loading;
