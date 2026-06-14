import React from 'react';

export default function ChildComponent1(props) {
  const {updateSelectedOption} = props
  return (
    <div
     className='childComponent1'>
      <h2>Child Component 1</h2>
      <button onClick={(e) => updateSelectedOption("Option 1")}>Option 1</button>
    </div>
  );
}
