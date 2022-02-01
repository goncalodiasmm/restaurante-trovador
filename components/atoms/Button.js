const Button = ({ variant, children }) => {
  const variants = {
    primary:
      'bg-gray-800 text-trovador-background hover:bg-black hover:text-trovador-primary',
    secondary:
      'hidden md:block md:text-white md:border-2 md:border-white md:bg-transparent md:hover:bg-white md:hover:text-gray-900',
  }

  return (
    <button
      className={`z-10 rounded px-4 py-2 text-sm uppercase tracking-widest duration-500 ${variants[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button
