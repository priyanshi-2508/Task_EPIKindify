import React, { Component } from 'react';
// import { hashHistory } from 'react-router';
import { Link } from 'react-router-dom';
export default class ValetList extends Component {

    onCheckOut = () => {
        console.log("CheckOut Done");
        // const { history } = this.props;
        // console.log("history", history)
        // hashHistory.push('/');
        // if (history) history.push({
        //     pathname: '/CheckOut'

        // });


        // <Redirect to="/CheckIn" />

    }


    render() {

        const tdStyle = {
            textAlign: "left",
            padding: "8px"
        }

        const checkout_btn_style = {
            fontStyle: "italic",
            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            backgroundColor: "#ffb6c1",
            fontSize: "20px",
            color: "#722f37",
            height: "30px"
        }

        return (
            <div className="task-list">
                <ul>
                    <table style={{ borderCollapse: "collapse", width: "100%" }}>
                        <tr>
                            <th style={tdStyle}>Vechile No</th>
                            <th style={tdStyle}>Vechile Model</th>
                            <th style={tdStyle}>Vechile Type</th>
                            <th style={tdStyle}>Phone</th>
                            <th style={tdStyle}></th>
                        </tr>
                        {this.props.list.map((currVehicle) => {
                            console.log("data", currVehicle)
                            return (
                                // <>
                                // </>
                                <tr>
                                    <td style={tdStyle}>{currVehicle.vnum}</td>
                                    <td style={tdStyle}>{currVehicle.vmodel}</td>
                                    <td style={tdStyle}>{currVehicle.vtype}</td>
                                    <td style={tdStyle}>{currVehicle.vphn}</td>
                                    <td style={tdStyle}>
                                        <Link to={{
                                            pathname: '/CheckOut',
                                            state: {
                                                data: currVehicle
                                            }
                                        }}><button style={checkout_btn_style}><i class="fa fa-minus" aria-hidden="true"></i>CheckOut</button></Link></td>
                                </tr>

                            )
                        })}
                    </table>
                </ul>
            </div >

        )
    }
}