import React, { useState } from "react";

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
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={member.name}
                onChange={changeHandler}
                placeholder="Name"
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={member.email}
                onChange={changeHandler}
                placeholder="Email address"
            />
            <label htmlFor="">
                <select
                    name="role"
                    value={member.role}
                    onChange={changeHandler}
                >
                    <option value="backend">Backend Engineer</option>
                    <option value="frontend">Frontend Engineer</option>
                    <option value="designer">Designer</option>
                </select>
            </label>
            <button type="submit">Add Member</button>
        </form>
    );
};

export default AddMember;
