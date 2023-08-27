<p align="center">
  <img src="https://fiverr-res.cloudinary.com/image/upload/f_png,q_auto,t_makers_project_variation_preview/v1/secured-attachments/makers_project_variation/preview_file/647ce8e62710b3ed6c986cb75d05a0dc-1688573946/64a595e669de1736f3022986.svg?__cld_token__=exp=1693171936~hmac=6b91ec8384609f463c79a76a0893c4a79008adb6d179e56f2bc11726ddc42e77" alt="Project Logo" width="150px">
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
