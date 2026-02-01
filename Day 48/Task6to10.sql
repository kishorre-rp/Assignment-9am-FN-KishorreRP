-- 6.Task

SELECT full_name, salary
FROM employees 
WHERE salary = (SELECT MIN(salary) FROM employees);


-- 7.Task

SELECT full_name, salary
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 8.Task

SELECT name FROM departments 
WHERE id IN (
    SELECT dept_id 
    FROM employees 
    GROUP BY dept_id 
    HAVING COUNT(*) > 5
);

-- 9.Task

-- Employees earning MORE than their DEPT average
SELECT e1.full_name, e1.salary, d.name
FROM employees e1
JOIN departments d ON e1.dept_id = d.id
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2 
    WHERE e2.dept_id = e1.dept_id
);

-- 10.Task


SELECT full_name, salary
FROM employees 
WHERE salary = (
    SELECT MAX(salary)
    FROM employees 
    WHERE salary < (SELECT MAX(salary) FROM employees)
);
