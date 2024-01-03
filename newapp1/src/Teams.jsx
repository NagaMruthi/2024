import React from "react";
function Teams(props) {
    console.log(props);
    return (
      <div>
        <h1>{props.teamname}</h1>
          {props.player.map((player) => (
            <li key={player}>{player}</li>
          ))}
      </div>
    );
  }
  
  export default Teams;