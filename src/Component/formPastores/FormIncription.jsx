import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingBasicExample() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Last_name">
        <Form.Control type="Last_name" placeholder="Last_name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="dni">
        <Form.Control type="dni" placeholder="dni" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Fecha_de_inicio">
        <Form.Control type="Fecha_de_inicio" placeholder="Fecha_de_inicio" />
      </FloatingLabel>
    </>
  );
}

export default FormFloatingBasicExample;