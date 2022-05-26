import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //Step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNo: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler(event) {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler(event) {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler(event) {
        this.setState({emailId: event.target.value});
    }

    changeMobileNumberHandler(event) {
        this.setState({phoneNo: event.target.value});
    }

    // Step 3
    componentDidMount() {

        // Step 4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                           lastName: employee.lastName,
                           emailId: employee.emailId,
                           phoneNo: employee.phoneNo});
            });
        }  
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        emailId: this.state.emailId,
                        phoneNo: this.state.phoneNo};
        console.log('employee => ' + JSON.stringify(employee));
        // Step 5
        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees'); 
            })
        } else {
            EmployeeService.updateEmployee(this.state.id, employee).then(res => {
                this.props.history.push("/employees");
            })
        }
    }

    cancel() {
        this.props.history.push("/employees");
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    submitButton() {
        if (this.state.id === '_add') {
            return <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
        } else {
            return <button className="btn btn-success" onClick={this.saveEmployee}>Update</button>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id: </label>
                                        <input placeholder="email Id" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number: </label>
                                        <input placeholder="Mobile Number" name="phoneNo" className="form-control"
                                            value={this.state.phoneNo} onChange={this.changeMobileNumberHandler} />
                                    </div>
                                    {
                                        this.submitButton()
                                    }
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;