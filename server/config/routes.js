const usersController = require('../controllers/users');


module.exports = app => {
    app.get('/api/users',
    usersController.getUsers);

    app.get('/api/users/current',
    usersController.getCurrentUser);

    // app.get('/api/users/:id',
    // usersController.getOneUser);

    app.post('/api/users',
    usersController.createUser);

    app.post('/api/users/login',
    usersController.login);

    app.delete('/api/users/:id',
    usersController.deleteUser);

    app.post('/api/users/:id/tasks',
    usersController.createTask);

    app.put('/api/users/:userId/tasks/:taskId/',
    usersController.updateTask);

    app.delete('/api/users/:userId/tasks/:taskId',
    usersController.deleteTask);

    app.get('/api/users/logout',
    usersController.logout);
}