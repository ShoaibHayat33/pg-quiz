export const failed = (res, code, errors) => {
	const response = {
		status: false,
		errors,
		data: null
	};

	res.status(code);
	res.type('application/json');
	res.send(response);
	return res;
};

export const success = (res, code, data) => {
	const response = {
		status: true,
		errors: null,
		data
	};

	res.status(code);
	res.type('application/json');
	res.send(response);
	return res;
};