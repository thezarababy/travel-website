"use client";

type ScrollButtonProps = {
  target: string;
  children: React.ReactNode;
  className?: string;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({
  target,
  children,
  className,
}) => {
  const handleScroll = () => {
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      onClick={handleScroll}
      className={className}
      role="presentation"
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
};

export default ScrollButton;
