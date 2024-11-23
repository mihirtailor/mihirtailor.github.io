use student_database;

create table Student
(StudentID int,
FirstName varchar(25),
LastName varchar(25),
Address varchar(255),
GPA float,
City varchar(25));

insert into Student (StudentID, FirstName, LastName, GPA, City, Country, State, Email)
values(371068, "Mike", "Taylor", 7.8, "Bolton", "USA", "CA", "abc@email.com");

desc Student;

alter table student
drop column address;

alter table student
add (Country varchar(25), State varchar(25), Email varchar(25));

alter table Student
modify column StudentID int NOT NULL;

alter table Student
add primary key (StudentID);

create table Activity
(ActivityID int not null auto_increment,
name varchar(25) not null,
primary key(ActivityID));

desc Activity;

alter table Student
add a_id int;

alter table Student
add foreign key (a_id) references
Activity (ActivityID) on delete cascade;

insert into Activity (name)
values ("AYB"),
("The Art Corner"),
("ISLC");

select * from Activity;

select * from Student;

select Activity.name from Activity JOIN Student on Student.a_id=Activity.ActivityID where
Student.StudentID=371068;









