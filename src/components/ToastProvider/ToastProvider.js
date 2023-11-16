import React from 'react';

import useEscapeKey from '../../hooks/UseEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [
    toastList,
    setToastList
  ] = React.useState([]);
  function addToast(event, value, message, setMessage, setValue) {
    event.preventDefault();
    let newToastList = [...toastList, {id: crypto.randomUUID(), variant: value, message}];
    setToastList(newToastList);
    setMessage("");
    setValue("notice");
  };
  function handleDismiss(idToDelete) {
    let toastListWithoutId = toastList.filter(({ id }) => id != idToDelete);
    setToastList(toastListWithoutId);
  };

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider value={{ toastList, addToast, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
