CREATE DATABASE company_hr;
USE company_hr;


CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);


CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    salary INT,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)  
);
CREATE TABLE payroll (
    id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT,
    month VARCHAR(20),
    amount INT,
    FOREIGN KEY (emp_id) REFERENCES employees(id) 
   
);
CREATE TABLE attendance (
    id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT,
    date DATE,
    status VARCHAR(20),
FOREIGN KEY (emp_id) REFERENCES employees(id)
  
);

INSERT INTO departments VALUES (NULL, 'Development');
INSERT INTO departments VALUES (NULL, 'HR');
INSERT INTO departments VALUES (NULL, 'Sales');

select * from departments;

INSERT INTO employees VALUES 
(NULL, 'Shanthosh', 50000, 1),
(NULL, 'Kishorre', 55000, 1),
(NULL, 'Jeeva', 40000, 3);

select * from employees;

INSERT INTO payroll VALUES 
(NULL, 1, 'Jan-2026', 50000),
(NULL, 2, 'Jan-2026', 55000),
(NULL, 3, '2026-01-31', 'Absent'); 


INSERT INTO attendance VALUES 
(NULL, 1, '2026-01-31', 'Present'),
(NULL, 2, '2026-01-31', 'Present'),
(NULL, 3, '2026-01-31', 'Absent');

