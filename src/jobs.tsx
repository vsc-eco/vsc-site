
import React from 'react'
import { useEffect } from "react";

const Jobs = () => {
    useEffect(() => {
        window.location.replace('https://airtable.com/shr6KT31gj21y6VZG');
    
        return () => {};
      }, []);

      return (<div>Redirecting</div>)
}
export default Jobs