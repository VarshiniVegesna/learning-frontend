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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-[400px]">
        <h2 className="text-2xl font-bold mb-6">
          Quiz Page
        </h2>

        <p className="mb-4">
          Topic: JavaScript Basics
        </p>

        <button
          onClick={submitQuiz}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}