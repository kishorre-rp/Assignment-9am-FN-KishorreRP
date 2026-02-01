
SELECT * FROM employees;


ALTER TABLE employees ADD COLUMN email VARCHAR(100) UNIQUE;

delete from employees where  id = 18;
UPDATE employees SET email = CONCAT(LOWER(full_name), '@company.com')
WHERE email IS NULL;



SELECT e.full_name, e.salary, e.status,e.phone,e.email, d.name as department
FROM employees e
JOIN departments d ON e.dept_id = d.id
WHERE e.status = 'Active'
ORDER BY e.salary DESC;
