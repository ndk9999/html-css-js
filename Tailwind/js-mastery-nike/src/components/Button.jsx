const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none ${fullWidth && 'w-full'} ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red border-coral-red text-white"
      }`}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="Arrow Right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
