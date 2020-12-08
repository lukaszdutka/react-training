import React, {useState} from 'react';

const Accordion = ({items, source}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return <React.Fragment key={item.title}>
      <div className={`title ${active}`}
           onClick={() => onTitleClick(index)}
      >
        <i className="dropdown icon"/>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  });

  return (
    <div>
      <div className="ui styled accordion">
        {renderedItems}
      </div>
      <div className="ui segment">source: <a href={source.link}>{source.text}</a></div>
    </div>
  )
}

export default Accordion;

