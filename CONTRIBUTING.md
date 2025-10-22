# Contributing to n8n-nodes-mailcoach

Thank you for your interest in contributing to n8n-nodes-mailcoach! This project is maintained by [Pixel & Process](https://pixelandprocess.de/) and we welcome contributions from the community.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please [open an issue](https://github.com/Pixel-Process-UG/n8n-mailcoach/issues/new?template=bug_report.md) with:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- n8n version and environment details
- Error messages or screenshots

### Suggesting Features

Have an idea for a new feature? [Open a feature request](https://github.com/Pixel-Process-UG/n8n-mailcoach/issues/new?template=feature_request.md) with:
- Description of the feature
- Use case and benefits
- Reference to Mailcoach API documentation if applicable

### Code Contributions

We love pull requests! Here's how to contribute code:

## 🛠️ Development Setup

### Prerequisites
- Node.js v18.10.0 or higher
- npm
- Docker and Docker Compose (for testing)
- Git

### Getting Started

1. **Fork the repository**
   - Click the "Fork" button on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/n8n-mailcoach.git
   cd n8n-mailcoach
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Build the node**
   ```bash
   npm run build
   ```

5. **Start the development environment**
   ```bash
   docker compose up -d
   ```

6. **Access n8n**
   - Open http://localhost:5678
   - Login: admin / admin123

## 💻 Development Workflow

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit files in `nodes/` or `credentials/`
   - Follow existing code style
   - Add comments for complex logic

3. **Build and test**
   ```bash
   npm run build
   docker compose restart n8n
   ```

4. **Test in n8n**
   - Open http://localhost:5678
   - Test your changes thoroughly
   - Verify all operations still work

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

### Watch Mode for Development

For faster development, use watch mode:

```bash
# Terminal 1: Watch for changes
npm run dev

# Terminal 2: When ready to test
docker compose restart n8n
```

## 📝 Coding Standards

### TypeScript Style
- Use TypeScript for all code
- Maintain type safety
- Follow existing code patterns
- Use meaningful variable names

### Code Structure
- Keep functions focused and small
- Add JSDoc comments for complex functions
- Handle errors gracefully
- Support `continueOnFail` option

### Formatting
```bash
# Format code
npm run format

# Lint code
npm run lint

# Fix linting issues
npm run lintfix
```

## 🧪 Testing

### Before Submitting a PR

1. **Build successfully**
   ```bash
   npm run build
   ```

2. **Test in Docker**
   ```bash
   docker compose up -d
   # Test all operations in n8n UI
   ```

3. **No TypeScript errors**
   ```bash
   npm run build
   # Should complete without errors
   ```

4. **Lint passes**
   ```bash
   npm run lint
   # Fix any issues with npm run lintfix
   ```

### Testing Checklist
- [ ] Build completes without errors
- [ ] Node appears in n8n node selector
- [ ] Credentials work correctly
- [ ] All existing operations still work
- [ ] New features work as expected
- [ ] No console errors in browser
- [ ] Tested with real Mailcoach API (if possible)

## 📤 Submitting a Pull Request

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template

3. **PR Guidelines**
   - Clear title describing the change
   - Reference any related issues
   - Describe what was changed and why
   - Include screenshots if UI-related
   - List what you tested

### PR Title Format
```
feat: add support for X
fix: correct issue with Y
docs: update Z documentation
refactor: improve code for A
```

## 🎯 Adding New Operations

If you're adding support for a new Mailcoach API endpoint:

1. **Check the Mailcoach API docs**
   - https://www.mailcoach.app/api-documentation

2. **Add to the node description**
   - Add new operation to the relevant resource in `properties`
   - Include all required and optional parameters

3. **Implement in execute method**
   ```typescript
   } else if (operation === 'yourNewOperation') {
       const param = this.getNodeParameter('param', i) as string;
       
       const response = await this.helpers.httpRequestWithAuthentication.call(
           this,
           'mailcoachApi',
           {
               method: 'GET',
               url: `${baseUrl}/your-endpoint`,
           },
       );
       
       returnData.push(response.data || response);
   }
   ```

4. **Update README.md**
   - Add the new operation to the operations list
   - Include usage examples if helpful

5. **Update CHANGELOG.md**
   - Document the new feature

## 🐛 Debugging

### Common Issues

**Node doesn't appear in n8n:**
```bash
# Check if files are mounted
docker compose exec n8n ls -la /data/custom-nodes/n8n-nodes-mailcoach

# Check for build errors
npm run build

# Restart n8n
docker compose restart n8n
```

**TypeScript errors:**
```bash
# Clean rebuild
rm -rf dist
npm run build
```

**Testing in n8n:**
```bash
# View n8n logs
docker compose logs n8n -f

# Restart clean
docker compose down
docker compose up -d
```

## 📚 Resources

- **n8n Documentation**: https://docs.n8n.io/integrations/creating-nodes/
- **Mailcoach API**: https://www.mailcoach.app/api-documentation
- **Mailcoach PHP SDK**: https://github.com/spatie/mailcoach-sdk-php
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

## 🎨 Code Style

### File Naming
- Use PascalCase for class files: `Mailcoach.node.ts`
- Use camelCase for utilities
- Use kebab-case for config files

### TypeScript
```typescript
// Good
const emailListId = this.getNodeParameter('emailListId', i) as string;

// Avoid
const id = this.getNodeParameter('emailListId', i);
```

### Error Handling
```typescript
// Always support continueOnFail
try {
    // API call
} catch (error) {
    if (this.continueOnFail()) {
        returnData.push({ error: error.message });
        continue;
    }
    throw error;
}
```

## 📋 Commit Guidelines

### Commit Message Format
```
<type>: <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples
```
feat: add support for campaign templates
fix: correct subscriber filtering logic
docs: update API endpoint documentation
refactor: improve error handling
```

## 🤝 Community Guidelines

### Be Respectful
- Be kind and respectful to all contributors
- Provide constructive feedback
- Help others learn

### Be Patient
- Maintainers are volunteers
- Response times may vary
- Complex PRs take time to review

### Be Thorough
- Test your changes completely
- Document your code
- Follow the guidelines

## 📞 Questions?

If you have questions:
- 💬 Open a [GitHub Discussion](https://github.com/Pixel-Process-UG/n8n-mailcoach/discussions)
- 🐛 Create an [Issue](https://github.com/Pixel-Process-UG/n8n-mailcoach/issues)
- 📧 Email us: info@pixel-process.com
- 🌐 Visit: [pixelandprocess.de](https://pixelandprocess.de/)

## 🎉 Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Credited in the README

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to n8n-nodes-mailcoach!** 🙏

Made with ❤️ by [Pixel & Process](https://pixelandprocess.de/) - Digital agency for marketing, web development, and automation in Lübeck, Germany.

