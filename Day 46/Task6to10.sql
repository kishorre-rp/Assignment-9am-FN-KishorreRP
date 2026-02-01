-- 6.Task

SELECT 
    d.name as department,
    ROUND(AVG(e.salary), 2) as avg_salary,
    COUNT(*) as emp_count
FROM departments d
JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.name
ORDER BY avg_salary DESC;

-- 7.task


SELECT full_name, salary
FROM employees 
ORDER BY salary DESC 
LIMIT 3;

-- 8.Task


SELECT full_name, salary, status
FROM employees 
WHERE status = 'Inactive';

-- 9.Task

SELECT 
    MIN(salary) as lowest_salary,
    MAX(salary) as highest_salary,
    ROUND(AVG(salary), 2) as average_salary,
    COUNT(*) as total_count
FROM employees;

-- 10.Task


SELECT 
    d.name as department,
    COUNT(e.id) as emp_count,
    ROUND(AVG(e.salary), 0) as avg_salary,
    MIN(e.salary) as min_salary,
    MAX(e.salary) as max_salary,
    SUM(e.salary) as total_payroll
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id
GROUP BY d.id, d.name
HAVING emp_count > 0
ORDER BY total_payroll DESC;

