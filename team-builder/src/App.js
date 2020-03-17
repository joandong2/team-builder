import React, { useState } from "react";
// import logo from "./logo.svg";
import Team from "./components/Team.js";
import TeamForm from "./components/TeamForm.js";
import "./App.css";

function App() {
    const [teamState, setTeamState] = useState([]);

    const addPlayerHandler = (newPlayer) => {
        console.log(newPlayer);
        setTeamState([...teamState, newPlayer]);
    };

    return (
        <div className="wrapper">
            <h1>My Notes</h1>
            <TeamForm addPlayer={addPlayerHandler} />
            <Team team={teamState} />
        </div>
    );
}

export default App;
