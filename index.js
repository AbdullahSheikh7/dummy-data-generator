const randomEmployeeData = () => {
    let names = ["Anas", "Taha", "Aneak", "Aarib", "Sufiyan", "Basit", "Afraz"];
    let salary = Math.floor((Math.random() * 499999) + 1);
    let languages = ["English", "Urdu", "Hindi"];
    let cities = ["Karachi", "Delhi", "New York", "London"];
    let isManager = [true, false];

    let output = {
        name: randomOutput(names),
        salary: salary,
        language: randomOutput(languages),
        city: randomOutput(cities),
        isManager: randomOutput(isManager)
    }

    return output;
}

const randomOutput = (arrayInput) => {
    return arrayInput[Math.floor(Math.random() * (arrayInput.length - 1))];
}

export default randomEmployeeData;
