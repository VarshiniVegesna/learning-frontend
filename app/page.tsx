"use client";

export default function Home() {

  const API_URL = "https://learning-backend-vxof.onrender.com";

  const submitQuiz = async () => {
    try {
      await fetch(`${API_URL}/api/quiz/attempt`, {
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

      alert("Quiz Submitted Successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting quiz");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Quiz Page</h1>
      <button onClick={submitQuiz}>Submit Quiz</button>
    </div>
  );
}