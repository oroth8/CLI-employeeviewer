-- department seeds
INSERT INTO department (id, name)
VALUES (10, "front-end");
INSERT INTO department (id, name)
VALUES (20, "back-end" );
-- role seeds
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "developer", 60000, 10);
INSERT INTO role (id, title, salary, department_id)
VALUES (2, "manager", 100000, 10);
INSERT INTO role (id, title, salary, department_id)
VALUES (3, "engineer", 75000, 20);
-- employee seeds
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (111, "owen", "roth", 1, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (222, "john", "smith", 2, 0);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (333, "jane", "doe", 3, 0);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (444, "will", "smith", 1, 5);