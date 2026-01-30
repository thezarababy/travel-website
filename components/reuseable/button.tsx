type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-md px-6 py-3 text-white bg-[#0336FF] "
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
