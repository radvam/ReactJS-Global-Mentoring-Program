import React from "react";

const CreateElementComponent = function() {
    return React.createElement(
        "h1",
        { className: "title" },
        "CreateElementComponent" 
    );
}

export default CreateElementComponent;
