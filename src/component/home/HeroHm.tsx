import video from "../../assets/0_Solar_Panels_Solar_Energy_3840x2160.mp4"

const HeroHm = () => {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">

                {/* Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src={video}
                        type="video/mp4 "
                        className=" bg-cover"
                    />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

            </div>
            <div className="bg-linear-to-r from-blue-800 via-blue-900 to-blue-950 py-5 w-full">
                <div className="flex text-center font-serif  max-w-7xl mx-auto justify-between items-center  text-white text-sm">

                    <h1 className="text-4xl ">Powering The Future</h1>
                    <button className="bg-yellow-500 hover:bg-blue-700 px-6 py-2 text-[18px] rounded-md transition"> Enquiry Now</button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row gap-10 items-start">

                    {/* Left Side */}
                    <div className="md:w-1/4">
                        <h2 className="text-4xl text-center py-4 font-bold font-serif leading-tight">
                            Solar <span className="text-blue-600">Reios</span>
                        </h2>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-3/4">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quae modi cupiditate dolor quas eveniet eum omnis libero est
                            recusandae ratione rem laborum natus obcaecati vero corrupti
                            quia, reprehenderit illum facere veritatis quisquam placeat.
                            Dicta odit officia quidem quas dolores ratione porro minima.
                        </p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HeroHm
