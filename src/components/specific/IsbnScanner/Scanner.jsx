//libraries

//components

function Scanner() {
    return (
        <div
            id="interactive"
            className="flex flex-col items-center content-center justify-center viewport w-screen h-full overflow-hidden"
        >
            <div className="z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute border-2 border-secondaryLight w-10/12 sm:w-72 h-44 md:w-80 md:h-52" />
            <video
                className="absolute top-0 left-0 object-cover object-center w-full h-full"
                autoPlay
                muted={true}
                playsInline={true}
            />
            {/* required for latest ios devices */}
        </div>
    );
}

export default Scanner;
