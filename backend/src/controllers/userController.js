const userModel = require('../models/userModel');

const getAllUser = async (_request, response) => {
  const user = await userModel.getAllUser();
  return response.status(200).json(user);
};

const getOneUser = async (request, response) => {  
  const { id } = request.params;

  const oneUser = await userModel.getOneUser(id);
  return response.status(200).json(oneUser);
};

const createUser = async (request, response) => {
  const createdUser = await userModel.createUser(request.body);
  return response.status(201).json(createdUser);
};

const deleteUser = async (request, response) => {
  const { id } = request.params;

  await userModel.deleteUser(id);
  return response.status(204).json();
};

const updateUser = async (request, response) => {
  const { id } = request.params;

  await userModel.updateUser(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
};
