const
	mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs'),
	userSchema = new mongoose.Schema({
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	})

// ADDS A METHOD TO A USER DOCUMENT OBJ TO CREATE HASHED PW
userSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// ADDS A METHOD TO A USER DOCUMENT OBJECT TO CHECK IF PROVIDED PASSWORD IS CORRECT
userSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password)
}

// MIDDLEWARE: BEFORE SAVING, CHECK IF PASSWORD WAS CHANGED,
// IF SO, ENCRYPT NEW PASSWORD BEFORE SAVING:
userSchema.pre('save', function (next) {
	if (this.isModified('password')) {
		this.password = this.generateHash(this.password)
	}
	next()
})

const User = mongoose.model('User', userSchema)
module.exports = User