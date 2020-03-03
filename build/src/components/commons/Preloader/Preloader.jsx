import React from 'react';
import spinner from '../../../img/spinner.svg';

const Preloader = ({isLoading}) => {
    return (<div>{isLoading ? <img src={spinner} alt="" /> : null}</div>);
}
export default Preloader;