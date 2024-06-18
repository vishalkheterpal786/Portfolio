import { FunctionComponent } from 'react';
import './withBorder.css';
import React from 'react';

const withBorder = (WrappedComponent) => {
  return (
    <div className='borderlayout'>
      <WrappedComponent />
    </div>
  );
};

export default withBorder;
