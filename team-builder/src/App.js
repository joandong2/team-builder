import React, { useState } from "react";
// import logo from "./logo.svg";
import Team from "./components/Team.js";
import AddMember from "./components/AddMember.js";
import EditMember from "./components/EditMember.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

function App() {
    const [teamState, setTeamState] = useState([]);
    const [editState, setEditState] = useState(false);
    const [currentMember, setCurrentMember] = useState({
        id: "",
        name: "",
        email: "",
        role: ""
    });

    const addMemberHandler = (newMember) => {
        //console.log(newPlayer.name);
        newMember.id = teamState.length + 1;
        setTeamState([...teamState, newMember]);
    };

    //console.log(teamState);

    const editMemberHandler = (member) => {
        //console.log(member);
        setEditState(true);

        setCurrentMember({
            id: member.id,
            name: member.name,
            email: member.email,
            role: member.role
        });
    };

    const updateMemberHandler = (id, updatedMember) => {
        //console.log(id);
        // console.log(updatedMember);
        // console.log(teamState);
        setEditState(false);

        setTeamState(
            teamState.map((member) =>
                member.id === id ? updatedMember : member
            )
        );

        //console.log(setTeamState);
    };

    return (
        <div className="appWrap">
            <Container>
                <Row>
                    <Col md="4">
                        {editState ? (
                            <div>
                                <h4>Edit user</h4>
                                <EditMember
                                    editState={editState}
                                    setEditState={setEditState}
                                    currentMember={currentMember}
                                    updateMember={updateMemberHandler}
                                />
                            </div>
                        ) : (
                            <div>
                                <h4>Add user</h4>
                                <AddMember addMember={addMemberHandler} />
                            </div>
                        )}
                    </Col>
                    <Col md="8">
                        <Team team={teamState} editMember={editMemberHandler} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
