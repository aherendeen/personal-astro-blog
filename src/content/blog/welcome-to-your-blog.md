---
title: 'Welcome to Your New Blog'
description: |
  Getting started with your new personal blog template. Learn about the features and how to customize your site.
pubDate: 'Sep 16 2025'
coverImageCredit: 'credit here'
---

# Welcome to Your Personal Blog

Congratulations on setting up your new personal blog. This template provides a solid foundation for sharing your thoughts, projects, and experiences with the world.

## Getting Started

### Initial Setup

1. **Customize your site**: Update `src/consts.ts` with your personal information
2. **Replace this content**: Delete this post and create your own content
3. **Add your photos**: Replace the images in `public/` and `src/assets/` with your own
4. **Deploy your site**: Choose your preferred hosting platform and go live

### Essential Customizations

- **Site Information**: Update title, description, and author details
- **Social Links**: Add your social media profiles
- **Branding**: Replace logos and favicons
- **Content**: Create your first blog posts

## Features of This Template

### Performance & Optimization

- **Fast Performance**: Built with Astro for optimized loading
- **Image Optimization**: Automatic image processing and optimization
- **Static Generation**: Pre-built pages for maximum speed
- **Modern Build Tools**: Vite for fast development and optimized production builds

### Design & User Experience

- **Clean Design**: Minimal design with dark mode support
- **Responsive**: Optimized for all devices and screen sizes
- **Accessibility**: WCAG compliant design with proper semantic HTML
- **Typography**: Professional typography with Google Fonts

### Content Management

- **Rich Content**: MDX support for enhanced content with React components
- **SEO Optimization**: Built-in SEO features with proper meta tags
- **RSS Feed**: Automatic RSS feed generation for content syndication
- **Reading Time**: Automatic calculation and display of reading time

## Writing Your First Post

### Content Structure

To create a new blog post:

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add frontmatter with metadata:
   ```yaml
   ---
   title: 'My Blog Post Title'
   description: 'Brief description of what my post is about'
   pubDate: 'Sep 16 2025'
   coverImageCredit: 'Photo by...'
   ---
   ```
3. Write your content in Markdown or MDX
4. Add a cover image at `src/assets/blogimages/your-slug/cover.jpg` (recommended: 853x480px)

### Content Best Practices

- **Frontmatter**: Always include proper metadata
- **Headings**: Use hierarchical heading structure (H1 → H2 → H3)
- **Images**: Optimize images and include alt text
- **Links**: Use descriptive link text
- **Code**: Use syntax highlighting for code blocks
- **Lists**: Use proper markdown list formatting

## Development Workflow

### Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Formatting
npm run format
```

## Deployment Options

### Recommended Platforms

- **Vercel**: Excellent Astro support with automatic deployments
- **Netlify**: Great for static sites with form handling
- **Cloudflare Pages**: Fast global CDN with edge computing
- **GitHub Pages**: Free hosting for public repositories

### Deployment Steps

1. Choose your hosting platform
2. Connect your repository
3. Configure build settings (if needed)
4. Set environment variables
5. Deploy and test your site

## Customization Guide

### Styling

- **Global Styles**: Modify `src/styles/global.css`
- **Tailwind Config**: Customize `tailwind.config.js`
- **Component Styles**: Update individual component styles

### Advanced Features

- **Custom Components**: Create reusable components in `src/components/`
- **Layout Customization**: Modify layouts in `src/layouts/`
- **Plugin Integration**: Add custom remark/rehype plugins
- **API Routes**: Create server-side functionality

## Community & Support

### Getting Help

- **Documentation**: Check the README.md for detailed instructions
- **Issues**: Report bugs or request features on GitHub
- **Discussions**: Join community discussions for help and ideas

### Contributing Back

- **Bug Reports**: Help improve the template by reporting issues
- **Feature Requests**: Suggest new features that would benefit others
- **Pull Requests**: Contribute code improvements
- **Documentation**: Help improve documentation and guides

## What's Next

- Explore the different components in `src/components/`
- Customize the styling in `src/styles/global.css`
- Set up your domain and deploy your site
- Start writing and sharing your content

Happy blogging.
