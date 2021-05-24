import React from 'react';
import {Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap';


const CardDetail = (props) => {
   
    return (
        <Card>
            <CardBody>
              <CardImg
                src={`https://robohash.org/${props.passDetail.id}`}
                  alt={props.passDetail.name}
                  width="150px"
                  height="150px"
                />           
                <CardTitle className="mt-1 font-weight-bold text-center">{props.passDetail.name}</CardTitle>
                <CardText className="text-center">{props.passDetail.email}</CardText>
                  <hr/>
                <CardText>{props.passDetail.body}</CardText>
            </CardBody>
        </Card>
    );

}



export default CardDetail;