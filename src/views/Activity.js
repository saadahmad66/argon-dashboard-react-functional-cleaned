// import React from 'react';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Container,
//   Row,
//   Col,
//   Badge,
//   ListGroup,
//   ListGroupItem
// } from 'reactstrap';
// import UserHeader from 'components/Headers/UserHeader.js';

// const activities = [
//   {
//     id: 1,
//     type: 'Login',
//     description: 'User logged in from IP address 192.168.1.1',
//     date: '2024-09-03 08:00 AM'
//   },
//   {
//     id: 2,
//     type: 'Profile Update',
//     description: 'User updated their profile picture',
//     date: '2024-09-02 06:00 PM'
//   },
//   {
//     id: 3,
//     type: 'Password Change',
//     description: 'User changed their password',
//     date: '2024-09-01 12:00 PM'
//   }
// ];

// const Activity = () => {
//   return (
//     <>
//       <UserHeader />
//       <Container fluid className="mt-5">
//         <Row>
//           <Col xl="12">
//             <Card className="shadow-sm border-0 rounded">
//               <CardHeader className="bg-primary text-white">
//                 <h4 className="mb-0">Activity Log</h4>
//               </CardHeader>
//               <CardBody>
//                 <ListGroup flush>
//                   {activities.map(activity => (
//                     <ListGroupItem
//                       key={activity.id}
//                       className="border-0 px-4 py-3 d-flex justify-content-between align-items-center"
//                     >
//                       <div className="d-flex align-items-center">
//                         <Badge color="info" pill className="mr-3">
//                           {activity.type}
//                         </Badge>
//                         <div>
//                           <p className="mb-1">{activity.description}</p>
//                           <small className="text-muted">{activity.date}</small>
//                         </div>
//                       </div>
//                     </ListGroupItem>
//                   ))}
//                 </ListGroup>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Activity;





import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Badge,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import UserSidebar from 'components/Sidebar/UserSidebar';
import UserHeader from 'components/Headers/UserHeader';
import userRoutes from 'routes/userRoutes'; // Adjust import as necessary

const activities = [
  {
    id: 1,
    type: 'Login',
    description: 'User logged in from IP address 192.168.1.1',
    date: '2024-09-03 08:00 AM'
  },
  {
    id: 2,
    type: 'Profile Update',
    description: 'User updated their profile picture',
    date: '2024-09-02 06:00 PM'
  },
  {
    id: 3,
    type: 'Password Change',
    description: 'User changed their password',
    date: '2024-09-01 12:00 PM'
  }
];

const Activity = () => {
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
              <Card className="shadow-sm border-0 rounded">
                <CardHeader className="bg-primary text-white">
                  <h4 className="mb-0">Activity Log</h4>
                </CardHeader>
                <CardBody>
                  <ListGroup flush>
                    {activities.map(activity => (
                      <ListGroupItem
                        key={activity.id}
                        className="border-0 px-4 py-3 d-flex justify-content-between align-items-center"
                      >
                        <div className="d-flex align-items-center">
                          <Badge color="info" pill className="mr-3">
                            {activity.type}
                          </Badge>
                          <div>
                            <p className="mb-1">{activity.description}</p>
                            <small className="text-muted">{activity.date}</small>
                          </div>
                        </div>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Activity;
