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
	Spinner,
} from 'reactstrap';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doSignUp } from 'Redux/Action/authAction';
import { useHistory } from 'react-router-dom';

const Register = () => {
	const dispatch = useDispatch();
	const [registerName, setRegisterName] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const history = useHistory();
	const { RegisterLoading } = useSelector(state => state.authUser);

	return (
		<>
			<Col lg='6' md='8'>
				<Card className='bg-secondary shadow border-0'>
					<CardBody className='px-lg-5 py-lg-5'>
						<div className='text-center text-muted mb-4'>
							<small>Sign up</small>
						</div>
						<Form
							role='form'
							onSubmit={e => {
								e.preventDefault();
								let obj = {
									registerEmail,
									registerName,
								};
								dispatch(
									doSignUp(obj, registerPassword, history)
								);
							}}
						>
							<FormGroup>
								<InputGroup className='input-group-alternative mb-3'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-hat-3' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Name'
										type='text'
										// value={registerName}
										onChange={e =>
											setRegisterName(e.target.value)
										}
										required
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className='input-group-alternative mb-3'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-email-83' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Email'
										type='email'
										autoComplete='new-email'
										// value={registerEmail}
										onChange={e =>
											setRegisterEmail(e.target.value)
										}
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
										autoComplete='new-password'
										// value={registerPassword}
										onChange={e =>
											setRegisterPassword(e.target.value)
										}
										required
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								{/* 	<Row className='my-4'>
									<Col xs='12'>
										<div className='custom-control custom-control-alternative custom-checkbox'>
											<input
												className='custom-control-input'
												id='customCheckRegister'
												type='checkbox'
											/>
											<label
												className='custom-control-label'
												htmlFor='customCheckRegister'
											>
												<span className='text-muted'>
													I agree with the{' '}
													<a
														href='#pablo'
														onClick={e =>
															e.preventDefault()
														}
													>
														Privacy Policy
													</a>
												</span>
											</label>
										</div>
									</Col>
								</Row> */}
								<div className='text-center'>
									<Button
										className='mt-4'
										color='primary'
										type='submit'
										// onClick={}
									>
										{RegisterLoading ? (
											<Spinner size={'sm'} />
										) : (
											'Create account'
										)}
									</Button>
								</div>
							</FormGroup>
						</Form>
					</CardBody>
				</Card>
			</Col>
		</>
	);
};

export default Register;
