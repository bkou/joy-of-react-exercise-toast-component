import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { toastList, addToast, handleDismiss } = React.useContext(ToastContext);

  const [
    value,
    setValue
  ] = React.useState('notice');
  const [
    message,
    setMessage
  ] = React.useState("");

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} handleDismiss={handleDismiss} />

      <form className={styles.controlsWrapper} onSubmit={event => addToast(event, value, message, setMessage, setValue)}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={event => {
              setMessage(event.target.value)
            }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) =>
              <label htmlFor={"variant-" + variant} key={"variant-" + variant}>
                <input
                  id={"variant-" + variant}
                  key={"variant-" + variant}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={value === variant}
                  onChange={event => {
                    setValue(event.target.value)
                  }}
                />
                {variant}
              </label>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
