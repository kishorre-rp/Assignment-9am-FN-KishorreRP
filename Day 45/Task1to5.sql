use company_hr;

ALTER TABLE employees 
ADD COLUMN phone VARCHAR(15);

ALTER TABLE employees 
CHANGE COLUMN name full_name VARCHAR(50);

INSERT INTO employees (full_name, salary, dept_id, phone) 
VALUES ('Jeeva', 45000, 3, '9876543213');

UPDATE employees 
SET salary = 60000 
WHERE id = 1;  

DELETE FROM employees WHERE id = 4; 

select * from employees;





