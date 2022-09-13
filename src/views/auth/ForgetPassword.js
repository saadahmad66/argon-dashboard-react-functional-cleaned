import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	FormGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	InputGroup,
	Navbar,
	Nav,
	Container,
	Media,
	Col,
	Card,
	CardBody,
	Button,
	Spinner,
} from 'reactstrap';
import { ResetPassword } from '../../Redux/Action/authAction';

const ForgetPassword = () => {
	const dispatch = useDispatch();
	const [forgetEmail, setForgetEmail] = useState('');

	const { isForgetPasswordLoading } = useSelector(state => state.authUser);
	// console.log(forgetEmail, 'forgetEmail');
	return (
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
							dispatch(ResetPassword(forgetEmail));
						}}
					>
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
										setForgetEmail(e.target.value)
									}
									required
								/>
							</InputGroup>
						</FormGroup>

						<FormGroup>
							<div className='text-center'>
								<Button
									className='mt-4'
									color='primary'
									type='submit'
								>
									{isForgetPasswordLoading ? (
										<Spinner size={'sm'} />
									) : (
										'Forget Password'
									)}
								</Button>
							</div>
						</FormGroup>
					</Form>
				</CardBody>
			</Card>
		</Col>
	);
};

export default ForgetPassword;
