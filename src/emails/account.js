const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "angel107rodriguez@gmail.com",
    subject: "Thanks for joining!",
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "angel107rodriguez@gmail.com",
    subject: "So sorry to see you go!",
    text: `We miss you, ${name}. Is there anything we can do to win you back?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
