import { useForm } from "../../../hook/useForm";
import { Form } from 'react-bootstrap';
import { Button } from "react-bootstrap";

const Login = () => {
    const { name, password, onInputChange } = useForm({
        name: '',
        password: '',
      })
      
      const input = (e) => {
        e.preventDefault()
      }


    return (
    <>
    <svg width="100px" height="100px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ef4444" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm3-13.82l-2.59-2.59L21 15l4 4l7-7l-1.41-1.41L25 16.18z"/>
      </svg>
    <Form onSubmit={input}>
      <Form.Group style={{margin: '10px'}} className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{margin: '20px'}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='name' value={name} onChange={onInputChange}/>
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group style={{margin: '5px'}} className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{margin: '20px'}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={onInputChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
    )
}

export default Login;