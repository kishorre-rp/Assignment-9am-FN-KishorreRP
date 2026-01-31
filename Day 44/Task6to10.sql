create database student_db;
use student_db;



create table student(id int primary key auto_increment, name varchar(30), course_id int);
create table course(course_id int , course_name varchar(20), fees int);

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    course_fee DECIMAL(8,2) CHECK (course_fee > 0),
    FOREIGN KEY (course_id) REFERENCES students(student_id) 
        );
INSERT INTO students (name, email) VALUES
('Shanthosh', 'shanth@example.com'),
('Kishorre', 'kishorre@example.com'),
('Anbuarasu', 'anbu@example.com');

INSERT INTO courses (course_name, course_fee) VALUES
('React Fullstack', 1499.00),
('Database Mastery', 999.00),
('Advanced JavaScript', 1999.00);

select* from courses;
