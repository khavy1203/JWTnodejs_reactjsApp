


CREATE TABLE IF NOT EXISTS "Group"(
    "id" int(11) NOT NULL AUTO_INCREMENT,
    "name" varchar(255) DEFAULT NULL,
    "description" varchar(255) DEFAULT NULL,
    "createdAt" datetime DEFAULT NULL,
    "updatedAt" datetime DEFAULT NULL,
    PRIMARY KEY("id")
);



INSERT INTO "Group"("id", "name", "description", "createdAt", "updatedAt") VALUES
    (1, 'Dev', 'developer', '2022-03-18 01:31:15', '2022-03-18 01:31:15'),
    (2, 'Leader', 'Leader', '2022-04-01 17:14:05', '2022-04-01 17:14:05'),
    (3, 'Customer', 'Customer', '2022-04-21 14:12:16', '2022-04-21 14:12:16'),
    (4, 'Guess', 'Only view', '2022-04-21 14:12:56', '2022-04-21 14:12:56');



CREATE TABLE IF NOT EXISTS "Group_Role"(
        "id" int(11) NOT NULL AUTO_INCREMENT,
        "groupId" int(11) DEFAULT NULL,
        "roleId" int(11) DEFAULT NULL,
        "createdAt" datetime DEFAULT NULL,
        "updatedAt" datetime DEFAULT NULL,
        PRIMARY KEY("id")
    );



INSERT INTO "Group_Role"("id", "groupId", "roleId", "createdAt", "updatedAt") VALUES
    (1, 2, 1, '2022-03-18 01:36:17', '2022-03-18 01:36:17'),
    (2, 2, 2, '2022-03-18 01:36:17', '2022-03-18 01:36:17'),
    (3, 2, 3, '2022-04-23 09:19:39', '2022-04-23 09:19:39'),
    (4, 2, 4, '2022-04-23 09:19:47', '2022-04-23 09:19:47'),
    (5, 2, 5, '2022-04-23 09:19:53', '2022-04-23 09:19:53'),
    (8, 4, 1, '2022-04-23 11:45:11', '2022-04-23 11:45:11'),
    (9, 4, 5, '2022-04-23 11:45:11', '2022-04-23 11:45:11'),
    (10, 1, 1, '2022-04-30 08:26:18', '2022-04-30 08:26:18'),
    (11, 1, 2, '2022-04-30 08:26:18', '2022-04-30 08:26:18'),
    (14, 1, 5, '2022-04-30 08:26:18', '2022-04-30 08:26:18'),
    (15, 1, 3, '2022-04-30 08:26:18', '2022-04-30 08:26:18'),
    (16, 3, 1, '2022-04-30 08:29:50', '2022-04-30 08:29:50'),
    (17, 3, 3, '2022-04-30 08:29:50', '2022-04-30 08:29:50'),
    (18, 3, 1, '2022-04-30 08:29:50', '2022-04-30 08:29:50'),
    (19, 3, 3, '2022-04-30 08:29:50', '2022-04-30 08:29:50'),
    (20, 3, 1, '2022-04-30 08:29:50', '2022-04-30 08:29:50'),
    (21, 3, 3, '2022-04-30 08:29:50', '2022-04-30 08:29:50'),
    (22, 3, 5, '2022-04-30 08:29:50', '2022-04-30 08:29:50');




CREATE TABLE IF NOT EXISTS "Project"(
        "id" int(11) NOT NULL AUTO_INCREMENT,
        "userName" varchar(255) DEFAULT NULL,
        "description" varchar(255) DEFAULT NULL,
        "startDate" varchar(255) DEFAULT NULL,
        "customerId" int(11) DEFAULT NULL,
        "createdAt" datetime DEFAULT NULL,
        "updatedAt" datetime DEFAULT NULL,
        PRIMARY KEY("id")
    );



CREATE TABLE IF NOT EXISTS "project_user"(
        "id" int(11) NOT NULL AUTO_INCREMENT,
        "projectId" int(11) DEFAULT NULL,
        "userId" int(11) DEFAULT NULL,
        "createdAt" datetime DEFAULT NULL,
        "updatedAt" datetime DEFAULT NULL,
        PRIMARY KEY("id")
    );



