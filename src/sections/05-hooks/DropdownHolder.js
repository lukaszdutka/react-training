import React, {useState} from 'react';
import Dropdown from "./Dropdown";

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]


const DropdownHolder = () => {
  const [selectedColor, setSelectedColor] = useState(options[0]);

  return (
    <div>
      <Dropdown label="Select a color"
                options={options}
                selected={selectedColor}
                onSelectedChange={setSelectedColor}
      />
      <p style={{color: selectedColor.value}}> text for dropdown </p>
    </div>
  )
}

export default DropdownHolder;