//import { SMTPClient } from 'emailjs';
const emailjs = require('emailjs');
const SMTPClient = emailjs.SMTPClient;

const client = new SMTPClient({
  user: 'username',
  password: 'password',
  host: 'smtp.exmail.qq.com',
  ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
client.send(
  {
    text: 'i hope this works',
    from: 'huangjian@minieye.cc',
    to: '1342042894@qq.com',
    cc: '1342042894@qq.com',
    subject: 'testing emailjs',
  },
  (err, message) => {
    console.log(err || message);
  }
);
