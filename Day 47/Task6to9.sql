use company_hr;

-- Task 6
SELECT 
    e.id,
    e.full_name,
    e.salary,
    e.phone,
    d.name as department
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id
ORDER BY e.salary DESC;


-- Task 7

SELECT d.name as empty_dept
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id
WHERE e.id IS NULL;




-- Task 8


CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT
);

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    location VARCHAR(50)
);



-- Task 9



CREATE TABLE employeees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    dept_id INT,
    manager_id INT NULL,
    FOREIGN KEY (dept_id) REFERENCES departments(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);

CREATE TABLE departmeents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    location VARCHAR(50),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);
