import {SignUpContainer, Form, Input, Button} from './sign-up.styles';

import {useState} from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase';

const SignUp = () => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordTwo: ""
    })

    const {displayName, email, password, passwordTwo} = userCredentials;

    const handleChange = e => {
        const {name, value} = e.target
        setUserCredentials({...userCredentials, [name]: value})
    }

    const handleSubmit = async e => {
        e.preventDefault();

        if(password !== passwordTwo){
            alert("Passwords don't match!")
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName});

            setUserCredentials({
                displayName: "",
                email: "",
                password: "",
                passwordTwo: ""
            })

        } catch(e){
            console.log(e)
        }
    }
 
    return (
        <SignUpContainer>
            <h2>Sign Up</h2>
            <Form action="" onSubmit={handleSubmit}>
                <Input type="text" name="displayName" placeholder="Username" value={displayName} onChange={handleChange} />
                <Input type="text" name="email" placeholder="Email" value={email} onChange={handleChange} />
                <Input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
                <Input type="password" name="passwordTwo" placeholder="Re-type password" value={passwordTwo} onChange={handleChange} />
                <Button>Register</Button>
            </Form>
        </SignUpContainer>
    )
}

export default SignUp;