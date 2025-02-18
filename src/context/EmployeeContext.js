import React, { createContext, useContext, useState } from "react";
import img6 from "../assets/images/big/img6.jpg";
import img7 from "../assets/images/big/img7.jpg";
import u3 from "../assets/images/backgrounds/u3.jpg";
import u2 from "../assets/images/backgrounds/u2.jpg";

const EmployeeContext = createContext();

// Custom Hook to use the EmployeeContext
export const useEmployees = () => useContext(EmployeeContext);

// Employee Data
const initialEmployees = [
  {
    id: "1",
    name: "Sunil Joshi",
    department: "Web Designer",
    phone: "(305) 555-8293",
    email: "sunil.joshi@example.com",
    address: "New Delhi",
    img: img6,
  },
  {
    id: "2",
    name: "Andrew McDownland",
    department: "Project Manager",
    phone: "(646) 555-1749",
    email: "andrew.md@testmail.com",
    address: "London",
    img: img7,
  },
  {
    id: "3",
    name: "Christopher Jamil",
    department: "Project Manager",
    phone: "(415) 555-6210",
    email: "jamil1122@demoemail.com",
    address: "London",
    img: u3,
  },
  {
    id: "4",
    name: "Nirav Joshi",
    department: "Frontend Engineer",
    phone: "(818) 555-0937",
    email: "nirav.jo@mockmail.com",
    address: "California",
    img: u2,
  },
];

// Provider Component
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(initialEmployees);

  // delete employee method
  const deleteEmployee = (empId) => {
    setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== empId));
  };

  // add employee method
  const addEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, { ...newEmployee, id: Date.now() }]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, deleteEmployee, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
