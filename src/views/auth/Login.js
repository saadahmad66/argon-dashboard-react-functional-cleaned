/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { useState, useEffect } from 'react';
import { doLogin } from 'Redux/Action/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
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
	Spinner,
	Col,
} from 'reactstrap';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	let history = useHistory();
	const [cookies, setCookie] = useCookies(['email', 'password']);

	const { LoginLoading } = useSelector(state => state.authUser);

	const handleRememberMe = () => {
		setCookie('email', email, { path: '/' });
		setCookie('password', password, { path: '/' });
	};

	return (
		<>
			<Col lg='5' md='7'>
				<Card className='bg-secondary shadow border-0'>
					<CardBody className='px-lg-5 py-lg-5'>
						<div className='text-center text-muted mb-4'>
							<small>Sign in</small>
						</div>
						<Form
							role='form'
							onSubmit={e => {
								e.preventDefault();
								if(email&&password){
									dispatch(doLogin(email, password));
								}else if(email && !password){
									if(cookies?.password){
									dispatch(doLogin(email, cookies?.password));
								}
								}else if(!email && password){
									if(cookies?.email){
										dispatch(doLogin(cookies?.email, password));
									}
								}else if(!email &&!password){
									if(cookies?.email&&cookies?.password){
									dispatch(doLogin(cookies?.email, cookies?.password));}
								}
								
							}}
						>
							<FormGroup className='mb-3'>
								<InputGroup className='input-group-alternative'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-email-83' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Email'
										type='email'
										defaultValue={cookies?.email}
										autoComplete='new-email'
										onChange={e => setEmail(e.target.value)}
										// onChange={e =>
										// 	setEmail(prevState => {
										// 		prevState[e.target.name] =
										// 			e.target.value;
										// 	})
										// }
										required
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className='input-group-alternative'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-lock-circle-open' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Password'
										type='password'
										defaultValue={cookies?.password}
										autoComplete='new-password'
										onChange={e =>
											setPassword(e.target.value)
										}
										// onChange={e =>
										// 	setPassword(prevState => {
										// 		prevState[e.target.name] =
										// 			e.target.value;
										// 	})
										// }
										required
									/>
								</InputGroup>
							</FormGroup>
							<div className='custom-control custom-control-alternative custom-checkbox'>
								<input
									className='custom-control-input'
									id=' customCheckLogin'
									type='checkbox'
									onChange={handleRememberMe}
								/>
								<label
									className='custom-control-label'
									htmlFor=' customCheckLogin'
								>
									<span className='text-muted'>
										Remember me
									</span>
								</label>
							</div>
							<div className='text-center'>
								<Button
									className='my-4'
									color='primary'
									type='submit'
								>
									{LoginLoading ? (
										<Spinner size='sm' />
									) : (
										'Sign in'
									)}
								</Button>
							</div>
						</Form>
					</CardBody>
				</Card>
				<Row className='mt-3'>
					<Col xs='6'>
						<a
							className='text-light'
							href='#pablo'
							onClick={e => {
								e.preventDefault();
								// history.push('/auth/Register');
								history.push('/auth/ForgetPassword');
							}}
						>
							<small>Forgot password?</small>
						</a>
					</Col>
					<Col className='text-right' xs='6'>
						<a
							className='text-light'
							href='#pablo'
							onClick={e => {
								e.preventDefault();
								history.push('/auth/Register');
							}}
						>
							<small>Create new account</small>
						</a>
					</Col>
				</Row>
			</Col>
		</>
	);
};

export default Login;
