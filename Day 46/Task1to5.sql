-- 1.Task

SELECT full_name FROM employees;

-- 2.Task

SELECT full_name, salary 
FROM employees 
WHERE salary > 40000;


-- 3.Task

SELECT DISTINCT d.name 
FROM departments d 
JOIN employees e ON d.id = e.dept_id;

-- 4.Task

SELECT full_name, salary 
FROM employees 
ORDER BY salary DESC;

-- 5.Task

SELECT COUNT(*) as total_employees 
FROM employees;








