import React from "react";
import Child from "./Child";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {

    // 3 variables

    const name = "Ubaid";
    const age = 25;
    const profession = "Developer";

    return (
        <div>
            <h1>Parent Component</h1>

            {/* Passing props to Child Component */}

            <ChildComponent name={name} age={age} profession={profession} />
        </div>
    );
};

export default ParentComponent;






