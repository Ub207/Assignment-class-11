import React from 'react'

const ChildComponent = ({ name, age, profession }) => {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Rendering props */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
};

export default ChildComponent;











