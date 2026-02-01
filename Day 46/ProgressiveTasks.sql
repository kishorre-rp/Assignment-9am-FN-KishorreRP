
SELECT 
    'Company Overview' as report,
    COUNT(*) as total_employees,
    ROUND(AVG(salary), 0) as avg_salary,
    SUM(salary) as monthly_payroll
FROM employees;

SELECT 
    d.name,
    COUNT(e.id) as team_size,
    ROUND(AVG(e.salary), 0) as avg_salary,
    ROUND(SUM(e.salary), 0) as dept_budget
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id
GROUP BY d.id
ORDER BY team_size DESC;


SELECT full_name, salary, dept_id
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

