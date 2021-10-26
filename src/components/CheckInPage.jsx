import React, { Component } from 'react';
import "../css/CheckInAndCheckOut.css";

export default class CheckInPage extends Component {
    state = {
        vnum: "",
        vtype: "",
        vmodel: "",
        vphn: "",
        vcus: ""
    }


    handleCurrDetail = (e) => {
        let classname = e.target.className;
        let value = e.target.value;

        if (classname == "vnum") {
            this.setState({
                vnum: value
            })
        } else if (classname == "vtype") {
            this.setState({
                vtype: value
            })
        } else if (classname == "vmodel") {
            this.setState({
                vmodel: value
            })
        } else if (classname == "vphn") {
            this.setState({
                vphn: value
            })
        } else if (classname == "vcus") {
            this.setState({
                vcus: value
            })
        }
    }


    handleChange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value,

        });

    }

    CheckInCompleted = () => {
        let obj = {
            id: Date.now(),
            vnum: this.state.vnum,
            vtype: this.state.vtype,
            vmodel: this.state.vmodel,
            vphn: this.state.vphn,
            vcus: this.state.vcus
        }
        console.log("CheckIn Done");
        // console.log(obj);
        localStorage.setItem('tempData', JSON.stringify(obj));

        const { history } = this.props;

        if (history) history.push({
            pathname: '/'

        });


        this.setState({
            vnum: "",
            vtype: "",
            vmodel: "",
            vphn: "",
            vcus: ""
        })

        // <Redirect to="/CheckIn" />

    }

    render() {
        return (
            <div className="checkin-container">
                <h2>Vechile Check-in</h2>
                <div className="row1">
                    <h4>Vehicle Number</h4>
                    <h4>Vehicle Type</h4>
                    <h4>Vehicle Model</h4>

                </div>

                <div className="row1-input">
                    <input type="text" className="vnum" value={this.state.vnum}
                        onChange={this.handleCurrDetail} />
                    <select id="dropdown" className="vtype" onChange={this.handleCurrDetail}>
                        <option>Select</option>
                        <option value="2-wheeler">2-wheeler</option>
                        <option value="4-wheeler">4-wheeler</option>
                    </select>
                    <input type="text" className="vmodel" value={this.state.vmodel}
                        onChange={this.handleCurrDetail} />
                </div>
                <div className="row2">
                    <h4>Phone Number</h4>
                    <h4>Customer Name</h4>
                </div>

                <div className="row2-input">
                    <input type="number" className="vphn" value={this.state.vphn}
                        onChange={this.handleCurrDetail} />
                    <input type="text" className="vcus" value={this.state.cus}
                        onChange={this.handleCurrDetail} />

                </div>

                <div className="submit">
                    <button onClick={this.CheckInCompleted} >Check In</button>
                </div>
            </div>
        )
    }
}





