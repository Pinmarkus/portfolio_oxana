# Oxana Pintea - Psychologist Portfolio

A modern, responsive portfolio website for a professional psychologist, featuring multi-language support and a contact form.

## Features

- **Modern Design**: Clean and professional layout suitable for a psychologist
- **Responsive**: Fully responsive design that works on all devices
- **Multi-language Support**: Language switching between English, Romanian, and Russian
- **Interactive Elements**: Smooth animations, testimonial slider
- **Contact Form**: Email contact form connected to EmailJS
- **Child & Family Protection Specialization**: Detailed section with animated cards and galleries

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/portfolio_oxana.git
   ```

2. **Navigate to the project folder**:
   ```
   cd portfolio_oxana
   ```

3. **Open in a browser**:
   - Simply open the `index.html` file in your browser
   - Or use a local server like Live Server in VS Code

4. **EmailJS Setup (for contact form)**:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a new service connected to your email provider
   - Create an email template with the following variables: name, email, subject, message
   - Update the following in `js/main.js`:
     - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
     - Replace `SERVICE_ID` with your EmailJS service ID
     - Replace `TEMPLATE_ID` with your email template ID

## Project Structure

- **index.html**: Main HTML file
- **css/style.css**: All styles for the website
- **js/main.js**: JavaScript functionality
- **js/translations.js**: Multi-language translations
- **img/**: Folder for images

## Customization

### Colors
The color scheme can be changed by modifying the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6d639d;
    --secondary-color: #9c88b9;
    --accent-color: #b8a9d1;
    --light-color: #f5f5f7;
    --dark-color: #333;
    --text-color: #444;
}
```

### Images
Replace the following images in the `img` folder with your own:
- `hero-bg.jpg`: Background image for the hero section
- `profile.jpg`: Profile photo for the About section
- `specialization1.jpg`, `specialization2.jpg`, `specialization3.jpg`: Images for the specialization gallery

### Content
All website content can be edited in the `js/translations.js` file for each language.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Font Awesome](https://fontawesome.com/) for icons
- [EmailJS](https://www.emailjs.com/) for the contact form
- [AOS](https://michalsnik.github.io/aos/) for scroll animations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

Created with love by LiteSite for Oxana Pintea)