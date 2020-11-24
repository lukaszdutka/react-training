import React from 'react';

const Wrapper = props => {
  return (
    <div className={'ui segment wrapper'} style={{margin: '20px', backgroundColor: '#85856c'}}>
      <div className={'ui container'} style={{marginTop: '10px'}}>
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper;