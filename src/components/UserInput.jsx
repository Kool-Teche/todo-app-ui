const UserInput = ({ id, type, placeholder, rightIcon }) => {
  return (
    <div className=" relative flex">
      <input
        type={type}
        id={id}
        className="p-4 text-sm rounded-md block w-full bg-arsenic-100 outline-none dark:placeholder-violet-100 dark:text-white dark:focus:border-[1.5px] border-royal_purple-100"
        placeholder={placeholder}
        required
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
        {rightIcon}
      </span>
    </div>
  );
};

export default UserInput;
