-- 6.Task

SELECT full_name, salary, dept_id
FROM (
    SELECT full_name, salary, dept_id,
           ROW_NUMBER() OVER(PARTITION BY dept_id ORDER BY salary DESC) as rn
    FROM employees
) ranked
WHERE rn <= 2;


-- 7.Task


SELECT full_name, salary,
       SUM(salary) OVER(ORDER BY salary ROWS UNBOUNDED PRECEDING) as running_total
FROM employees
ORDER BY salary;


-- 8.Task

SELECT full_name, salary, dept_id,
       RANK() OVER(PARTITION BY dept_id ORDER BY salary DESC) as dept_rank,
       DENSE_RANK() OVER(PARTITION BY dept_id ORDER BY salary DESC) as denserank
FROM employees;

-- 9.Task

-- Subquery version
SELECT full_name, salary FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

-- CTE version 
WITH company_avg AS (
    SELECT AVG(salary) as avg_salary FROM employees
)
SELECT e.full_name, salary 
FROM employees e, company_avg c 
WHERE e.salary > c.avg_salary;


-- 10.Task

-- "Top 2 per department"
SELECT full_name, salary, dept_id
FROM (
    SELECT *, ROW_NUMBER() OVER(PARTITION BY dept_id ORDER BY salary DESC) rn
    FROM employees
) t 
WHERE rn <= 2;




