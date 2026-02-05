type ButtonProps = {
  label: string;
  className?: string;
  target: string;
  onClick?: () => void;
};

const Button = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
