import React from "react";
import { Button, Table } from "reactstrap";
import "../styles/styles.css";

const Team = (props) => {
    const rolesRender = (param) => {
        switch (param) {
            case "backend":
                return "Backend Engineer";
            case "frontend":
                return "Frontend Engineer";
            case "designer":
                return "Designer";
            default:
                return "No role..";
        }
    };

    return (
        <div className="note-list">
            <h4>Members</h4>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.team.map((member, i) => (
                        <tr key={i}>
                            <td>{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{rolesRender(member.role)}</td>
                            <td>
                                <Button
                                    outline
                                    color="info"
                                    onClick={() => {
                                        props.editMember(member);
                                    }}
                                >
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Team;
