//libraries

//components

function Scanner() {
    return (
        <div id="interactive" className="viewport">
            <video autoPlay muted={true} playsInline={true} />
            {/* required for latest ios devices */}
        </div>
    );
}

Scanner.propTypes = {};

export default Scanner;
