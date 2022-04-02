//libraries

//components

function Scanner() {
    return (
        <div id="interactive" className="viewport h-screen w-screen overflow-hidden">
            <video
                className="object-cover object-center w-screen h-screen"
                autoPlay
                muted={true}
                playsInline={true}
            />
            {/* required for latest ios devices */}
        </div>
    );
}

Scanner.propTypes = {};

export default Scanner;
