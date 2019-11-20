import React from 'react';


const PeopleList = props => {
  return (
    <ul>

        {props.person.map(repo => (
            <li key={String(repo.id)}>{repo.name}</li>
        ))}
    
    </ul>
  );
}

export default PeopleList
