"use client";
import { useState } from "react";

export default function QuizPage() {

  const API_URL = "https://learning-backend-vxof.onrender.com";

  // ✅ Questions
  const questions = [
    {
      id: 1,
      question: "What is Machine Learning?",
      options: ["Programming Language", "Subset of AI", "Database"],
      answer: "Subset of AI"
    },
    {
      id: 2,
      question: "Supervised learning uses?",
      options: ["Labeled Data", "Random Data", "No Data"],
      answer: "Labeled Data"
    }
  ];

  const [answers, setAnswers] = useState({});

  // ✅ Select option
  const handleChange = (qid, option) => {
    setAnswers({
      ...answers,
      [qid]: option
    });
  };

  // ✅ Submit Quiz
  const submitQuiz = async () => {

    let score = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    try {
      const response = await fetch(`${API_URL}/api/quiz/attempt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: "U55",
          topicId: 1,
          score: score,
          totalQuestions: questions.length
        })
      });

      const data = await response.json();
      console.log(data);

      alert(`Quiz Submitted! Score: ${score}`);
    } catch (error) {
      console.error(error);
      alert("Error submitting quiz");
    }
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px"
    }}>
      <h2>Quiz Page</h2>

      {questions.map((q) => (
        <div key={q.id}>
          <p><b>{q.question}</b></p>

          {q.options.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={q.id}
                onChange={() => handleChange(q.id, opt)}
              />
              {opt}
              <br />
            </label>
          ))}
        </div>
      ))}

      <br />

      {/* ✅ Button connected */}
      <button onClick={submitQuiz}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
        Submit Quiz
      </button>
    </div>
  );
}