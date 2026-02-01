-- 1. Task
ALTER TABLE employees 
ADD COLUMN status ENUM('Active', 'Inactive') DEFAULT 'Active';

-- 2.Task
INSERT INTO employees (full_name, salary, dept_id, phone, status) VALUES
('Ramesh K', 55000, 1, '9876543214', 'Active'),
('Anbu M', 48000, 2, '9876543215', 'Active'),
('Suresh P', 42000, 3, '9876543216', 'Active'),
('Lakshmi R', 52000, 1, '9876543217', 'Active'),
('Vijay T', 38000, 3, '9876543218', 'Inactive');

-- 3.Task
UPDATE employees 
SET salary = salary * 1.10 
WHERE dept_id = 1;
UPDATE employees 
SET salary = salary * 1.05 
WHERE dept_id = 3;


-- 4.Task
DELETE FROM employees 
WHERE status = 'Inactive';


-- 5.Task
ALTER TABLE employees 
MODIFY COLUMN salary DECIMAL(10,2);

Select * from employees;






