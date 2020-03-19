import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "../styles/styles.css";

const EditMember = (props) => {
    const [member, setMember] = useState(props.currentMember);

    console.log(member);

    const changeHandler = (event) => {
        //console.log(event.target.value);
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.updateMember(member.id, {
            //id: member.id,
            name: member.name,
            email: member.email,
            role: member.role
        });

        /*I added this after class, but it simply clears the user data and resets the form!*/
        setMember({
            name: "",
            email: "",
            role: "backend"
        });
    };

    useEffect(() => {
        setMember(props.currentMember);
    }, [props]);

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
                Edit Member
            </Button>
            <Button
                outline
                color="danger"
                onClick={() => props.setEditState(false)}
                type="submit"
            >
                Cancel
            </Button>
        </Form>
    );
};

export default EditMember;
