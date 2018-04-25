var mongoose  = require('mongoose');
var bcrypt    = require('bcrypt');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true // removes whitespace
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

var ProfileSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true // removes whitespace
  },
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  middle_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  address_street_1: {
    type: String,
    required: true,
    trim: true
  },
  address_street_2: {
    type: String,
    required: true,
    trim: true
  },
  address_city: {
    type: String,
    required: true,
    trim: true
  },
  address_state: {
    type: String,
    required: true,
    trim: true
  },
  address_zip: {
    type: String,
    required: true,
    trim: true
  },
  school_name: {
    type: String,
    required: true,
    trim: true
  },
  school_city: {
    type: String,
    required: true,
    trim: true
  },
  school_state: {
    type: String,
    required: true,
    trim: true
  },
  parent_name: {
    type: String,
    required: true,
    trim: true
  },
  parent_email: {
    type: String,
    required: true,
    trim: true
  },
  signature: {
    type: String,
    required: true,
    trim: true
  }
});

// Authenticate input with db docs
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email })
    .exec(function(error, user) {
      // Error handling
      if (error) {
        return callback(error);
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }

      // Compare password
      bcrypt.compare(password, user.password, function(error, result) {
        if (result === true) {
          return callback(null, user); // null mapping to error var meaning "no error"
        } else {
          return callback();
        }
      });
    });
}

// Hash password, prior to saving in database
UserSchema.pre('save', function(next) {
  // get user object
  var user = this; // user entered info in signup form
  // hash password
  bcrypt.hash(user.password, 10, function(err, hash) {
    // error handler
    if (err) {
      return next(err);
    }

    // Overwrite password with hash
    user.password = hash;
    next();
  });
});

// Export model
var User = mongoose.model('User', UserSchema);
var Profile = mongoose.model('Profle', ProfileSchema);
module.exports = User;
module.exports = Profile;
