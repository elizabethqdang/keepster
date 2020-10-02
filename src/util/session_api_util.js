export const login = user => {
	return {
		method: 'POST',
		url: '/api/session',
		data: { user }
	}
};

export const signup = user => {
	return {
		method: 'POST',
		url: '/api/user',
		data: { user }
	}
};

export const logout = () => {
	return {
		method: 'DELETE',
		url: '/api/session'
	}
};
