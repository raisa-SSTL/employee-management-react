import React, { createContext, useContext, useState } from "react";
import img6 from "../assets/images/big/img6.jpg";
import img7 from "../assets/images/big/img7.jpg";
import u7 from "../assets/images/users/u7.jpg";
import u4 from "../assets/images/users/u4.jpg";

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
    email: "james.wilson@example.com",
    address: "New Delhi",
    img: img6,
  },
  {
    id: "2",
    name: "Andrew McDownland",
    department: "Project Manager",
    phone: "(646) 555-1749",
    email: "samantha.brown@testmail.com",
    address: "London",
    img: img7,
  },
  {
    id: "3",
    name: "Christopher Jamil",
    department: "Project Manager",
    phone: "(415) 555-6210",
    email: "alexander.lee@demoemail.com",
    address: "London",
    img: u7,
  },
  {
    id: "4",
    name: "Nirav Joshi",
    department: "Frontend Engineer",
    phone: "(818) 555-0937",
    email: "emma.johnson@mockmail.com",
    address: "California",
    img: u4,
  },
];

// Provider Component
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(initialEmployees);

  // Function to delete employee by ID
  const deleteEmployee = (empId) => {
    setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== empId));
  };

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
