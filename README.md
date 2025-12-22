# OSPO Internal Website

[中文版](./README-zh-hans.md) | English

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/pecommunity/v0-ospo-internal-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/ZLCXfbp61qN)

## Overview

This is an internal website for the Open Source Program Office (OSPO) - a dedicated team within an organization responsible for open source related initiatives and governance. The website serves as a central hub for open source management, compliance, and collaboration.

## Features

### 🏠 Home
- OSPO vision and mission statement
- Key responsibilities overview
- Team composition and contact information
- Important internal and external links

### 🎯 Capabilities Building
- Technology capability development tracking
- Community engagement initiatives
- Training programs and workshops
- Legal and compliance capabilities
- Metrics and measurement frameworks
- Progress tracking with milestone visualization

### 📦 Projects
- **Internal Open Source Projects**: Projects developed and used within the organization
- **External Contributions**: Contributions to third-party open source projects
- **Public Open Source Projects**: Projects open-sourced and maintained by the organization
- Project metadata including stars, forks, and license information

### 🛡️ Compliance
- License compliance requirements and review processes
- Compliance metrics and statistics
- Knowledge base with guides and FAQs
- SCA (Software Composition Analysis) tools integration
- **Open Source Supply Chain**: Health metrics across security, maintenance, community, license compliance, and code quality dimensions

### ⚖️ Governance
- Open source policies and standards
- Organizational structure and governance committees
- Operating procedures and approval workflows
- Decision-making frameworks

### 📚 Resources
- **Process & Guidelines**: Standard processes, quick start guides, best practices, and templates
- **Success Stories**: Real-world case studies showcasing open source adoption impact

### 🌐 Internationalization
- Full support for Chinese and English languages
- Easy language switching via UI controls
- Persistent language preference

## Tech Stack

- **Framework**: Next.js 15.5.9 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ospocc/v0-ospo.git
cd v0-ospo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure

```
v0-ospo/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Home page
│   ├── capabilities/         # Capabilities building page
│   ├── projects/             # Projects list page
│   ├── compliance/           # Compliance page
│   ├── governance/           # Governance policies page
│   └── resources/            # Resources center page
├── components/               # Reusable components
│   ├── header.tsx            # Navigation header
│   ├── footer.tsx            # Site footer
│   └── language-provider.tsx # i18n provider
├── public/                   # Static assets
└── ...
```

## Configuration

### Default Language

To change the default language, edit `components/language-provider.tsx`:

```typescript
const [language, setLanguage] = useState<Language>("en") // Change to "zh" for Chinese
```

### Theme Colors

Customize theme colors in `tailwind.config.ts` and `app/globals.css`.

## Deployment

Your project is live at:

**[https://vercel.com/pecommunity/v0-ospo-internal-website](https://vercel.com/pecommunity/v0-ospo-internal-website)**

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ospocc/v0-ospo)

## Contributing

This project is automatically synced with [v0.app](https://v0.app). To contribute:

1. Continue building your app on: **[https://v0.app/chat/projects/ZLCXfbp61qN](https://v0.app/chat/projects/ZLCXfbp61qN)**
2. Changes are automatically pushed to this repository
3. Vercel deploys the latest version automatically

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the OSPO team or open an issue in this repository.

Visit OSPO.CC community [https://OSPO.CC](https://ospo.cc)
