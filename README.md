# n8n-nodes-mailcoach

[![npm version](https://img.shields.io/npm/v/n8n-nodes-mailcoach.svg?style=flat-square)](https://www.npmjs.com/package/n8n-nodes-mailcoach)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![n8n](https://img.shields.io/badge/n8n-community%20node-FF6D5A?style=flat-square)](https://n8n.io)
[![Created by Pixel & Process](https://img.shields.io/badge/Created%20by-Pixel%20%26%20Process-blue?style=flat-square)](https://pixelandprocess.de/)

![n8n.io - Workflow Automation](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png)

This is an n8n community node that lets you use [Mailcoach](https://mailcoach.app) in your n8n workflows. Mailcoach is a powerful email marketing platform for managing email lists, campaigns, automations, and transactional emails.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

> **Created by [Pixel & Process](https://pixelandprocess.de/)** - Your partner for digital marketing, web development, and process automation in Lübeck, Germany. 🇩🇪

## Table of Contents

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Usage](#usage)
- [Resources](#resources)
- [Development](#development)
- [License](#license)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Manual Installation (for development)

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the node: `npm run build`
4. Link the node: `npm link`
5. Navigate to your n8n installation and link the node: `npm link n8n-nodes-mailcoach`

## Operations

This node supports the following resources and operations:

### Email List

- **Get Many**: Retrieve all email lists
- **Get**: Get a specific email list by ID
- **Create**: Create a new email list
- **Update**: Update an existing email list
- **Delete**: Delete an email list

### Campaign

- **Get Many**: Retrieve all campaigns
- **Get**: Get a specific campaign by ID
- **Create**: Create a new campaign
- **Update**: Update an existing campaign
- **Delete**: Delete a campaign
- **Send**: Send a campaign to subscribers
- **Send Test**: Send a test email for a campaign
- **Get Opens**: Get campaign open statistics
- **Get Clicks**: Get campaign click statistics
- **Get Bounces**: Get campaign bounce statistics
- **Get Unsubscribes**: Get campaign unsubscribe statistics

### Subscriber

- **Get Many**: Retrieve all subscribers from an email list
- **Get**: Get a specific subscriber by ID
- **Create**: Add a new subscriber to an email list
- **Update**: Update an existing subscriber
- **Delete**: Remove a subscriber
- **Confirm**: Confirm a subscriber's email address
- **Unsubscribe**: Unsubscribe a subscriber
- **Resubscribe**: Resubscribe a previously unsubscribed subscriber
- **Resend Confirmation**: Resend the confirmation email to a subscriber

### Tag

- **Create**: Create a new tag on an email list
- **Update**: Update an existing tag
- **Delete**: Delete a tag

### Transactional Mail

- **Get Many**: Retrieve all transactional mails
- **Get**: Get a specific transactional mail by ID
- **Get Templates**: Retrieve all transactional mail templates
- **Get Template**: Get a specific template by ID
- **Send**: Send a transactional email

### Automation

- **Trigger**: Trigger an automation for specific subscribers

## Credentials

To use this node, you need to configure Mailcoach API credentials:

1. In n8n, go to **Credentials** → **New**
2. Search for "Mailcoach API"
3. Enter the following information:
   - **API Endpoint**: Your Mailcoach API endpoint (e.g., `https://yourdomain.mailcoach.app/api`)
   - **API Token**: Your Mailcoach API token

### Getting Your API Credentials

1. Log in to your Mailcoach account
2. Go to **Settings** → **API Tokens**
3. Create a new API token or use an existing one
4. Copy the API token and endpoint URL

## Compatibility

- Minimum n8n version: 0.180.0
- Tested against n8n version: 1.0.0+
- Mailcoach API: v1 (compatible with Mailcoach v6 and up, including Mailcoach Cloud)

## Usage

### Example: Create and Send a Campaign

1. Add a **Mailcoach** node to your workflow
2. Select **Campaign** as the resource
3. Select **Create** as the operation
4. Configure the campaign:
   - Email List ID
   - Campaign Name
   - Subject
   - HTML content or template
5. Add another **Mailcoach** node
6. Select **Campaign** as the resource
7. Select **Send** as the operation
8. Use the campaign ID from the previous step

### Example: Add Subscriber with Tags

1. Add a **Mailcoach** node to your workflow
2. Select **Subscriber** as the resource
3. Select **Create** as the operation
4. Configure the subscriber:
   - Email List ID
   - Email address
   - Additional fields (first name, last name, tags, etc.)

### Example: Send Transactional Email

1. Add a **Mailcoach** node to your workflow
2. Select **Transactional Mail** as the resource
3. Select **Send** as the operation
4. Configure the email:
   - Mail Name (template name)
   - From email
   - To email
   - Replacements (template variables)

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Mailcoach API documentation](https://www.mailcoach.app/api-documentation)
- [Mailcoach website](https://www.mailcoach.app)

## Development

### Prerequisites

- Node.js (v18.10.0 or higher)
- npm
- Docker and Docker Compose (for testing)

### Setup Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/Pixel-Process-UG/n8n-mailcoach.git
   cd n8n-mailcoach
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the node:
   ```bash
   npm run build
   ```

4. Start the development environment:
   ```bash
   chmod +x scripts/dev.sh
   ./scripts/dev.sh
   ```

   Or manually with Docker Compose:
   ```bash
   docker-compose up -d
   ```

5. Access n8n at http://localhost:5678
   - Username: `admin`
   - Password: `admin123`

### Watch Mode

To automatically rebuild on file changes:

```bash
npm run dev
```

### Testing the Node

1. Build the node:
   ```bash
   npm run build
   ```

2. Start the test environment:
   ```bash
   chmod +x scripts/test.sh
   ./scripts/test.sh
   ```

3. In n8n, add the Mailcoach node to a workflow and test the operations

### Project Structure

```
n8n-mailcoach/
├── credentials/
│   └── MailcoachApi.credentials.ts    # API credentials configuration
├── nodes/
│   └── Mailcoach/
│       ├── Mailcoach.node.ts          # Main node implementation
│       └── mailcoach.svg              # Node icon
├── scripts/
│   ├── dev.sh                         # Development helper script
│   └── test.sh                        # Testing helper script
├── docker-compose.yml                 # Docker setup for local testing
├── package.json                       # Package configuration
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # This file
```

### Available npm Scripts

- `npm run build`: Build the node
- `npm run dev`: Watch for changes and rebuild automatically
- `npm run format`: Format code with Prettier
- `npm run lint`: Lint code with ESLint
- `npm run lintfix`: Auto-fix linting issues

### Docker Environment

The project includes a Docker Compose setup for easy local testing:

- **n8n**: The workflow automation platform (port 5678)
- **postgres**: PostgreSQL database for n8n (optional, for production-like setup)

To start:
```bash
docker-compose up -d
```

To stop:
```bash
docker-compose down
```

To view logs:
```bash
docker-compose logs -f n8n
```

### API Coverage

This node implements all major Mailcoach API endpoints:

✅ Email Lists (CRUD operations)  
✅ Subscribers (CRUD + confirm/unsubscribe/resubscribe)  
✅ Campaigns (CRUD + send/test + analytics)  
✅ Tags (CRUD operations)  
✅ Transactional Mails (send + templates)  
✅ Automations (trigger)  

Based on the [official Mailcoach PHP SDK](https://github.com/spatie/mailcoach-sdk-php).

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

Quick start:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Publishing

### Automated Publishing

This project uses GitHub Actions to automatically publish to npm when a new release is created:

1. **Update version** in `package.json`
2. **Update** `CHANGELOG.md` with changes
3. **Commit and push** changes
4. **Create a tag**:
   ```bash
   git tag -a v1.0.1 -m "Release v1.0.1"
   git push origin v1.0.1
   ```
5. **Create GitHub Release** - Publishing to npm happens automatically

### GitHub Actions Workflows

- **Build & Test** - Runs on every push/PR
- **Version Check** - Ensures version is bumped in PRs
- **Publish to npm** - Automatic on git tags (v*)
- **Release Publish** - Automatic on GitHub releases

## Issues

If you encounter any issues or have questions, please [open an issue](https://github.com/Pixel-Process-UG/n8n-mailcoach/issues) on GitHub.

## License

[MIT](LICENSE)

## Author

**Pixel Process UG**
- Email: info@pixel-process.com
- GitHub: [@Pixel-Process-UG](https://github.com/Pixel-Process-UG)

## Acknowledgments

- Built on top of [n8n](https://n8n.io/)
- Integrates with [Mailcoach](https://mailcoach.app) by [Spatie](https://spatie.be)
- Based on the [Mailcoach PHP SDK](https://github.com/spatie/mailcoach-sdk-php)
- Created by [Pixel & Process](https://pixelandprocess.de/) - Digital agency for marketing, web development, and automation

## About Pixel & Process

[Pixel & Process](https://pixelandprocess.de/) is a digital agency based in Lübeck, Germany, specializing in:
- 📈 **Performance Marketing** - Google Ads, Meta, LinkedIn
- 🎨 **Web Design & Development** - Next.js, React, modern web technologies
- ⚙️ **Process Automation** - n8n, workflow automation, efficiency optimization
- 🔓 **Open Source Solutions** - GDPR-compliant, sustainable digital transformation

We build tools like this n8n-mailcoach node to help businesses automate their marketing and improve efficiency.

🌐 **Website**: [pixelandprocess.de](https://pixelandprocess.de/)  
📧 **Contact**: info@pixel-process.com  
📍 **Location**: Lübeck, Germany

---

**Note**: This is a community-created node and is not officially maintained by n8n GmbH or Spatie.

