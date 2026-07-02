# Ravi Bairagi - MERN Stack Developer Portfolio

A premium, modern, fully responsive personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no libraries - just clean, production-level code.

## 🌟 Features

- **Beautiful Animated Loader** - Smooth loading animation with progress bar
- **Sticky Glass Navbar** - Glassmorphism effect with scroll detection
- **Hero Section** - Typing animation, floating tech icons, animated blobs
- **About Section** - Professional profile with animated statistics
- **Skills Section** - Categorized skill cards with progress bars and glow effects
- **Experience Timeline** - Modern vertical timeline with technology badges
- **Projects Section** - Beautiful project cards with tilt effect and hover animations
- **Certificates Section** - Elegant certificate cards with icons
- **Education Section** - Timeline-style education display
- **Contact Section** - Glassmorphism contact form with social links
- **Custom Cursor** - Interactive cursor with hover effects (desktop)
- **Particle Background** - Animated floating particles with connections
- **Scroll Animations** - Intersection Observer-based fade-in animations
- **Parallax Effects** - Mouse movement parallax on hero blobs
- **Magnetic Buttons** - Interactive button hover effects
- **Fully Responsive** - Optimized for desktop, laptop, tablet, and mobile
- **Dark Theme** - Premium dark theme with cyan, purple, and accent colors
- **SEO Optimized** - Semantic HTML with meta tags
- **Performance Optimized** - Lazy loading, debounced scroll handlers

## 🎨 Design Specifications

### Color Palette
- **Primary Color:** #00F5FF (Cyan)
- **Secondary Color:** #8B5CF6 (Purple)
- **Accent Color:** #00FF94
- **Background Color:** #050816 (Very Dark)
- **Surface Color:** #0a0f1e

### Typography
- **Primary Font:** Poppins (Google Fonts)
- **Secondary Font:** Space Grotesk (Google Fonts)

### Design Inspiration
- Brittany Chiang Portfolio
- Adrian Hajdin Portfolio
- Awwwards websites
- Framer websites

## 📁 Project Structure

```
portfolio/
│── index.html              # Main HTML file
│── README.md               # Project documentation
│── css/
│      style.css            # Base styles, variables, layout
│      animation.css        # All animations (loader, scroll, hover, cursor)
│      responsive.css       # Responsive design for all devices
│── js/
│      script.js            # Main JavaScript functionality
│      particles.js         # Particle background system
│── assets/
│      images/              # Image assets
│      icons/               # Icon assets
│      resume/              # Resume file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/ravibairagi17/portfolio.git
   cd portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     # Right-click on index.html and select "Open with Live Server"
     ```

3. **Access the portfolio**
   - Navigate to `http://localhost:8000` (or your chosen port)

## 📝 Customization

### Personal Information

Update the following in `index.html`:

1. **Name and Contact Info**
   - Search for "Ravi Bairagi" and replace with your name
   - Update email: `ravibairagi1707@gmail.com`
   - Update phone: `+91-9098506707`
   - Update social links: GitHub, LinkedIn

2. **About Section**
   - Update the about description with your personal bio
   - Modify highlight items and statistics

3. **Skills Section**
   - Add/remove skills in the appropriate categories
   - Update progress percentages (0-100)
   - Modify skill icons using Font Awesome classes

4. **Experience Section**
   - Update company names, dates, and responsibilities
   - Add/remove timeline items
   - Update technology badges

5. **Projects Section**
   - Replace project details with your own projects
   - Update tech stack badges
   - Add live demo and GitHub links
   - Replace project images in the `assets/images/` folder

6. **Certificates Section**
   - Update certificate names, issuers, and dates
   - Add/remove certificate cards

7. **Education Section**
   - Update degree, institution, and dates
   - Add/remove education timeline items

8. **Contact Section**
   - Update contact information
   - Modify Google Maps embed location
   - Update form handling (currently uses mailto)

### Color Customization

