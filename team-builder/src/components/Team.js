import React from "react";

const Team = (props) => {
    return (
        <div className="note-list">
            {props.team.map((player) => (
                <div className="player" key={player.name}>
                    <h2>{player.name}</h2>
                    <p>{player.email}</p>
                    <p>{player.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Team;
