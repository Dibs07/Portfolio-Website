const Heading = (text ) => {
    const letters = text.split("");
    return (
        <div className="text-center z-10 text-white"

        >
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className="text-4xl text-white font-bold md:text-3xl cursor-pointer duration-500 lg:text-5xl 2xl:text-6xl hover:scale-y-110 hover:text-[#880ED4] hover:scale-x-110"
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};

export default Heading;