# Contributing to n8n-nodes-mailcoach

Thank you for your interest in contributing! This project is maintained by [Pixel & Process](https://pixelandprocess.de/).

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/n8n-nodes-mailcoach.git`
3. **Install** dependencies: `npm install`
4. **Build**: `npm run build`
5. **Test**: `docker compose up -d` → http://localhost:5678

## 💻 Development

### Making Changes
```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes to files in nodes/ or credentials/

# Build
npm run build

# Test in Docker
docker compose restart n8n
# Open http://localhost:5678 and test

# Commit
git commit -m "feat: your feature description"
```

### Watch Mode
```bash
npm run dev  # Auto-rebuild on changes
```

## 🧪 Testing

Before submitting:
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors
- [ ] Tested in n8n UI
- [ ] All operations still work

## 📝 Pull Request

1. Push to your fork
2. Create PR to `main` branch
3. Describe what you changed and why
4. Link related issues

## 📞 Questions?

- 💬 [GitHub Issues](https://github.com/Pixel-Process-UG/n8n-nodes-mailcoach/issues)
- 📧 Email: info@pixel-process.com
- 🌐 Website: [pixelandprocess.de](https://pixelandprocess.de/)

## 📜 License

By contributing, you agree your contributions will be licensed under MIT.

---

Made with ❤️ by [Pixel & Process](https://pixelandprocess.de/)

