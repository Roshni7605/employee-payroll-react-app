import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            employee: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row"> 
                            <label> Employee First Name: {this.state.employee.firstName} </label>
                            <label> Employee Last Name: {this.state.employee.lastName} </label>
                            <label> Employee Email Id: {this.state.employee.emailId} </label>
                            <label> Employee Mobile Number: {this.state.employee.phoneNo} </label>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ViewEmployeeComponent;