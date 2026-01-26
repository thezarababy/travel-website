type ButtonProps = {
  bgColor?: string;
  textColor?: string;
  label: string;
  onClick?: () => void;
};

const Button = ({ bgColor, textColor, label, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-md px-6 py-3  "
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
