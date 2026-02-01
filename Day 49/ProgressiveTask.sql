WITH salary_ranks AS (
    SELECT full_name, salary, dept_id,
           ROW_NUMBER() OVER(ORDER BY salary DESC) as company_rank,
           RANK() OVER(PARTITION BY dept_id ORDER BY salary DESC) as dept_rank
    FROM employees
)
SELECT * FROM salary_ranks WHERE company_rank <= 5;


-- Department Analytics:

-- Dept performance vs company avg
WITH dept_stats AS (
    SELECT dept_id,
           AVG(salary) as dept_avg,
           COUNT(*) as emp_count,
           SUM(salary) as total_salary
    FROM employees 
    GROUP BY dept_id
)
SELECT d.name, ds.*
FROM departments d
JOIN dept_stats ds ON d.id = ds.dept_id
WHERE ds.dept_avg > (SELECT AVG(salary) FROM employees);



-- Performance Reports


SELECT full_name, salary,
       SUM(salary) OVER(ORDER BY salary ROWS UNBOUNDED PRECEDING) as cumulative_salary,
       AVG(salary) OVER(PARTITION BY dept_id) as dept_avg
FROM employees
ORDER BY salary DESC;



-- Management Dashboards

WITH performance_metrics AS (
    SELECT dept_id,
           COUNT(CASE WHEN salary > 50000 THEN 1 END) as high_earners,
           COUNT(*) as total,
           ROUND(AVG(salary), 0) as avg_salary
    FROM employees
    GROUP BY dept_id
)
SELECT 
    d.name,
    pm.high_earners,
    pm.total
FROM departments d
JOIN performance_metrics pm ON d.id = pm.dept_id;