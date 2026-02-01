
SELECT 'Top Performers' as category, COUNT(*) as count
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);


SELECT 'Underperformers' as category, COUNT(*) as count  
FROM employees 
WHERE salary < (SELECT AVG(salary) FROM employees);



-- Depts with higher avg than company avg
SELECT d.name, ROUND(dept_avg.avg_salary, 0) as dept_avg
FROM departments d
JOIN (
    SELECT dept_id, AVG(salary) as avg_salary
    FROM employees 
    GROUP BY dept_id
    HAVING avg_salary > (SELECT AVG(salary) FROM employees)
) dept_avg ON d.id = dept_avg.dept_id;


SELECT 
    'Company Stats' as metric,
    (SELECT COUNT(*) FROM employees) as total_employees,
    (SELECT ROUND(AVG(salary), 0) FROM employees) as avg_salary,
    (SELECT MAX(salary) FROM employees) as highest_salary,
    (SELECT COUNT(*) FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)) as above_average;