import React from "react";

function Container(props) {
    return (
        <div className="container" style={{"paddingTop": '20px'}}>
            {props.children}
        </div>
    )
}

export default Container