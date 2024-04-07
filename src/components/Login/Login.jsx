import {
  Container,
  Row,
  Col,
  Image,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";
import loginImg from "../../assets/images/login.avif";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const Login = () => {
  return (
    <div className="login-page">
      <Container className="mt-5">
        <Row>
          <Col lg={6} className="d-none d-md-block">
            <Image src={loginImg} width={"100%"} />
          </Col>
          <Col lg={6} className="d-flex flex-column justify-content-center align-center">
            <div className="login-content mt-5">
              <div className="heading mb-3 display-4 fw-bold">Welcome back</div>
              <div className="subheading mb-4 fw-medium fs-5">
                Please Enter your Account details
              </div>
            </div>
            <div className="form-section">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <Button 
                type="submit"
                className="col-12 mt-4 btn-lg sign-in"
              >
                Sign In
              </Button>
            </div>
            <div className="login-platform col-12 mt-3 text-center ">
              <Button>
                <FcGoogle />
              </Button>
              <Button>
                
                <FaFacebook />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
