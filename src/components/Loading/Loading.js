import React from 'react';
import { DiamonLoading } from 'react-loadingg';




const Loading = () => {
    
    return (
           <div className="container">
              <div className="row m-5">
           <div className="col-3 m-auto">
            <p className="text-light">Loading....</p>
              <DiamonLoading  className="mt-5"/>    
                </div>
              </div>
         </div>
    );

}



export default Loading