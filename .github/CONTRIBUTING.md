# Contributing to Personal Blog Template

Thank you for your interest in contributing to this Astro personal blog template. We welcome contributions and improvements of all sizes.

## Development Environment Setup

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- Git

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/aherendeen/personal-astro-blog.git
   cd personal-astro-blog
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branching Strategy

1. **Create a new branch** for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:

   ```bash
   npm run build
   npm run typecheck
   npm run lint
   npm run format
   ```

4. **Commit your changes** with a descriptive message:

   ```bash
   git commit -m "feat: add new feature description"
   # or
   git commit -m "fix: resolve issue description"
   ```

5. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## Code Standards

### Formatting

- **Prettier**: We use Prettier for code formatting
- **Run formatting**: `npm run format` before committing
- **Check formatting**: `npm run format:check` in CI

### Linting

- **ESLint**: We use ESLint for code quality
- **Run linting**: `npm run lint` to check for issues
- **Auto-fix**: `npm run lint:fix` for automatic fixes

### TypeScript

- **Strict Mode**: Full TypeScript strict mode enabled
- **Type Checking**: Run `npm run typecheck` to verify types
- **Type Definitions**: Provide proper type definitions for all code

### Astro Best Practices

- **Component Structure**: Follow Astro component patterns
- **Performance**: Optimize for static generation where possible
- **Accessibility**: Ensure components are accessible
- **SEO**: Include proper meta information

## Pull Request Guidelines

### Before Submitting

- [ ] Tests pass: `npm run build` and `npm run typecheck`
- [ ] Code formatted: `npm run format`
- [ ] Linting passes: `npm run lint`
- [ ] No console errors or warnings
- [ ] Documentation updated if needed

### PR Description

- **Title**: Clear and descriptive (e.g., "feat: add dark mode toggle")
- **Description**: Explain what changes and why
- **Screenshots**: Include for UI changes
- **Testing**: Describe how to test the changes
- **Breaking Changes**: Note any breaking changes

### PR Types

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Testing related changes
- `chore:` Maintenance tasks

## Reporting Issues

### Bug Reports

If you find a bug, please create an issue with:

- **Clear title** describing the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Environment details** (browser, OS, Node version)
- **Screenshots** if applicable
- **Code snippets** that demonstrate the issue

### Feature Requests

For new features, please provide:

- **Clear description** of the proposed feature
- **Use case** and why it's needed
- **Implementation ideas** if you have them
- **Mockups or examples** if applicable

## Code of Conduct

Please be respectful and constructive in all interactions. We want to maintain a welcoming environment for all contributors.

## Questions

Feel free to open an issue for any questions about contributing or using this template.

---

Thank you for contributing to this personal blog template.
