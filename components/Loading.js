const Loading = ({ visibility }) => {
  return (
    <div
      className={`fixed h-screen w-screen flex justify-center items-center text-2xl z-[10000] bg-bg-100 text-primary top-0 left-0 transition-transform duration-700 scale-y-0 origin-top ${
        !visibility ? "preloader-hide" : "preloader-show"
      }`}
    >
      <div className="bg-gradient-to-br from-primary to-purple-600 h-[80px] w-[80px] rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;
