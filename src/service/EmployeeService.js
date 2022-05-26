import axios from 'axios';

const baseUrl = "http://localhost:8081/api/v1";

class EmployeeService {

    getEmployees() {
        return axios.get(baseUrl+"/employees");
    }

    createEmployee(employee) {
        return axios.post(baseUrl+"/addemployee", employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(baseUrl+"/employee/"+employeeId);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(baseUrl+"/updateemployee/"+employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(baseUrl+"/deleteemployee/"+employeeId);
    }

}

export default new EmployeeService()