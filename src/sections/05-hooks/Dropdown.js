import React, {useState} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
  const renderedOptions = options
    .filter(option => option !== selected)
    .map((option) => {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => onSelectedChange(option)}
        >
          {option.label}
        </div>
      )
    })

  const [open, setOpen] = useState(false);

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"/>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;