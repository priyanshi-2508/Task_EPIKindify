
import React, { Component } from 'react';
import ValetList from './ValetList';
// import { Redirect } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import '../css/HomePage.css';


export default class HomePage extends Component {
    state = {
        valetList: []
    }
    // deleteVehicle = (id) => {
    //     // current - rest of the task 
    //     let filteredList = this.state.valetList.filter(function (vehicle) { return vehicle.id !== id; })
    //     this.setState({
    //         valetList: filteredList
    //     });
    //     localStorage.setItem('vehicleList', JSON.stringify(filteredList))
    // }
    addVehicle = (obj) => {
        let tempArr = []
        var localList = JSON.parse(localStorage.getItem('vehicleList'))
        if (localStorage.getItem('vehicleList') != null) {
            tempArr = [...localList,
                obj]
        }
        else {
            tempArr = [obj]
        }
        console.log("aa", tempArr);
        tempArr != null && localStorage.setItem('vehicleList', JSON.stringify(tempArr))
        this.setState({
            valetList: tempArr
        })
    }

    // this.props.location.state

    onCheckIn = () => {
        console.log("Done");
        const { history } = this.props;
        console.log("H", history)
        if (history) history.push({
            pathname: '/CheckIn'

        });
    }
    componentDidMount() {
        console.log("lcalData", JSON.parse(localStorage.getItem('tempData')))
        JSON.parse(localStorage.getItem('tempData')) != null && this.addVehicle(JSON.parse(localStorage.getItem('tempData')));
        console.log("new", this.state.valetList)
        localStorage.removeItem('tempData')
        console.log("hiii")
    }
    componentWillMount() {
        this.state.valetList = JSON.parse(localStorage.getItem('vehicleList'))
    }


    render() {
        return (
            <div>
                {/* passing props to children component */}
                <div className="div">
                    <h2 className="heading">Valet Parking</h2>
                    <button className="signoutbtn"><i class="fa fa-signout">&#xf011;</i>SignOut</button>
                </div>
                <div className="div2">
                    <input className="search_bar" type="text" placeholder="search your vehicle number here" />
                    <button className="checkin" onClick={this.onCheckIn}><i class="fa fa-plus" aria-hidden="true"></i>CheckIn</button>
                </div>
                <hr></hr>
                <ValetList list={this.state.valetList}> </ValetList>
            </div>
        )
    }
}

