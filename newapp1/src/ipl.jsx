import React from "react";
import Teams from "./Teams";
function Ipl(){
    const [team, setTeam]=React.useState([
        {
            teamname:'Mumbai Indians',
            players:[
              'Rohit',
              'surya',
              'kishan',
              'bhumra',
              'david'
            ]
          },
          {
            teamname:'Royal Challengers Bengaluru',
            players:[
              'Faf',
              'Virat',
              'DK',
              'Maxi',
              'Siraj'
            ]
          },
          {
            teamname:'Sunrisers Hyderabad',
            players:[
              'Kane Williamson',
              'Manish',
              'Bhuvi',
              'Warner',
              'Karan'
            ]
          },
          {
            teamname:'Chennai Super Kings',
            players:[
              'Dhoni',
              'Raina',
              'Jadeja',
              'Rayudu',
              'Ben Stokes'
            ]
          }
    ]);
return(<div style={{border:"1PX SOLID",margin_top:"50PX ",margin:"20px"}}>
    {
        team.map((teams,i)=>{
            return(<Teams teamname={teams.teamname} player={teams.players}></Teams>)
        })
    }
</div>)
}
export default Ipl;
