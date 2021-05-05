import {useState} from 'react';
import {SignInContainer, Form, Input, Button} from './sign-in.styles';

import {auth} from '../../firebase/firebase';

const SignIn = () => {

    const [userCredentials, setUserCredentials] = useState({
        username: '',
        password: ''
    })

    const {username, password} = userCredentials;

    const handleChange = e => {
        const {name, value} = e.target
        setUserCredentials({...userCredentials, [name]: value})
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(username, password)

            setUserCredentials({
                username: '',
                password: ''
            })
        } catch(e){
            console.log(e)
        }
    }

    return(
        <SignInContainer>
            <h2>Sign In</h2>
            <Form action="" onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="Enter your email..." value={username} onChange={handleChange} />
                <Input type="password" name="password" placeholder="Enter your password..." value={password} onChange={handleChange} />
                <Button>Log In</Button>
            </Form>
        </SignInContainer>
    )
}

export default SignIn;