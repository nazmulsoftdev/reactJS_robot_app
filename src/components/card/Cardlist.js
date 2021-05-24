import React from 'react';
import {Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
import '../../assets/Css/style.css';

const Cardlist = props => {
    
    return (
        props.passItem.map(item => { 
        
            return (
                <Card className="RobotCard text-center" key={item.id} onClick={()=>props.passAction(item)}>
                    <CardBody>
                        <CardImg
                            src={`https://robohash.org/${item.id}`}
                            alt={item.name}
                            width="150px"
                            height="150px"
                        />
                        <CardTitle className="mt-1 font-weight-bold">{item.name}</CardTitle>
                        <CardText>{item.email}</CardText>
                    </CardBody>
               </Card>
            )

        })
    );

}



export default Cardlist;