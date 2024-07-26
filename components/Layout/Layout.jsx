import Header from "../Header/Header";

export default ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
