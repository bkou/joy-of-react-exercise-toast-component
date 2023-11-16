import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastList, handleDismiss}) {
  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map(({id, variant, message}) => 
        <li className={styles.toastWrapper} key={id} onClick={() => handleDismiss(id)}>
          <Toast variant={variant}>{message}</Toast>
        </li>
      )}
    </ol>
  );
}

export default ToastShelf;