DROP TABLE IF EXISTS "role";
CREATE TABLE IF NOT EXISTS "role"(
        "id" int(11) NOT NULL AUTO_INCREMENT,
        "url" varchar(255) DEFAULT NULL,
        "description" varchar(255) DEFAULT NULL,
        "createdAt" datetime DEFAULT NULL,
        "updatedAt" datetime DEFAULT NULL,
        PRIMARY KEY("id")
    );



INSERT INTO "role"("id", "url", "description", "createdAt", "updatedAt") VALUES
    (1, '/User/read', 'show all User', '2022-03-18 01:32:47', '2022-03-18 01:32:47'),
    (2, '/User/create', 'User can edit', '2022-03-18 01:32:47', '2022-03-18 01:32:47'),
    (3, '/User/update', 'User can delete', '2022-03-18 01:35:04', '2022-03-18 01:35:04'),
    (4, '/User/delete', 'User delete', '2022-04-22 15:11:54', '2022-04-22 15:11:54'),
    (5, '/Group/read', 'get Group', '2022-04-22 15:11:54', '2022-04-22 15:11:54');




CREATE TABLE IF NOT EXISTS "SequelizeMeta"(
        "name" varchar(255) COLLATE utf8_unicode_ci NOT NULL,
        PRIMARY KEY("name"),
        UNIQUE KEY "name"("name")
    );



INSERT INTO "SequelizeMeta"("name") VALUES
    ('20220302010135-create-User.js'),
    ('migrate-group-role.js'),
    ('migrate-group.js'),
    ('migrate-project-User.js'),
    ('migrate-project.js'),
    ('migrate-role.js');



CREATE TABLE IF NOT EXISTS "User"(
        "id" int(11) NOT NULL AUTO_INCREMENT,
        "userEmail" varchar(255) DEFAULT NULL,
        "userName" varchar(255) DEFAULT NULL,
        "userPassword" varchar(255) DEFAULT NULL,
        "address" varchar(255) DEFAULT NULL,
        "sex" varchar(255) DEFAULT NULL,
        "phone" varchar(255) DEFAULT NULL,
        "groupId" int(11) DEFAULT NULL,
        "createdAt" datetime DEFAULT NULL,
        "updatedAt" datetime DEFAULT NULL,
        PRIMARY KEY("id")
    );


INSERT INTO "User"("id", "userEmail", "userName", "userPassword", "address", "sex", "phone", "groupId", "createdAt", "updatedAt") VALUES
    (76, 'dev2@gmail.com3', 'kv222', '$2a$10$QaPFFQ0hLdOHiPJzlO9FJ.qlcwt6XvRbtAWJeKCJE1bSpRMv2t2e2', '', 'Male', '+849872980417', 1, '2022-04-19 15:07:54', '2022-04-30 08:32:17'),
    (84, 'guess1@gmail.com', 'kv533', '$2a$10$aOJu2LnzeOXrEthWjO3syOvzixBH43Ei6Wj6YgwtGokBKUnVAdm4e', 'Phong An - Cát Trinh - Phù Cát', 'Male', '+849879802417', 4, '2022-04-20 15:27:54', '2022-04-21 15:02:33'),
    (85, 'dev1@gmail.com', '1', '$2a$10$isBmeLqNPoMyUqFXaIel2OHzFMezis2kbfjQesnyq8qaI79JQ6KUO', '', 'Male', '+849879804317', 1, '2022-04-21 03:01:56', '2022-04-21 15:05:16'),
    (86, 'customer@gmail.com', 'kv', '$2a$10$isBmeLqNPoMyUqFXaIel2O4oZ/E9Q20BdUdrD6/MR9RNn4MaTj7DW', '', 'Male', '+84987980417', 3, '2022-04-21 03:04:34', '2022-04-30 08:31:54'),
    (87, 'admin@gmail.com', '1', '$2a$10$HNamJ3CgvQvhw6LaW8DYleCW2mhV5YIhJPhm7q//G6FajoKFI76oa', '44', 'Male', '+849879804173', 2, '2022-04-21 15:04:42', '2022-04-30 08:32:09'),
    (92, 'guess@gmail.com', 'kv', '$2a$10$sYEQ3GE/lNWIjqMUZ.DXne1WQcCNUyagRoQ/Od5a00rieOQrdKQ9W', NULL, NULL, '+84987980417-', 4, '2022-04-29 14:32:10', '2022-04-29 14:32:10');
