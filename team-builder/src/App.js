import React, { useState } from "react";
// import logo from "./logo.svg";
import Team from "./components/Team.js";
import AddMember from "./components/AddMember.js";
import EditMember from "./components/EditMember.js";
import "./App.css";

function App() {
    const [teamState, setTeamState] = useState([]);
    const [editState, setEditState] = useState(false);
    const [currentMember, setCurrentMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const addMemberHandler = (newMember) => {
        //console.log(newPlayer.name);
        setTeamState([...teamState, newMember]);
    };

    const editMemberHandler = (member) => {
        //console.log(player);
        setEditState(true);

        setCurrentMember({
            name: member.name,
            email: member.email,
            role: member.role
        });
    };

    const updateMemberHandler = (name, updatedMember) => {
        // console.log(name);
        // console.log(updatedMember);
        // console.log(teamState);
        setEditState(false);

        setTeamState(
            teamState.map((member) =>
                member.name === name ? updatedMember : member
            )
        );
    };

    return (
        <div className="wrapper">
            <h1>My Notes</h1>
            {editState ? (
                <div>
                    <h2>Edit user</h2>
                    <EditMember
                        editState={editState}
                        setEditState={setEditState}
                        currentMember={currentMember}
                        updateMember={updateMemberHandler}
                    />
                </div>
            ) : (
                <div>
                    <h2>Add user</h2>
                    <AddMember addMember={addMemberHandler} />
                </div>
            )}
            <Team team={teamState} editMember={editMemberHandler} />
        </div>
    );
}

export default App;
