// import { LOGIN } from '../actions/AuthActions';
import { LOGIN } from '../Action/authAction';
import { LOGOUT } from '../Action/authAction';
// import { LOGOUT } from '../actions/authActions';
const initialState = {
	isUserLoggedIn: false,
	user: null,
	uid: null,
	LoginLoading: false,
	RegisterLoading: false,
	isForgetPasswordLoading: false,
};

function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN: {
			return {
				...state,
				isUserLoggedIn: true,
				user: action.payload,
				uid: action.payload.uid,
			};
		}
		case LOGOUT: {
			localStorage.clear();
			return { ...state, uid: null, user: null };
		}
		case 'LOGIN_LOADER': {
			return {
				...state,
				LoginLoading: action.payload,
			};
		}
		case 'REGISTER_LOADER': {
			return {
				...state,
				RegisterLoading: action.payload,
			};
		}
		case 'FORGET_PASSWORD_LOADER': {
			return {
				...state,
				isForgetPasswordLoading: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}

export default authReducer;
