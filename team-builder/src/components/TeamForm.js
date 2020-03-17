import React, { useState } from "react";

const TeamForm = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = (event) => {
        console.log(event.target.value);
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.addPlayer({
            ...formState
        });

        /*I added this after class, 
    but it simply clears the user data and resets the form!*/
        setFormState({
            name: "",
            email: "",
            role: ""
        });
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={formState.title}
                onChange={changeHandler}
                placeholder="Name"
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={formState.email}
                onChange={changeHandler}
                placeholder="Email address"
            />
            <label htmlFor="">
                <select
                    name="role"
                    value={formState.role}
                    onChange={changeHandler}
                >
                    <option value="backend">Backend Engineer</option>
                    <option value="frontend">Frontend Engineer</option>
                    <option value="designer">Designer</option>
                </select>
            </label>
            <button type="submit">Create Note!</button>
        </form>
    );
};

export default TeamForm;
