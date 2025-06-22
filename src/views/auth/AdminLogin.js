
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "firebase/Firebase";
// import { useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [alert, setAlert] = useState({ show: false, message: '', type: '' });
//   const history = useHistory();

//   const handleAdmin = async (e) => {
//     e.preventDefault();

//     const adminEmail = "msaadiqbal88@gmail.com";

//     try {
//       if (email === adminEmail) {
//         const AdminLogin = await signInWithEmailAndPassword(auth, email, password);
//         console.log(AdminLogin.user);
//         setAlert({
//           show: true,
//           message: 'Successfully logged in!',
//           type: 'success',
//         });
//         setTimeout(() => {
//           setAlert({ show: false, message: '', type: '' });
//           history.push('/admin');
//         }, 3000);
//       } else {
//         setAlert({
//           show: true,
//           message: 'Wrong. Only the admin can log in.',
//           type: 'danger',
//         });
//         setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
//       }
//     } catch (error) {
//       setAlert({
//         show: true,
//         message: 'Wrong. Only the admin can log in.',
//         type: 'danger',
//       });
//       setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
//     }
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//         <div className="text-center text-gray-600 mb-4">
//           <small>Admin Login</small>
//         </div>
//         {alert.show && (
//           <div className={`mb-4 p-3 text-center text-white rounded ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
//             {alert.message}
//           </div>
//         )}
//         <form onSubmit={handleAdmin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <div className="flex items-center border-b border-gray-400 py-2">
//               <i className="ni ni-email-83 mr-3 text-gray-500"></i>
//               <input
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 type="email"
//                 className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <div className="flex items-center border-b border-gray-400 py-2">
//               <i className="ni ni-lock-circle-open mr-3 text-gray-500"></i>
//               <input
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 type="password"
//                 className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="inline-flex items-center">
//               <input type="checkbox" className="form-checkbox text-indigo-600" />
//               <span className="ml-2 text-gray-700">Remember me</span>
//             </label>
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-gray-900 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;












import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase/Firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";
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
  Alert,
  Col,
} from "reactstrap";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const history = useHistory();

  const handleAdmin = async (e) => {
    e.preventDefault();

    const adminEmail = "msaadiqbal88@gmail.com";

    try {
      if (email === adminEmail) {
        const AdminLogin = await signInWithEmailAndPassword(auth, email, password);
        console.log(AdminLogin.user);
        setAlert({
          show: true,
          message: 'Successfully logged in!',
          type: 'success',
        });
        setTimeout(() => {
          setAlert({ show: false, message: '', type: '' });
          history.push('/admin');
        }, 3000);
      } else {
        setAlert({
          show: true,
          message: 'Wrong. Only the admin can log in.',
          type: 'danger',
        });
        setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
      }
    } catch (error) {
      setAlert({
        show: true,
        message: 'Wrong. Only the admin can log in.',
        type: 'danger',
      });
      setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
    }
  }

  return (
    <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Admin Login</small>
          </div>
          {alert.show && (
            <Alert color={alert.type} fade={false} className="mb-4">
              {alert.message}
            </Alert>
          )}
          <Form role="form" onSubmit={handleAdmin}>
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
            <div className="text-center">
              <Button
                className="my-4"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdminLogin;
