# DevOps Engineer Portfolio

A modern, responsive portfolio website for Alex Johnson - DevOps Engineer, built with React, TypeScript, and TailwindCSS.

![Portfolio Preview](https://via.placeholder.com/800x400/0EA5E9/FFFFFF?text=DevOps+Portfolio)

## 🚀 Features

### Frontend
- **Modern Design**: Clean, professional interface with dark/light theme toggle
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Interactive Sections**:
  - Hero section with professional profile
  - About section with skills showcase
  - Featured projects with technology stacks
  - Professional experience timeline
  - Contact form with validation
  - Blog section for DevOps insights

### Technical Stack
- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Modern React with hooks and functional components
- 📘 **TypeScript** - Type-safe development
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible UI components
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📱 **React Router** - Client-side routing
- 🌙 **Theme System** - Custom dark/light mode implementation

### DevOps Focus
- **Cloud Platforms**: AWS, Azure, Google Cloud
- **Containerization**: Docker, Kubernetes, Helm
- **CI/CD**: Jenkins, GitHub Actions, GitLab CI
- **Infrastructure as Code**: Terraform, Ansible, CloudFormation
- **Monitoring**: Prometheus, Grafana, ELK Stack
- **Security**: Security scanning, compliance, RBAC

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd devops-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personal Information
Update the following files with your information:

**Hero Section** (`src/components/Hero.tsx`):
- Replace profile image in `src/assets/profile-picture.jpg`
- Update name, title, and bio
- Modify social media links

**About Section** (`src/components/About.tsx`):
- Update professional summary
- Modify skills and technology stacks
- Customize experience descriptions

**Projects** (`src/components/Projects.tsx`):
- Replace with your actual projects
- Update GitHub and demo links
- Modify technology stacks

**Experience** (`src/components/Experience.tsx`):
- Update work history and achievements
- Modify certifications
- Customize timeline content

**Contact** (`src/components/Contact.tsx`):
- Update contact information
- Modify social media links
- Customize form handling

### Design System
The design system is defined in:
- `src/index.css` - Color variables and design tokens
- `tailwind.config.ts` - Tailwind configuration

### Theme Colors
Customize the color scheme by modifying CSS variables in `src/index.css`:
```css
:root {
  --primary: 200 100% 60%;     /* Tech blue */
  --accent: 142 76% 36%;       /* Success green */
  --background: 210 20% 5%;    /* Dark background */
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Optimized images with proper lazy loading
- **CSS Optimization**: Tailwind CSS purging removes unused styles
- **Font Loading**: Optimized Google Fonts loading with font-display: swap

## 🔍 SEO Optimized

- Semantic HTML structure
- Meta tags for social sharing
- Structured data markup
- Descriptive alt attributes
- Clean URL structure

## 📦 Production Deployment

### Build the Project
```bash
npm run build
```

### Deployment Options

**Static Hosting** (Vercel, Netlify):
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Traditional Hosting**:
1. Build the project: `npm run build`
2. Upload `dist` folder contents to your web server

### Environment Variables
For production deployment, you may want to add:
- `VITE_ANALYTICS_ID` - Google Analytics ID
- `VITE_CONTACT_ENDPOINT` - Contact form endpoint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Alex Johnson**
- DevOps Engineer | Cloud & Automation Specialist
- GitHub: [@alexjohnson](https://github.com/alexjohnson)
- LinkedIn: [Alex Johnson](https://linkedin.com/in/alexjohnson-devops)
- Email: alex.johnson@devops.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide React](https://lucide.dev/) for icons
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations

---

Built with ❤️ and lots of ☕ by a DevOps Engineer who loves both infrastructure and great UX.