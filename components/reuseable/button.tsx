type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-md px-10 py-5 text-white bg-[#0336FF] "
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