Update CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #00F5FF;      /* Change primary color */
    --secondary-color: #8B5CF6;    /* Change secondary color */
    --accent-color: #00FF94;       /* Change accent color */
    --background-color: #050816;   /* Change background color */
    /* ... more variables ... */
}
```

### Font Customization

Update Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont1:wght@300;400;500;600;700;800&family=YourFont2:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update CSS variables:

```css
:root {
    --font-primary: 'YourFont1', sans-serif;
    --font-secondary: 'YourFont2', sans-serif;
}
```

## 🎯 Key Features Explained

### Custom Cursor
- Desktop-only feature
- Follows mouse movement with smooth trailing effect
- Expands on hover over interactive elements
- Automatically disabled on mobile/touch devices

### Particle System
- Animated floating particles in background
- Particles connect with lines when close
- Mouse interaction repels particles
- Performance-optimized for different devices

### Typing Animation
- Rotates through different job titles
- Smooth typing and deleting effect
- Configurable text array in `script.js`

### Scroll Animations
- Elements fade in as they enter viewport
- Uses Intersection Observer API
- Staggered delays for sequential animations
- Respects `prefers-reduced-motion` preference

### Magnetic Buttons
- Buttons follow cursor slightly on hover
- Creates engaging interactive feel
- Disabled on touch devices

### Tilt Effect
- Project cards tilt based on mouse position
- 3D perspective effect
- Smooth transitions

## 📱 Responsive Breakpoints

- **Desktop:** 1920px+
- **Laptop:** 1366px - 1919px
- **Tablet:** 768px - 1365px
- **Mobile:** 480px - 767px
- **Small Mobile:** 320px - 479px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimization

- Lazy loading for images
- Debounced scroll handlers
- Intersection Observer for scroll animations
- CSS animations instead of JavaScript where possible
- Optimized particle count based on device performance
- Reduced motion support for accessibility

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus states for interactive elements
- Reduced motion support
- High contrast color scheme
- Screen reader friendly

## 🔧 Development

### Adding New Sections

1. Add HTML section in `index.html`
2. Add styles in `css/style.css`
3. Add animations in `css/animation.css`
4. Add responsive styles in `css/responsive.css`
5. Add JavaScript functionality in `js/script.js`

### Modifying Animations

Edit `css/animation.css` for:
- Keyframe animations
- Scroll animation classes
- Hover effects
- Transition timings

### Adding New Particles

Edit `js/particles.js` to:
- Change particle count
- Modify particle behavior
- Add new particle effects
- Adjust connection distances

## 📦 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Access at `https://username.github.io/repository-name`

### Netlify

1. Connect GitHub repository to Netlify
2. Deploy automatically on push
3. Custom domain available

### Vercel

1. Import project from GitHub
2. Automatic deployment
3. Preview URLs for pull requests

### Traditional Hosting

1. Upload all files to web server
2. Ensure `index.html` is in root directory
3. All CSS and JS files must maintain folder structure

## 🐛 Troubleshooting

### Particles not showing
- Check if JavaScript is enabled
- Ensure `particles.js` is loaded correctly
- Check browser console for errors

### Animations not working
- Verify CSS files are linked correctly
- Check for JavaScript errors in console
- Ensure no CSS conflicts

### Mobile menu not opening
- Check hamburger click event listener
- Verify CSS media queries are correct
- Test on actual mobile device

### Custom cursor not visible
- Feature is disabled on mobile by design
- Check if screen width > 768px
- Verify cursor CSS is not overridden

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Ravi Bairagi**
- MERN Stack Developer
- Email: ravibairagi1707@gmail.com
- GitHub: https://github.com/ravibairagi17
- LinkedIn: https://linkedin.com/in/ravibairagi17/

## 🙏 Acknowledgments

- Google Fonts for typography
- Font Awesome for icons
- Design inspiration from Brittany Chiang and Adrian Hajdin
- Modern web design trends and best practices

## 📞 Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Contact via email
- Connect on LinkedIn

---

**Built with ❤️ using HTML, CSS, and JavaScript**
