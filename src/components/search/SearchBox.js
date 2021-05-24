import React from 'react';
import {Form,Input} from 'reactstrap';


const SearchBox = props => {
    
    return (
        <div className="container mt-2 mb-5">
           <Form>
                <div className="row">
                    <div className="col-6 m-auto">
                        <Input type="text" placeholder="Search here" onChange={props.passInput}/>
                    </div>
                </div>
           </Form>
        </div>
    );

}


export default SearchBox;