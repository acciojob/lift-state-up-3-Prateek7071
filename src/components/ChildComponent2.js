import React from 'react';

export default function ChildComponent2(props) {
  const {updateSelectedOption} = props
  return (
    <div
     className='childComponent2'>
      <h2>Child Component 1</h2>
      <button onClick={(e) => updateSelectedOption("Option 2")}>Option 2</button>
    </div>
  );
}
