const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const smtpTransport = require('nodemailer-smtp-transport')
const path = require('path')
const { config } = require('dotenv')

config()

var transport = nodemailer.createTransport(({
  host: process.env.HOST,
  port: process.env.PORT_TRANSPORT,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS
  }
}));

const handlebarOptions = {

  viewEngine: {

    extName: '.html',

    partialsDir: path.resolve('./src/resources/mail/auth/'),

    layoutsDir: path.resolve('./src/resources/mail/auth/'),

    defaultLayout: 'forgot_password.html',

  },

  viewPath: path.resolve('./src/resources/mail/auth/'),

  extName: '.html',

};



transport.use('compile', hbs(handlebarOptions));




module.exports = transport