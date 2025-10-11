import emailjs from '@emailjs/browser';

// EmailJS configuration
// You'll need to replace these with your actual EmailJS credentials
// Sign up at https://www.emailjs.com/ and get your credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'your_template_id', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key', // Replace with your EmailJS public key
};

// Demo mode - set to false when you have real EmailJS credentials
const DEMO_MODE = true;

// Initialize EmailJS (you can also do this in main.jsx)
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send email function
export const sendEmail = async (formData) => {
  // Demo mode - simulate email sending for testing
  if (DEMO_MODE) {
    console.log('📧 Demo Mode - Email would be sent with following data:');
    console.log('From:', formData.name, '<' + formData.email + '>');
    console.log('Subject:', formData.subject);
    console.log('Message:', formData.message);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success (90% of the time)
    if (Math.random() > 0.1) {
      return {
        success: true,
        message: '✨ Demo Mode: Your message has been simulated successfully! In production, this would send a real email. I\'ll get back to you within 24 hours.',
        data: { demo: true }
      };
    } else {
      // Simulate occasional failure for testing
      return {
        success: false,
        message: '⚠️ Demo Mode: Simulated failure. In production, this would be a real error. Please try again or contact me directly.',
        error: { demo: true }
      };
    }
  }

  // Production mode - real EmailJS integration
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'im.nadeem.silawat@gmail.com', // Your email address
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you within 24 hours.',
      data: response
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact me directly via email.',
      error: error
    };
  }
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Auto-response template for users
export const sendAutoResponse = async (userEmail, userName) => {
  try {
    const autoResponseParams = {
      to_email: userEmail,
      to_name: userName,
      from_name: 'Nadeem Silawat',
      message: `Hi ${userName},\n\nThank you for reaching out to me! I have received your message and will get back to you within 24 hours.\n\nIn the meantime, feel free to check out my projects on GitHub or connect with me on LinkedIn.\n\nBest regards,\nNadeem Silawat\nFull Stack Developer`
    };

    // You would need a separate template for auto-responses
    // For now, we'll just log this functionality
    console.log('Auto-response would be sent to:', userEmail);
    
    return {
      success: true,
      message: 'Auto-response sent'
    };
  } catch (error) {
    console.error('Auto-response failed:', error);
    return {
      success: false,
      error: error
    };
  }
};

export default {
  initializeEmailJS,
  sendEmail,
  validateEmail,
  sendAutoResponse
};