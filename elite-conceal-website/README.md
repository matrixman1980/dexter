# Elite Conceal™ - Luxury Hotel Safe Website

A sophisticated, modern website for Elite Conceal™ - the world's first completely undetectable luxury safe chest designed exclusively for premium hotels and boutique hospitality spaces.

## Features

- **Modern Design**: Elegant, luxury-focused design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Complete meta tags and semantic HTML structure
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Interactive form for demo requests and inquiries
- **Comparison Table**: Clear visualization of Elite Conceal™ vs traditional safes

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Playfair Display & Inter)

## Getting Started

### Development Server

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

```
elite-conceal-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── Hero.tsx           # Hero section with CTA
│   ├── ProductOverview.tsx # Product features overview
│   ├── WhyHotels.tsx      # Problem/solution section
│   ├── Technology.tsx     # Technology & security details
│   ├── Design.tsx         # Design & craftsmanship
│   ├── UseCases.tsx       # Use cases for different properties
│   ├── Comparison.tsx     # Comparison table
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── FinalCTA.tsx       # Contact form and final CTA
│   └── Footer.tsx         # Footer with links
└── public/                # Static assets

```

## Sections

1. **Hero Section**: Compelling headline with call-to-action buttons
2. **Product Overview**: Key features and benefits
3. **Why Hotels Need It**: Problem/solution comparison
4. **Technology & Security**: NFC technology and security features
5. **Design & Craftsmanship**: Aesthetic excellence and customization
6. **Use Cases**: Applications for different property types
7. **Comparison Table**: Elite Conceal™ vs traditional safes
8. **Testimonials**: Customer success stories
9. **Contact Form**: Demo request and inquiry form
10. **Footer**: Quick links and contact information

## Color Scheme

- **Primary**: Deep charcoal (#171717) and midnight black (#0a0a0a)
- **Accent**: Amber/Gold (#f59e0b, #fbbf24)
- **Background**: Neutral tones (#f5f5f5, #ffffff)
- **Text**: High contrast for readability

## Typography

- **Headlines**: Playfair Display (elegant serif)
- **Body Text**: Inter (clean sans-serif)

## Customization

To customize the website:

1. **Colors**: Modify Tailwind classes in components (e.g., `bg-amber-500`, `text-neutral-900`)
2. **Content**: Edit text directly in component files
3. **Fonts**: Change font imports in `app/layout.tsx`
4. **Sections**: Add/remove sections in `app/page.tsx`

## Contact Information

For questions about Elite Conceal™:

- **Email**: hospitality@eliteconceal.com
- **Website**: www.eliteconceal.com/hotels

## License

© 2025 Elite Conceal™. All rights reserved.
