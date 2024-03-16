<p align="center">
  <img src="./src/assets/logo.png" alt="Project Logo" width="150px">
</p>

<h1 align="center" style="color:green;">SQL Magic</h1>

## Automatic SQL Query Generator

This project is created by Ajnas N B

## Overview

SQL Magic is a powerful query generator designed to create SQL queries based on the questions you ask. With the ability to understand context and intention, it can effortlessly generate complex SQL queries with just a few prompts.

## How It Works

Simply ask SQL Magic a question in natural language, and it will analyze the question to determine the appropriate SQL query. For example, you can ask:

"Write a query to fetch only the place name (string before brackets) from the Address column of EmployeeInfo table."

And SQL Magic will generate:

```sql
SELECT SUBSTRING_INDEX(Address, '(', 1) AS PlaceName FROM EmployeeInfo;

# For more information and to try it out, visit https://sqlmagic.ajnasnb.me
