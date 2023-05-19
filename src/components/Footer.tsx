import "./footer.css";

export const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>© {year} Baptiste Marcon. Made with ❤️</p>
    </footer>
  );
};
