// src/pages/StudyRoom.jsx
import React from 'react';
import Tool from '../components/Tool';

function StudyRoom() {
  return (
    <div style={styles.container}>
      <Tool />
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
