import React, { createContext, useContext, useState } from "react";

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
  },
  {
    id: "2",
    name: "Andrew McDownland",
    department: "Project Manager",
    phone: "(646) 555-1749",
    email: "samantha.brown@testmail.com",
    address: "London",
  },
  {
    id: "3",
    name: "Christopher Jamil",
    department: "Project Manager",
    phone: "(415) 555-6210",
    email: "alexander.lee@demoemail.com",
    address: "London",
  },
  {
    id: "4",
    name: "Nirav Joshi",
    department: "Frontend Engineer",
    phone: "(818) 555-0937",
    email: "emma.johnson@mockmail.com",
    address: "California",
  },
];

// Provider Component
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(initialEmployees);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
