const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      {iconURL && <img
        src={iconURL}
        alt="right arrow icon"
        className="ml2 w-5 h-5 rounded-full"
      />}
  {/*     <img
        src={iconURL}
        alt="right arrow"
        className={`ml2 ${iconURL == "" ? "w-0 h-0" : "w-5 h-5 rounded-full"}`}
      /> */}
    </button>
  );
};

export default Button;
