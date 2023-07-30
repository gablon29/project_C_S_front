import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  

  return (
    <div>
    <Form>
      <Form.Group style={{margin: '10px'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{margin: '20px'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group style={{margin: '5px'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{margin: '20px'}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default App
