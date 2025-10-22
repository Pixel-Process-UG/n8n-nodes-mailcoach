# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-10-22

### Fixed
- **Critical**: Fixed "Invalid URL" error that prevented all operations from working
- Removed unreliable `requestDefaults` approach that used expressions
- Now explicitly retrieves credentials in execute method
- All 34 operations now properly construct full URLs with baseURL prefix
- Improved error handling and URL validation
- Fixed prepublishOnly script syntax error

### Added
- GitHub Actions workflow for automated npm publishing with provenance
- Separate publish workflow triggered on GitHub releases
- Version check workflow for pull requests
- Automated CI/CD pipeline with Node 18.x and 20.x testing
- Docker environment testing in CI/CD
- CONTRIBUTING.md with detailed contribution guidelines
- OIDC trusted publishing support
- npm provenance attestation

### Changed
- **Package name**: Updated to `@pixelandprocess/n8n-nodes-mailcoach` (scoped package)
- Updated organization to Pixel Process UG
- Enhanced documentation with Pixel & Process branding
- Added GitHub issue templates and PR template
- Improved overall project structure
- Cleaned up extra documentation files
- Added publishConfig to package.json

## [1.0.0] - 2025-10-22

### Added

- Initial release of n8n-nodes-mailcoach
- Support for Email Lists operations (CRUD)
- Support for Campaigns operations (CRUD, send, test, statistics)
- Support for Subscribers operations (CRUD, confirm, unsubscribe, resubscribe)
- Support for Tags operations (CRUD)
- Support for Transactional Mails (send, templates)
- Support for Automations (trigger)
- Mailcoach API credentials configuration
- Docker Compose setup for local testing
- Comprehensive documentation
- Development helper scripts
- Based on Mailcoach PHP SDK v1.0

### Features

#### Email Lists
- Get all email lists with pagination
- Get single email list by UUID
- Create new email lists with custom configuration
- Update email list properties
- Delete email lists

#### Campaigns
- List all campaigns
- Get campaign details
- Create campaigns with templates and custom content
- Update campaign properties
- Delete campaigns
- Send campaigns to subscribers
- Send test emails
- Get campaign analytics (opens, clicks, bounces, unsubscribes)

#### Subscribers
- List subscribers with filtering (email, status, tags)
- Get subscriber by UUID
- Create new subscribers with tags and custom attributes
- Update subscriber information
- Delete subscribers
- Confirm subscriber email addresses
- Unsubscribe/resubscribe subscribers
- Resend confirmation emails

#### Tags
- Create tags on email lists
- Update tag names
- Delete tags

#### Transactional Mails
- Send transactional emails with templates
- List sent transactional mails
- Get transactional mail details
- List available templates
- Get template details
- Support for replacements and attachments

#### Automations
- Trigger automations for specific subscribers

### Technical

- TypeScript implementation
- Full type safety
- Error handling with continue-on-fail support
- Pagination support for list operations
- Filtering support for subscribers
- Template field handling for campaigns and transactional mails
- Custom attributes support for subscribers

[1.0.1]: https://github.com/Pixel-Process-UG/n8n-nodes-mailcoach/releases/tag/v1.0.1
[1.0.0]: https://github.com/Pixel-Process-UG/n8n-nodes-mailcoach/releases/tag/v1.0.0

