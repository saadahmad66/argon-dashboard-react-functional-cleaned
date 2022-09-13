import ForgetPassword from 'views/auth/ForgetPassword';
import firebase from '../../config/Firebase';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const doLogin = (email, password) => async dispatch => {
	// console.log(email, 'emailinAction doLogIn');
	// console.log(password, 'password in Pssword');
	try {
		dispatch(LogInLoader(true));
		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(userCredential => {
				// Signed in
				dispatch(LogInLoader(false));
				var user = userCredential.user;
				dispatch({
					type: LOGIN,
					payload: user,
				});
			});
	} catch (error) {
		dispatch(LogInLoader(false));
		var errorCode = error.code;
		var errorMessage = error.message;
	}
};

export const doLogOut = () => async dispatch => {
	try {
		//Firebase
		const res = await firebase.auth().signOut();
		// dispatch(LogOutLoader(true));
		localStorage.clear();
		firebase
			.auth()
			.signOut()
			.then(data => {
				dispatch({ type: LOGOUT, uid: '', error: '' });
				// dispatch(LogOutLoader(false));
			});
		// .catch(error => {
		// 	dispatch({ type: LOGOUT_FAIL, uid: '', error: error });
		// });
	} catch (error) {
		// dispatch(LogOutLoader(false));
		console.log('catchInAuthAction', error);
	}
};

export const doSignUp = (credentials, password, history) => {
	return async dispatch => {
		dispatch(RegisterLoader(true));
		await firebase
			.auth()
			.createUserWithEmailAndPassword(credentials.registerEmail, password)
			.then(data => {
				console.log(data, 'data in then');
				firebase
					.firestore()
					.collection('users')
					.doc(data.user.uid)
					.set({ ...credentials })
					.then(res => {
						console.log(res, 'res in then');

						dispatch(RegisterLoader(false));
						dispatch({ type: 'REGISTER' });
						history.push('/auth/login');
						// window.location.pathname = "/login";
						dispatch({ type: 'ACTION_REQUEST_END' });
						alert('Account Created Successfully');
					})
					.catch(err => {
						dispatch(RegisterLoader(false));
						alert(err, 'danger');
					});
			});
	};
};

export const ResetPassword = email => async dispatch => {
	// console.log(email, '===>email');
	dispatch(ForgetPasswordLoader(true));

	await firebase
		.auth()
		.sendPasswordResetEmail(email)
		.then(res => {
			alert('ResetPassword');
			dispatch(ForgetPasswordLoader(false));
		})
		.catch(err => {
			alert(err.message);
			dispatch(ForgetPasswordLoader(false));
		});
};

//LoginLoader
export const LogInLoader = val => async dispatch => {
	dispatch({
		type: 'LOGIN_LOADER',
		payload: val,
	});
};

export const RegisterLoader = val => async dispatch => {
	dispatch({
		type: 'REGISTER_LOADER',
		payload: val,
	});
};

export const ForgetPasswordLoader = val => async dispatch => {
	dispatch({
		type: 'FORGET_PASSWORD_LOADER',
		payload: val,
	});
};
