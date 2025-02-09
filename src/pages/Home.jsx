// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStudyStart = () => {
    navigate("/studyroom");
  };

  const handleTestPage = () => {
    navigate("/test");
  };

  const handleTest2Page = () => {
    navigate("/test2");
  };

  const handleTest3Page = () => {
    navigate("/test3");
  };

  const handleTest4Page = () => {
    navigate("/test4");
  };

  return (
    <div style={styles.container}>
      <h1>WithStudy</h1>
      <p>안녕하세요! 이곳은 서비스 소개를 적는 페이지입니다.</p>
      <button style={styles.studyButton} onClick={handleStudyStart}>
        Study Start
      </button>
      <button style={styles.studyButton} onClick={handleTestPage}>
        Test
      </button>
      <button style={styles.studyButton} onClick={handleTest2Page}>
        Test2
      </button>
      <button style={styles.studyButton} onClick={handleTest3Page}>
        Test3
      </button>
      <button style={styles.studyButton} onClick={handleTest4Page}>
        Test4
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  studyButton: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
};

export default Home;
