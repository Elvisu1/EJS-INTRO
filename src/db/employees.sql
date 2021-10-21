-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 20, 2021 at 05:37 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `employeesDBtype1`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `author` varchar(30) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `year` year(4) NOT NULL,
  `image` varchar(100) NOT NULL,
  `category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `timeStamp`, `year`, `image`, `category`) VALUES
(1, 'War an Peace', 'Tolstoy', '2021-10-04 05:37:06', 1950, 'war.jpg', 1),
(2, 'Red Riding Hood', 'James', '2021-10-04 05:37:15', 2000, 'redHood.jpg', 2),
(4, 'Big blue sea', 'Jane Doe', '2021-10-04 05:38:00', 2020, 'sea.jpg', 3),
(5, 'Star wars', 'Jedi', '2021-10-04 05:51:11', 2015, 'wars.jpg', NULL),
(6, '1984', 'George Orvel', '2021-10-01 09:05:18', 1970, '1984.jpg', 1),
(7, '20000 Thousand miles under sea', 'Jules Vern', '2021-10-04 07:02:05', 1960, 'sea.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `book_categories`
--

CREATE TABLE `book_categories` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book_categories`
--

INSERT INTO `book_categories` (`id`, `cat_name`) VALUES
(1, 'History'),
(2, 'Chidren'),
(3, 'Fantasy'),
(4, 'Poetry');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `salary` decimal(6,2) NOT NULL,
  `age` int(10) UNSIGNED NOT NULL,
  `experience` int(10) UNSIGNED NOT NULL,
  `sex` enum('male','female') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `salary`, `age`, `experience`, `sex`) VALUES
(2, 'John', '1200.00', 30, 3, 'male'),
(3, 'Jane Doe', '1500.00', 28, 4, 'female'),
(4, 'Erica Bell', '999.00', 25, 1, 'female'),
(5, 'Jane Brown', '2000.00', 37, 5, 'female'),
(6, 'James Bond', '3000.00', 44, 7, 'male'),
(9, 'James Delete', '2500.00', 40, 7, 'male'),
(10, 'Post Man', '2200.00', 30, 5, 'male'),
(11, 'Post Man2222', '2200.00', 30, 5, 'male'),
(12, 'Post Man2222', '2200.00', 30, 5, 'male'),
(13, 'Post Woman', '2200.00', 20, 3, 'female');

-- --------------------------------------------------------

--
-- Table structure for table `secretData`
--

CREATE TABLE `secretData` (
  `id` int(11) NOT NULL,
  `sdsd` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book to cat` (`category`);

--
-- Indexes for table `book_categories`
--
ALTER TABLE `book_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `book_categories`
--
ALTER TABLE `book_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `book to cat` FOREIGN KEY (`category`) REFERENCES `book_categories` (`id`);
