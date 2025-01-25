import React from 'react';

function App() {
  const handleStudyStart = () => {
    // 추후 방 생성 로직이나 라우팅 등 연결
    console.log('Study Start 버튼 클릭!');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>WithStudy</h1>
        <p>
          실시간 화면공유, 유튜브 공유, 스터디 타이머 등을 제공하는 스터디
          플랫폼
        </p>
      </header>
      <main>
        <p>
          안녕하세요! WithStudy는 간편한 방 생성으로 친구들과 함께 공부할 수
          있는 환경을 제공해줍니다.
        </p>
        <button style={styles.studyButton} onClick={handleStudyStart}>
          Study Start
        </button>
      </main>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    padding: '2rem',
  },
  header: {
    marginBottom: '2rem',
  },
  studyButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default App;
