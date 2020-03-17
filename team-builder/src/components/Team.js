import React from "react";

const Team = (props) => {
    return (
        <div className="note-list">
            {props.team.map((member, i) => (
                <div className="player" key={i}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                    <button
                        onClick={() => {
                            props.editMember(member);
                        }}
                        className="button muted-button"
                    >
                        Edit
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Team;
