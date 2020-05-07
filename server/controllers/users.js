const mongoose = require('mongoose');
// ObjectId = mongoose.Schema.Types.ObjectId;
const bcrypt = require('bcrypt');
const User = mongoose.model('User');

module.exports = {
    login(req, res) {
        User.findOne({email: req.body.email}, (err, user) => {
           if(!user) {
               return res.json({
                   result: 'failed'
               });
           }

           bcrypt.compare(req.body.password, user.password, (err, result) => {
               if(result) {
                   req.session.userId = user._id;
                   return res.json({
                       result: 'success',
                                user
                       
                   });
               }

               res.json({
                   result: 'failed'
               })
           })
        })
    },

    logout(req, res) {

        if (req.session) {
            return res.json({
                result: 'user logged out'
            });
        }
    },

    getCurrentUser(req, res) {
        const userId = req.session.userId;
        if(!userId) {
            return res.json({ user: null});
        }

        User.findById(userId, (err, user) => {
            res.json({
                user
            });
        });
    },

    getUsers(_, res) {
        User.find({}, (err, users) => {
            if(err) res.json(err);

            res.json({
                result: 'success',
                users
            });
        });
    },

    getOneUser: (req,res) => {
        User.findById(req.params.id, (err, user) => {
            if(err){
                return res.json({
                    errors: err
                });
            } else {
                res.json({
                    result: 'success',
                    user
                });
            }
        });
    },
    createUser(req, res) {
        if(!req.body.password) {
            res.json({
                result: 'failed'
            });
        }

        bcrypt.hash(req.body.password, 8, (err, hash) => {
            User.create({
                username: req.body.username, 
                email: req.body.email, 
                password: hash
            }, function(err, user) {
                // console.log(req.session);
                req.session.userId = user._id;
                req.session.touch();
                res.json({
                    result: 'success',
                    user
                });
            })
        })
    },
    // createUser: (req,res) => {
    //     User.create(req.body, (err, user) => {
    //         if(err){
    //             return res.json({
    //                 errors: err,
    //             })
    //         } else {
    //             res.json({
    //                 result: 'success',
    //                 user
    //             });
    //         }
    //     });
    // },
    deleteUser(req, res){
        User.findByIdAndDelete(req.params.id, 
            (err) => {
                if(err){
                    return res.json({
                        errors: err
                    });
                } else {
                    res.json({
                        result: 'success',
                    });
                }
            });

    },

    createTask(req, res) {
        User.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    tasks: req.body
                }
            },
            {
                new: true,
                runValidators: true
            }
        )
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    updateTask(req, res) {
        User.updateOne(
          {
            _id: req.params.userId,
            'tasks._id': req.params.taskId
          },
          {
            $set: {
              'tasks.$.completed': req.body.completed
            }
          },
          {
            runValidators: true
          }
        )
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
      },
    deleteTask(req, res) {
        User.findByIdAndUpdate(
            req.params.userId,
            {
                $pull: {
                    tasks: {
                        _id: req.params.taskId
                    }
                }
            },
            {
                new: true
            }
        )
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    }
}