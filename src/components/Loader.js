import React from "react"

function Loader(){
    return(
        <>
            <div id="overlayer"></div>
                <div className="loader">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    );
}

export default Loader;
