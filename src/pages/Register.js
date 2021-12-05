import React from "react";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";

const Register = () => {
    const onSubmitHandler = (form, callback) => {
        console.log("Register Submitted:", form);
        callback();
    };

    return (
        <SFixedContainer size={275}>
            <Form
                title={"Register"}
                formArr={formArr}
                submitBtn={"Register"}
                onSubmit={onSubmitHandler}
                redirect={{
                    label: "Already have an account?",
                    link: {
                        label: "Sign In",
                        to: "/signin",
                    },
                }}
            />
        </SFixedContainer>
    );
};

const formArr = [
    {
        label: "Name",
        name: "name",
        type: "text",
    },
    {
        label: "Email",
        name: "email",
        type: "text",
    },

    {
        label: "Password",
        name: "password",
        type: "password",
    },
    {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
    },
];

export default Register;
