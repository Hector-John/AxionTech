import { NavLink } from "react-router-dom";

const Button = ({ text, to, variant = "filled", className = "", icon = null }) => {
  const baseStyles =
    "rounded-lg transition text-sm font-semibold flex items-center"; 
  const filledStyles =
    "bg-blue-600 text-white hover:bg-blue-700";
  const outlineStyles =
    "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white";

  return (
    <button className={`${baseStyles} ${variant === "outline" ? outlineStyles : filledStyles} ${className}`}>
      <NavLink to={to} className="flex items-center">
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </NavLink>
    </button>
  );
};

export default Button;
