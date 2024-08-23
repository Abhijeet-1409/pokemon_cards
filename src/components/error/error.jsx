import React from 'react';
import styles from './error.module.css'; 

const Error = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>❌</div>
      <div className={styles.errorMessage}>{message || 'An unexpected error occurred.'}</div>
    </div>
  );
};


export default Error;