import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const AddMember = (props) => {
    const [member, setMember] = useState({
        id: "",
        name: "",
        email: "",
        role: "backend"
    });

    const changeHandler = (event) => {
        // console.log(event.target.value);
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.addMember({
            name: member.name,
            email: member.email,
            role: member.role
        });

        /* clear forms after submission */
        setMember({
            name: "",
            email: "",
            role: "backend"
        });
    };

    return (
        <Form onSubmit={formSubmitHandler}>
            <FormGroup>
                <Input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={changeHandler}
                    placeholder="Name"
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="email"
                    name="email"
                    value={member.email}
                    onChange={changeHandler}
                    placeholder="Email address"
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="select"
                    name="role"
                    value={member.role}
                    onChange={changeHandler}
                >
                    <option value="backend">Backend Engineer</option>
                    <option value="frontend">Frontend Engineer</option>
                    <option value="designer">Designer</option>
                </Input>
            </FormGroup>
            <Button outline color="primary">
                Add Member
            </Button>
        </Form>
    );
};

export default AddMember;
