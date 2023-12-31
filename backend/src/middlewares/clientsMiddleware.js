const validateFieldNome = (request, response, next) => {
  const { body } = request;

  if (body.email === undefined) {
    return response.status(400).json({ message: 'The field "email" is required' });
  }

  if (body.email === '') {
    return response.status(400).json({ message: 'email cannot be empty' });
  }

  next();
};

const validateFieldStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response.status(400).json({ message: 'The field "status" is required' });
  }

  if (body.status === '') {
    return response.status(400).json({ message: 'status cannot be empty' });
  }

  next();
};

module.exports = {
  validateFieldStatus,
  validateFieldNome,
};
