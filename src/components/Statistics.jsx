import React from "react";
const h2stat = {
    display: 'flex',
    justifyContent: 'center'
  };
  
  const ulstatistics = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center'
  };
  
  const listat = {
    width: '40px',
    height: '40px',
    marginLeft: '20px',
    marginRight: '20px',
    '&:first-child': {
      marginLeft: '0'
    },
    '&:last-child': {
      marginLeft: '0'
    }
  };
const Statistics = ({title,stats}) => {
    return(
    <section>
    <h2 style={h2stat} className="h2-stat">{title}</h2>
    <ul style={ulstatistics} className="ul-statistics">
    {stats.map((state,index) => (
        <li style={listat} className="li-stat" key={index}>
            <span>{state.label}</span>
            <span>{state.percentage}%</span>
        </li>
    ))}
    </ul>
    </section>
    )
}
export default Statistics