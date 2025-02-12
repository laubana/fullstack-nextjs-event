import Header from "@components/Header/Header";
import Toast from "@components/Toast/Toast";
import { useToastContext } from "@contexts/ToastContext";

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
