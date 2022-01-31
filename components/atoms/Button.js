const Button = ({ children }) => {
  return (
    <button className="bg-trovador-primary px-4 py-2 rounded uppercase tracking-widest text-sm">
      {children}
    </button>
  );
};

export default Button;
