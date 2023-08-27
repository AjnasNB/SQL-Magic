<p align="center">
  <img src="./public/logo.png" alt="Project Logo">
</p>

<h1 align="center" color='green'>SQL Magic</h1>

## Overview

SQL Magic is a powerful query generator designed to create SQL queries based on the questions you ask. With the ability to understand context and intention, it can effortlessly generate complex SQL queries with just a few prompts.

## How It Works

Simply ask SQL Magic a question in natural language, and it will analyze the question to determine the appropriate SQL query. For example, you can ask:

"Write a query to fetch only the place name (string before brackets) from the Address column of EmployeeInfo table."

And SQL Magic will generate:

```sql
SELECT SUBSTRING_INDEX(Address, '(', 1) AS PlaceName FROM EmployeeInfo;
