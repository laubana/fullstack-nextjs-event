import { createContext, useContext, useState } from "react";

const ToastContext = createContext({
  hide: () => null,
  message: "",
  show: () => null,
  status: "",
  title: "",
});

const ToastContextProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");

  const handleHide = () => {
    setMessage("");
    setStatus("");
    setTitle("");
  };

  const handleShow = ({ message, status, title }) => {
    setMessage(message);
    setStatus(status);
    setTitle(title);
  };

  return (
    <ToastContext.Provider
      value={{ hide: handleHide, message, show: handleShow, status, title }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const toastContext = useContext(ToastContext);
  if (!toastContext) {
    throw new Error("ToastContext Error");
  }
  return toastContext;
};

export default ToastContextProvider;
