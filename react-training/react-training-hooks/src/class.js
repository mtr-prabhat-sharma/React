class Employee {
  static totalLeaves = 20; //static property

  constructor(id, name, designation, salary, password) {
    this.Id = id;
    this.Name = name;
    this.Designation = designation;
    this.Salary = salary;
    this._password = password; // private property
    this._totalLeaves = Employee.totalLeaves;
  }

  static OnBoard(employeeName, employeeDesignation) {
    const employeeId = 12345; 
    console.log(`New Employee Onboarded:\nID: ${employeeId}\nName: ${employeeName}`);
    return new Employee(employeeId, employeeName, employeeDesignation, 0, '');
  }

  ApplyLeave(noOfDays) {
    if (noOfDays <= this._totalLeaves) {
      this._totalLeaves -= noOfDays;
      console.log(`Leave applied successfully!\nTotal Leaves applied: ${noOfDays}\nBalance Leaves Left: ${this._totalLeaves}`);
    } else {
      console.log(`Insufficient leaves!`);
    }
  }
}

const newEmployee = Employee.OnBoard('Prabhat Sharma', 'Software Engineer');
newEmployee.ApplyLeave(5);
