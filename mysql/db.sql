

-- CREATE DATABASE IF NOT EXISTS aurax;
-- USE aurax;

-- -- Table structure for table `users`
-- DROP TABLE IF EXISTS `users`;

-- CREATE TABLE `users` (
--   `user_id` int NOT NULL AUTO_INCREMENT,
--   `email` varchar(255) NOT NULL,
--   `first_name` varchar(255) NOT NULL,
--   `last_name` varchar(255) NOT NULL,
--   PRIMARY KEY (`user_id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- -- Inserting data for users table
-- INSERT INTO `users` VALUES (3, 'marwane.assou@gmail.com', 'Marwane', 'Assou'), (4, 'hamza@gmail.com', 'Hamza', 'Assou');

-- -- Table structure for table `rooms`
-- DROP TABLE IF EXISTS `rooms`;

-- CREATE TABLE `rooms` (
--   `room_id` int NOT NULL AUTO_INCREMENT,
--   `user_id` int NOT NULL,
--   `channel` varchar(255) NOT NULL,
--   `description` text,
--   `category` varchar(255) NOT NULL,
--   PRIMARY KEY (`room_id`),
--   KEY `user_id` (`user_id`),
--   CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- -- Inserting data for rooms table
-- INSERT INTO `rooms` VALUES (1, 3, '3', 'dfdgfgfdjhgfd', 'Piano'), (2, 3, '3', 'lilo', 'Piano');

-- -- Creating function: getUserDetails
-- DELIMITER ;;
-- CREATE FUNCTION `getUserDetails`(email_input VARCHAR(255)) RETURNS varchar(255) CHARSET utf8mb4
--     DETERMINISTIC
-- BEGIN
--     DECLARE user_details VARCHAR(255);
    
--     IF EXISTS (SELECT 1 FROM users WHERE email = email_input) THEN
--         SELECT CONCAT(user_id, ',', email, ',', first_name, ',', last_name)
--         INTO user_details
--         FROM users
--         WHERE email = email_input
--         LIMIT 1;
--     ELSE
--         SET user_details = '0';
--     END IF;
    
--     RETURN user_details;
-- END ;;
-- DELIMITER ;

-- -- Creating function: UserExists
-- DELIMITER ;;
-- CREATE FUNCTION `UserExists`(p_email VARCHAR(255)) RETURNS int
--     READS SQL DATA
--     DETERMINISTIC
-- BEGIN
--     DECLARE user_count INT;

--     SELECT COUNT(*) INTO user_count
--     FROM users
--     WHERE email = p_email;

--     IF user_count > 0 THEN
--         RETURN 1;
--     ELSE
--         RETURN 0;
--     END IF;
-- END ;;
-- DELIMITER ;

-- -- Creating procedure: AddUser
-- DELIMITER ;;
-- CREATE PROCEDURE `AddUser`(
--     IN p_email VARCHAR(255),
--     IN p_first_name VARCHAR(255),
--     IN p_last_name VARCHAR(255)
-- )
-- BEGIN
--     INSERT INTO users (email, first_name, last_name)
--     VALUES (p_email, p_first_name, p_last_name);

--     SELECT LAST_INSERT_ID() AS user_id;
-- END ;;
-- DELIMITER ;

-- -- Creating procedure: add_room
-- DELIMITER ;;
-- CREATE PROCEDURE `add_room`(
--     IN p_user_id INT,
--     IN p_channel VARCHAR(255),
--     IN p_description TEXT,
--     IN p_category VARCHAR(255)
-- )
-- BEGIN
--     INSERT INTO rooms (user_id, channel, description, category)
--     VALUES (p_user_id, p_channel, p_description, p_category);
-- END ;;
-- DELIMITER ;

-- -- Creating procedure: getRooms
-- DELIMITER ;;
-- CREATE PROCEDURE `getRooms`(
--     IN p_user_id INT
-- )
-- BEGIN
--     SELECT room_id, user_id, channel, description, category
--     FROM rooms
--     WHERE user_id != p_user_id;
-- END ;;
-- DELIMITER ;


-- Create and use the database
CREATE DATABASE IF NOT EXISTS aurax;
USE aurax;

-- ===========================
-- Table: users
-- ===========================
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Sample users
INSERT INTO `users` (`user_id`, `email`, `first_name`, `last_name`) VALUES
(3, 'marwane.assou@gmail.com', 'Marwane', 'Assou'),
(4, 'hamza@gmail.com', 'Hamza', 'Assou');

-- ===========================
-- Table: rooms
-- ===========================
DROP TABLE IF EXISTS `rooms`;
CREATE TABLE `rooms` (
  `room_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `channel` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `category` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`room_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Sample rooms
INSERT INTO `rooms` VALUES 
(1, 3, '3', 'dfdgfgfdjhgfd', 'Piano'),
(2, 3, '3', 'lilo', 'Piano');

-- ===========================
-- Table: posts
-- ===========================
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `post_id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `description` VARCHAR(255),
  `path_image` VARCHAR(255),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ===========================
-- Table: comments
-- ===========================
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `comment_id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `post_id` INT NOT NULL,
  `description` VARCHAR(255),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ===========================
-- Function: getUserDetails
-- ===========================
DELIMITER $$
CREATE FUNCTION `getUserDetails`(email_input VARCHAR(255)) RETURNS VARCHAR(255) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE user_details VARCHAR(255);
    IF EXISTS (SELECT 1 FROM users WHERE email = email_input) THEN
        SELECT CONCAT(user_id, ',', email, ',', first_name, ',', last_name)
        INTO user_details
        FROM users
        WHERE email = email_input
        LIMIT 1;
    ELSE
        SET user_details = '0';
    END IF;
    RETURN user_details;
END$$
DELIMITER ;

-- ===========================
-- Function: UserExists
-- ===========================
DELIMITER $$
CREATE FUNCTION `UserExists`(p_email VARCHAR(255)) RETURNS INT
    READS SQL DATA
    DETERMINISTIC
BEGIN
    DECLARE user_count INT;
    SELECT COUNT(*) INTO user_count FROM users WHERE email = p_email;
    RETURN IF(user_count > 0, 1, 0);
END$$
DELIMITER ;

-- ===========================
-- Procedure: AddUser
-- ===========================
DELIMITER $$
CREATE PROCEDURE `AddUser`(
    IN p_email VARCHAR(255),
    IN p_first_name VARCHAR(255),
    IN p_last_name VARCHAR(255)
)
BEGIN
    INSERT INTO users (email, first_name, last_name)
    VALUES (p_email, p_first_name, p_last_name);
    SELECT LAST_INSERT_ID() AS user_id;
END$$
DELIMITER ;

-- ===========================
-- Procedure: add_room
-- ===========================
DELIMITER $$
CREATE PROCEDURE `add_room`(
    IN p_user_id INT,
    IN p_channel VARCHAR(255),
    IN p_description TEXT,
    IN p_category VARCHAR(255)
)
BEGIN
    INSERT INTO rooms (user_id, channel, description, category)
    VALUES (p_user_id, p_channel, p_description, p_category);
END$$
DELIMITER ;

-- ===========================
-- Procedure: getRooms
-- ===========================
DELIMITER $$
CREATE PROCEDURE `getRooms`(
    IN p_user_id INT
)
BEGIN
    SELECT room_id, user_id, channel, description, category
    FROM rooms
END$$
DELIMITER ;

-- ===========================
-- Procedure: add_post
-- ===========================
DELIMITER $$
CREATE PROCEDURE `add_post` (
    IN p_user_id INT,
    IN p_description VARCHAR(255),
    IN p_path_image VARCHAR(255)
)
BEGIN
    INSERT INTO posts (user_id, description, path_image)
    VALUES (p_user_id, p_description, p_path_image);
END$$
DELIMITER ;

-- ===========================
-- Procedure: get_posts
-- ===========================
DELIMITER $$
CREATE PROCEDURE `get_posts`()
BEGIN
    SELECT 
        posts.post_id,
        users.first_name,
        users.last_name,
        posts.description,
        posts.path_image,
        posts.created_at,
        users.user_id
    FROM 
        posts
    INNER JOIN 
        users ON posts.user_id = users.user_id
    ORDER BY 
        posts.created_at DESC;
END$$
DELIMITER ;

-- ===========================
-- Procedure: add_comment
-- ===========================
DELIMITER $$
CREATE PROCEDURE `add_comment` (
    IN p_user_id INT,
    IN p_post_id INT,
    IN p_description VARCHAR(255)
)
BEGIN
    INSERT INTO comments (user_id, post_id, description)
    VALUES (p_user_id, p_post_id, p_description);
END$$
DELIMITER ;

-- ===========================
-- Procedure: get_comments_by_post
-- ===========================
DELIMITER $$
CREATE PROCEDURE `get_comments_by_post`(
    IN p_post_id INT
)
BEGIN
    SELECT 
        c.comment_id,
        c.description,
        c.created_at,
        u.user_id,
        u.first_name,
        u.last_name
    FROM 
        comments c
    INNER JOIN 
        users u ON c.user_id = u.user_id
    WHERE 
        c.post_id = p_post_id
    ORDER BY 
        c.comment_id DESC;
END$$
DELIMITER ;

-- ===========================
-- Procedure: get_user
-- ===========================_
DELIMITER $$

CREATE PROCEDURE get_user(IN id INT)
BEGIN
    SELECT first_name, last_name
    FROM users
    WHERE user_id = id;
END$$

DELIMITER ;

-- ===========================
-- Procedure: get_posts_by_id
-- ===========================
DELIMITER $$

CREATE PROCEDURE get_posts_by_id(IN p_user_id INT)
BEGIN
    SELECT 
        posts.post_id,
        users.first_name,
        users.last_name,
        posts.description,
        posts.path_image,
        posts.created_at,
        users.user_id
    FROM 
        posts
    INNER JOIN 
        users ON posts.user_id = users.user_id
    WHERE 
        users.user_id = p_user_id
    ORDER BY 
        posts.created_at DESC;
END$$

DELIMITER ;
