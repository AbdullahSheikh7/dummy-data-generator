import express from "express";
import mongoose from "mongoose";
import Employee from "./models/Employee.js";
import randomEmployeeData from "./index.js";

await mongoose.connect("mongodb://localhost:27017/company");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { title : "Dummy Data Generator" });
});

app.get("/generate", async (req, res) => {
    await Employee.deleteMany({ });

    for (let i = 0; i < 10; i++) {
        let dummyEmployee = randomEmployeeData();

        await Employee.create({
            name: dummyEmployee.name,
            salary: dummyEmployee.salary,
            language: dummyEmployee.language,
            city: dummyEmployee.city,
            isManager: dummyEmployee.isManager
        });
    }

    return res.send("Done");
});

app.listen(port, () => {
    console.log(`App listening on: http://127.0.0.1:${ port }`);
});
