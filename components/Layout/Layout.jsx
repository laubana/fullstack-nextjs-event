import Header from "../Header/Header";
import Toast from "../Toast/Toast";
import { useToastContext } from "../../context/ToastContext";

export default ({ children }) => {
  const { message, status, title } = useToastContext();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Toast message={message} status={status} title={title} />
    </>
  );
};
