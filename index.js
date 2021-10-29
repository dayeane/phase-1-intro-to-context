// Your code here
function createEmployeeRecord(employee){
    const employObj = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents:[],
        timeOutEvents: [], 
    
    }
    return employObj


}
    
function createEmployeeRecords (employees) {
    let arrayContainer  = []


    for (let i = 0; i < employees.length; i++){
      arrayContainer.push(createEmployeeRecord(employees[i]))
        
    }

    return arrayContainer 
}

function createTimeInEvent(employeeRec, dateTime) {
    const timeEvent = {
        type: "TimeIn",
        hour: parseInt(dateTime.split(" ")[1]),
        date: dateTime.split(" ")[0],
    }

    employeeRec.timeInEvents.push(timeEvent)
    return employeeRec
}

function createTimeOutEvent(employeeRec, dateTime) {
    const timeEventOut = {
        type: "TimeOut",
        hour: parseInt(dateTime.split(" ")[1]),
        date: dateTime.split(" ")[0],
    }

    employeeRec.timeOutEvents.push(timeEventOut)
    return employeeRec
}

function hoursWorkedOnDate(employeeRec, dateTime) {
            
        let varIn = employeeRec.timeInEvents.find((timeEvent) => timeEvent.date === dateTime)

        let varOut = employeeRec.timeOutEvents.find((timeEventOut) => timeEventOut.date === dateTime)

           return (varOut.hour - varIn.hour)/100

}

function wagesEarnedOnDate(employeeRec, dateTime) {
            
    return hoursWorkedOnDate(employeeRec,dateTime)*employeeRec.payPerHour

}

function allWagesFor(employeeRec) {

    let addAllWages = 0 
    employeeRec.timeInEvents.forEach((timeEvent) =>{
        addAllWages += wagesEarnedOnDate(employeeRec,timeEvent.date)    
    })
    
   return addAllWages

}