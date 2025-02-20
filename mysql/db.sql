

CREATE DATABASE IF NOT EXISTS aurax;
USE aurax;

-- Table structure for table `users`
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserting data for users table
INSERT INTO `users` VALUES (3, 'marwane.assou@gmail.com', 'Marwane', 'Assou'), (4, 'hamza@gmail.com', 'Hamza', 'Assou');

-- Table structure for table `rooms`
DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `room_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `channel` varchar(255) NOT NULL,
  `description` text,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`room_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserting data for rooms table
INSERT INTO `rooms` VALUES (1, 3, '3', 'dfdgfgfdjhgfd', 'Piano'), (2, 3, '3', 'lilo', 'Piano');

-- Creating function: getUserDetails
DELIMITER ;;
CREATE FUNCTION `getUserDetails`(email_input VARCHAR(255)) RETURNS varchar(255) CHARSET utf8mb4
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
END ;;
DELIMITER ;

-- Creating function: UserExists
DELIMITER ;;
CREATE FUNCTION `UserExists`(p_email VARCHAR(255)) RETURNS int
    READS SQL DATA
    DETERMINISTIC
BEGIN
    DECLARE user_count INT;

    SELECT COUNT(*) INTO user_count
    FROM users
    WHERE email = p_email;

    IF user_count > 0 THEN
        RETURN 1;
    ELSE
        RETURN 0;
    END IF;
END ;;
DELIMITER ;

-- Creating procedure: AddUser
DELIMITER ;;
CREATE PROCEDURE `AddUser`(
    IN p_email VARCHAR(255),
    IN p_first_name VARCHAR(255),
    IN p_last_name VARCHAR(255)
)
BEGIN
    INSERT INTO users (email, first_name, last_name)
    VALUES (p_email, p_first_name, p_last_name);

    SELECT LAST_INSERT_ID() AS user_id;
END ;;
DELIMITER ;

-- Creating procedure: add_room
DELIMITER ;;
CREATE PROCEDURE `add_room`(
    IN p_user_id INT,
    IN p_channel VARCHAR(255),
    IN p_description TEXT,
    IN p_category VARCHAR(255)
)
BEGIN
    INSERT INTO rooms (user_id, channel, description, category)
    VALUES (p_user_id, p_channel, p_description, p_category);
END ;;
DELIMITER ;

-- Creating procedure: getRooms
DELIMITER ;;
CREATE PROCEDURE `getRooms`(
    IN p_user_id INT
)
BEGIN
    SELECT room_id, user_id, channel, description, category
    FROM rooms
    WHERE user_id != p_user_id;
END ;;
DELIMITER ;
