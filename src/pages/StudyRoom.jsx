// src/pages/StudyRoom.jsx
import React from 'react';

function StudyRoom() {
  return (
    <div style={styles.container}>
      <h2>Study Room</h2>
      <p>
        이곳에서 화면 공유, 유튜브 링크 추가, 스터디 타이머 등을 구현할
        예정입니다.
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
};

export default StudyRoom;
