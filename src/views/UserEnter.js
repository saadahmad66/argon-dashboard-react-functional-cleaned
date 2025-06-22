import React, { useState } from 'react';
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
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';  
import { firestore , storage } from 'firebase/Firebase';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

const UserEnter = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const history = useHistory();

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = '';

      if (image) {
        imageUrl = await uploadImgAndGetUrl(image);
        console.log('Image Url', imageUrl);
      }

      await addDoc(collection(firestore, 'users'), {
        username,
        email,
        password,
        country,
        postalCode: parseInt(postalCode, 10),
        about,
        imageUrl,
      });
      setImage(null);
      setProgress(0);
    } catch (error) {
      console.log(error);
    }
    alert('Your information is stored');
    history.push('/user/profile');
  };

  const uploadImgAndGetUrl = (image) => {
    return new Promise((resolve, reject) => {
      if (!image) return reject('No image selected');

      const imageRef = ref(storage, `images/${uuidv4()}_${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            resolve(url);
          }).catch(reject);
        }
      );
    });
  };

  return (
    <div className="d-flex">

      <UserSidebar
        routes={userRoutes}
        logo={{
          innerLink: "/home",
          imgSrc: require('../assets/img/brand/argon-react.png').default,
          imgAlt: "Logo"
        }}
      />

      <div className="flex-1 ml-64 min-h-screen">
        <UserHeader />
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg="8">
              <Card className="bg-white shadow border-0">
                <CardHeader className="bg-transparent">
                  <h3 className="mb-0 text-center">Settings</h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={handleSubmit}>

                    <Row className="mb-3">
                      <Col md="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-username">
                            Username
                          </label>
                          <Input
                            id="input-username"
                            placeholder="Enter your username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

            
                    <Row className="mb-3">
                      <Col md="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-email">
                            Email
                          </label>
                          <Input
                            id="input-email"
                            placeholder="email@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

        
                    <Row className="mb-3">
                      <Col md="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-password">
                            New Password
                          </label>
                          <Input
                            id="input-password"
                            placeholder="Enter new password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-confirm-password">
                            Confirm Password
                          </label>
                          <Input
                            id="input-confirm-password"
                            placeholder="Confirm password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-country">
                            Country
                          </label>
                          <Input
                            id="input-country"
                            placeholder="Enter your country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Row className="mb-3">
                      <Col md="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-postal-code">
                            Postal Code
                          </label>
                          <Input
                            id="input-postal-code"
                            placeholder="Enter your postal code"
                            type="text"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

              
                    <Row className="mb-3">
                      <Col md="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-about">
                            About
                          </label>
                          <Input
                            id="input-about"
                            placeholder="Tell us about yourself"
                            type="textarea"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Row className="mb-3">
                      <Col md="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-image">
                            Upload Profile Picture
                          </label>
                          <Input
                            id="input-image"
                            type="file"
                            onChange={handleImageUpload}
                          />
                          {image && (
                            <img src={URL.createObjectURL(image)} alt="Profile" className="mt-3" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                          )}
                        </FormGroup>
                      </Col>
                    </Row>

                
                    <Row className="mt-4">
                      <Col className="text-center">
                        <Button color="primary" type="submit">
                          Save Changes
                        </Button>
                      </Col>
                    </Row>
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

export default UserEnter;
