// import React from "react";
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// // core components
// import UserHeader from "components/Headers/UserHeader.js";

// const Setting = () => {
//   return (
//     <>
//       <UserHeader/>
//       <Container fluid className="mt-4">
//         <Row className="justify-content-center">
//           <Col xl="6">
//             <Card className="shadow-sm border-light">
//               <CardHeader className="bg-light border-bottom-0">
//                 <h4 className="mb-0">Settings</h4>
//               </CardHeader>
//               <CardBody>
                // <Form>
                //   <div className="mb-4">
                //     <h6 className="text-muted">Account Settings</h6>
                //   </div>
                //   <Row>
                //     <Col xs="12" className="mb-3">
                //       <FormGroup>
                //         <label htmlFor="input-username">Username</label>
                //         <Input
                //           id="input-username"
                //           placeholder="Username"
                //           type="text"
                //         />
                //       </FormGroup>
                //     </Col>
                //     <Col xs="12" className="mb-3">
                //       <FormGroup>
                //         <label htmlFor="input-email">Email address</label>
                //         <Input
                //           id="input-email"
                //           placeholder="email@example.com"
                //           type="email"
                //         />
                //       </FormGroup>
                //     </Col>
                //     <Col xs="12" className="mb-3">
                //       <FormGroup>
                //         <label htmlFor="input-password">New Password</label>
                //         <Input
                //           id="input-password"
                //           placeholder="New Password"
                //           type="password"
                //         />
                //       </FormGroup>
                //     </Col>
                //     <Col xs="12" className="mb-4">
                //       <FormGroup>
                //         <label htmlFor="input-confirm-password">Confirm Password</label>
                //         <Input
                //           id="input-confirm-password"
                //           placeholder="Confirm Password"
                //           type="password"
                //         />
                //       </FormGroup>
                //     </Col>
                //   </Row>
                //   <Button
                //     color="primary"
                //     block
                //   >
                //     Save Changes
                //   </Button>
                // </Form>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Setting;




import React from 'react';
import 'App.css';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import UserSidebar from 'components/Sidebar/UserSidebar';
import UserHeader from "components/Headers/UserHeader";
import userRoutes from 'routes/userRoutes';

const Settings = () => {
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
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              {/* Settings Form */}
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Settings</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                <Form>
                  <div className="mb-4">
                    <h6 className="text-muted">Account Settings</h6>
                  </div>
                  <Row>
                    <Col xs="12" className="mb-3">
                      <FormGroup>
                        <label htmlFor="input-username">Username</label>
                        <Input
                          id="input-username"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" className="mb-3">
                      <FormGroup>
                        <label htmlFor="input-email">Email address</label>
                        <Input
                          id="input-email"
                          placeholder="email@example.com"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" className="mb-3">
                      <FormGroup>
                        <label htmlFor="input-password">New Password</label>
                        <Input
                          id="input-password"
                          placeholder="New Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" className="mb-4">
                      <FormGroup>
                        <label htmlFor="input-confirm-password">Confirm Password</label>
                        <Input
                          id="input-confirm-password"
                          placeholder="Confirm Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button
                    color="primary"
                    block
                  >
                    Save Changes
                  </Button>
                </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Settings;
