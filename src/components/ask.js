// ask.js

import React, { useState } from "react";
import "./ask.css";
import { BiCopy } from "react-icons/bi";
import { BiSolidMagicWand } from "react-icons/bi";

const Ask = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAsk = async () => {
    if (question.trim() !== "") {
      setIsGenerating(true);
      try {
        const response = await fetch(process.env.REACT_APP_API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: question }),
        });

        const data = await response.json();
        setIsGenerating(false);
        setAnswer(data.answer);

        processSqlQueries(data.answer);
      } catch (error) {
        console.error("An error occurred:", error);
        setIsGenerating(false);
      }
    }
  };

  const processSqlQueries = (answer) => {
    const sqlQueries = extractSqlQueries(answer);

    if (sqlQueries.length > 0) {
      const formattedQueries = sqlQueries.map((query, index) => {
        return (
          <div key={index} className="query-block">
            <pre>
              <code>{query}</code>
            </pre>
            <button onClick={() => handleCopy(query)}>
              <BiCopy />
            </button>
          </div>
        );
      });

      setAnswer(formattedQueries);
    } else {
      setAnswer("Invalid query");
    }
  };

  const extractSqlQueries = (text) => {
    const regex = /```sql([\s\S]*?)```/g;
    const matches = text.match(regex) || [];
    return matches.map((match) => match.replace(/```sql|```/g, "").trim());
  };

  const handleCopy = (query) => {
    const textArea = document.createElement("textarea");
    textArea.value = query;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  return (
    <div className="container">
      <div className="question-bar">
      <div className="ask-info">
      <h1 >Generate SQL from natural language</h1>
          <p className="ask-info-text"> Use meaningful questions to get SQL queries
          (e.g. Write a query to fetch only the place name (string before brackets) from the Address column of EmployeeInfo table.)</p>
        </div>
        <textarea
          placeholder="Ask a question...
          Make sure to start with 'Write a query to'
          "
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleAsk} disabled={isGenerating}>
          {isGenerating ? <span>Generating...</span> : <span><BiSolidMagicWand/> Do the magic</span>}
        </button>
      </div>
      {answer && <div className="answer-card">{answer}</div>}
    </div>
  );
};

export default Ask;
