import React, { useState, useEffect } from "react";

const EditMember = (props) => {
    console.log(props);
    const [member, setMember] = useState(props.currentMember);

    const changeHandler = (event) => {
        //console.log(event.target.value);
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.updateMember(member.name, {
            name: member.name,
            email: member.email,
            role: member.role
        });

        /*I added this after class, 
    but it simply clears the user data and resets the form!*/
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
            <button type="submit">Edit Player!</button>
            <button onClick={() => props.setEditState(false)} type="submit">
                Cancel edit Player!
            </button>
        </form>
    );
};

export default EditMember;
