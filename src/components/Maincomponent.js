import React, { Component } from 'react';
import Header from './header/Header';
import SearchBox from './search/SearchBox';
import Cardlist from './card/Cardlist'
import { CardColumns,Modal,ModalBody,ModalFooter,Button } from 'reactstrap';
import Scroll from './Scroll/Scroll';
import Loading from './Loading/Loading';
import Particles from 'react-particles-js';
import CardDetail from './card/CardDetail';
import {particlesJS } from './Particle/Particle';

class  Maincomponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            RobotList: [],
            RobotSearchName: '',
            SelectRobot: null,
            OpenModal :false
        }
    }


    // when component will update state will be change 

    componentDidMount() {
        
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(res => this.setState({ RobotList: res }));     

    }


    // SearchBox component input action

    handleInputchange = event => {

        this.setState({
            RobotSearchName: event.target.value
        });
    }



    // Robot Card select
    CardSelect = (data) => {
        this.setState({
            SelectRobot: data,
            OpenModal:!this.state.OpenModal
        });
    }


    // Modal Action
    ActionModal = () => {
        this.setState({
            OpenModal: !this.state.OpenModal
        });
    }



    render() {

        // Filter name and match with input 
        const RobotFilter = this.state.RobotList.filter(NameFilter => {
            return NameFilter.name.toLowerCase().includes(this.state.RobotSearchName.toLowerCase());
        });


        let UserSelectRobot = null;
        if (this.state.SelectRobot!=null) {
            UserSelectRobot = <CardDetail passDetail={this.state.SelectRobot}/>
        }


        return !RobotFilter.length ?
                <Loading/>
            :(
                <div className="container">
                    <Particles className="particleDisplay" params={{particlesJS}}/>
                 <Header />
                <SearchBox passInput={this.handleInputchange}/>
                <Scroll>
                    <CardColumns>
                            <Cardlist passItem={RobotFilter} passAction={this.CardSelect} />
                            <Modal isOpen={this.state.OpenModal}>
                                <ModalBody>
                                   {UserSelectRobot}
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                     outline color="danger" size="sm"  
                                    onClick={this.ActionModal}>Close</Button>
                                </ModalFooter>
                            </Modal>
                    </CardColumns>
                </Scroll>
            </div>
         )
    
    }
}


export default Maincomponent;