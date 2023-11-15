const connection = require('./connection');

const getAllUser = async () => {
  const [user] = await connection.execute('SELECT * FROM users');
  return user;
};

const getOneUser = async (id) => {
  const [oneUser] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
  return oneUser;
};

const createUser = async (user) => {
  const { nome, email, telefone, password } = user;
  //const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO users(nome, email, telefone, password) VALUES (?, ?, ?, ?)';

  const [createdUser] = await connection.execute(query, [nome, email, telefone, password]);
  return {insertId: createdUser.insertId};
};

const deleteUser = async (id) => {
  const [removedUser] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
  return removedUser;
};

const updateUser = async (id, user) => {
  const { nome, email, telefone, password } = user;
  
  const query = 'UPDATE users SET nome = ?, email = ?, telefone = ?, password = ? WHERE id = ?';

  const [updatedUser] = await connection.execute(query, [nome, email, telefone, password, id]);
  return updatedUser;
};

module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
};
