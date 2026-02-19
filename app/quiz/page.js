"use client";

export default function QuizPage() {

  const API_URL = "https://learning-backend-vxof.onrender.com";

  const submitQuiz = async () => {
    try {
      const response = await fetch(`${API_URL}/api/quiz/attempt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: "U55",
          topicId: 1,
          score: 8,
          totalQuestions: 10
        })
      });

      const data = await response.json();
      console.log(data);

      alert("Quiz Submitted Successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting quiz");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Quiz Page</h1>
      <button onClick={submitQuiz}>
        Submit Quiz
      </button>
    </div>
  );
}