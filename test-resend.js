const { Resend } = require('resend');

const resend = new Resend('re_TQsny2jB_9GirzdYfiUr9D4MNJAIWnXu');

async function sendTestEmail() {
  try {
    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['mundackaltom@gmail.com'],
      subject: 'Test Email from Resend',
      text: 'This is a test email sent from the Resend API.',
    });

    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendTestEmail();