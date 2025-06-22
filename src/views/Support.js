import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import UserSidebar from 'components/Sidebar/UserSidebar';
import UserHeader from 'components/Headers/UserHeader';
import userRoutes from 'routes/userRoutes'; // Adjust import as necessary

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Click on the "Forgot Password" link on the login page and follow the instructions to reset your password.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can contact support by filling out the contact form below or sending an email to support@example.com.'
  },
  {
    question: 'Where can I find the user manual?',
    answer: 'The user manual is available in the "Help" section of the dashboard.'
  }
];

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Support request submitted');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex">
      <UserSidebar
        routes={userRoutes}
        logo={{
          innerLink: "/home",
          imgSrc: require('../assets/img/brand/argon-react.png').default,
          imgAlt: "Logo"
        }}
      />
      <div className="flex-1 ml-64">
        <UserHeader />
        <Container fluid className="mt--7">
          <Row>
            <Col xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Support</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Contact Form */}
                  <Form onSubmit={handleSubmit}>
                    <h6 className="heading-small text-muted mb-4">Contact Support</h6>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-name">
                            Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-name"
                            placeholder="Your Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-email">
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Your Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label className="form-control-label" htmlFor="input-message">
                        Message
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-message"
                        placeholder="Your Message"
                        type="textarea"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                  </Form>

                  {/* FAQ Section */}
                  <div className="mt-5">
                    <h6 className="heading-small text-muted mb-4">Frequently Asked Questions</h6>
                    <ListGroup>
                      {faqs.map((faq, index) => (
                        <ListGroupItem key={index}>
                          <h5>{faq.question}</h5>
                          <p>{faq.answer}</p>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Support;
