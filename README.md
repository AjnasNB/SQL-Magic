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
```
# For more information and to try it out, visit https://sqlmagic.ajnasnb.me


# SQL Magic

## Getting Started

To get SQL Magic up and running on your machine, follow these steps:

### Prerequisites

Ensure you have Node.js (v14+) and npm (v6+) installed.

### Installation

1. **Clone the SQL Magic repository**:

    ```bash
    git clone https://github.com/AjnasNB/sql-magic.git
    ```

2. **Navigate to the SQL Magic directory and install dependencies**:

    ```bash
    cd sql-magic
    npm install
    ```

3. **Start the application to interact with SQL Magic locally**:

    ```bash
    npm start
    ```

## Usage

Using SQL Magic is as straightforward as its setup:

1. Launch SQL Magic in your browser.
2. Input a natural language query into the provided text field.
3. Press the "Generate Query" button to receive an SQL query based on your input.

## Contributing

Contributions to SQL Magic are warmly welcomed. Whether its feature requests, bug fixes, or code contributions, please feel free to make your mark on this project.

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

SQL Magic is made available under the MIT License. For more details, see the LICENSE file.

## Contact

Ajnas N B - [@your_twitter_handle](https://twitter.com/your_twitter_handle) - creator and maintainer

Project Link: [https://github.com/yourusername/sql-magic](https://github.com/yourusername/sql-magic)

## Acknowledgments

- Node.js and npm for the runtime and package management.
- All open-source projects and contributors that assist in developing SQL Magic.
