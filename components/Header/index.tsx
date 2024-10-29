/* eslint-disable react/display-name */
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps{}

export default  React.memo((props:IProps) => {

    // #region Props 
    const {}= props;
    // #endregion
    return (
        <div className='flex justify-between items-center px-4 p-4'>
            <h2>DashBoard</h2>
            <h2>Welcome Back, Mostafa</h2>
        </div>
    );
});

