
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "firebase/Firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [modal, setModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // eslint-disable-next-line no-unused-vars
      const user = userCredential.user;

      setEmail('');
      setPassword('');
      setRememberMe(false);
      setAlert({
        show: true,
        message: "Login successfully",
        type: "success",
      });
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 3000);
      history.push('/user')
    } catch (error) {
      setAlert({
        show: true,
        message: 'Wrong password, try again',
        type: "danger",
      });
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 3000);
    }
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetEmail('');
      setAlert({
        show: true,
        message: "Password reset email sent",
        type: "success",
      });
      setModal(false);
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 3000);
    } catch (error) {
      setAlert({
        show: true,
        message: `Error: ${error.message}`,
        type: "danger",
      });
      setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 3000);
    }
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign In</small>
            </div>

            {alert.show && (
              <Alert color={alert.type} fade={false} className="mb-4">
                {alert.message}
              </Alert>
            )}

            <Form role="form" onSubmit={handleLogin}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id="customCheckLogin"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="submit"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>

        <Row className="mt-3">
          
            <>
              <Col xs="6">
                <a
                  className="text-light"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setModal(true);
                  }}
                >
                  <small>Forgot password?</small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <a
                  className="text-light"
                  href="/auth/register"
                >
                  <small>Create new account</small>
                </a>
              </Col>
            </>
        
        </Row>
      </Col>
      

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Reset Password</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleResetPassword}>Send Reset Email</Button>
          <Button color="secondary" onClick={() => setModal(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Login;
