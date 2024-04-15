-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2024 at 04:01 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wyniki`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `animals`
--

CREATE TABLE `animals` (
  `nazwa` varchar(30) NOT NULL,
  `wynik` int(10) NOT NULL,
  `czas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `animals`
--

INSERT INTO `animals` (`nazwa`, `wynik`, `czas`) VALUES
('testAnimals', 17, '01:11'),
('testZPlaces', 19, '00:50'),
('testZClothes', 8, '00:14'),
('testZPlaces', 8, '00:13'),
('testesAnimates', 9, '00:20'),
('animalsSAVE', 4, '00:14'),
('PLACESsave', 5, '00:13');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `clothes`
--

CREATE TABLE `clothes` (
  `nazwa` varchar(30) NOT NULL,
  `wynik` int(10) NOT NULL,
  `czas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `clothes`
--

INSERT INTO `clothes` (`nazwa`, `wynik`, `czas`) VALUES
('a', 13, '2');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `fruits`
--

CREATE TABLE `fruits` (
  `nazwa` varchar(30) NOT NULL,
  `wynik` int(10) NOT NULL,
  `czas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `places`
--

CREATE TABLE `places` (
  `nazwa` varchar(30) NOT NULL,
  `wynik` int(10) NOT NULL,
  `czas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczen`
--

CREATE TABLE `uczen` (
  `nazwa` varchar(30) NOT NULL,
  `wynik` int(10) NOT NULL,
  `czas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uczen`
--

INSERT INTO `uczen` (`nazwa`, `wynik`, `czas`) VALUES
('asf', 2, '00:09'),
('asf', 3, '00:07'),
('testZfruit', 19, '02:14'),
('asgfas', 19, '01:26'),
('asf', 7, '00:18'),
('asf', 6, '00:16'),
('opop', 8, '00:15');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `vegetables`
--

CREATE TABLE `vegetables` (
  `nazwa` varchar(30) NOT NULL,
  `wynik` int(10) NOT NULL,
  `czas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
