import React from 'react';

const Accordion = ({items, source}) => {
  const renderedItems = items.map(item => {
    return <React.Fragment key={item.title}>
      <div className="title active">
        <i className="dropdown icon"/>
        {item.title}
      </div>
      <div className="content active">
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

