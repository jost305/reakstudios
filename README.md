# ReakStudios - Professional Recording Studio Website

A modern, responsive recording studio website built with React, TypeScript, and Node.js. Features a dark aesthetic design with parallax hero effects, sliding banners, and professional studio showcase.

## 🎵 Features

- **Parallax Hero Section** with sliding background images and smooth scrolling effects
- **Professional Dark Theme** optimized for recording studio branding
- **Responsive Design** that works on all devices
- **Contact Form** with backend API integration
- **Service Showcase** with interactive cards and hover effects
- **Portfolio Section** with audio player simulations
- **Team Profiles** and studio statistics
- **Smooth Navigation** with section scrolling

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **TanStack React Query** for state management
- **Wouter** for routing
- **Vite** for development and building

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **Drizzle ORM** for database operations
- **In-memory storage** for development
- **Zod** for validation

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment on Vercel

### Prerequisites
- Vercel account
- GitHub repository

### Deploy Steps

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Configure Build Settings**
   - Framework: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if using database)
   ```
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy" and wait for the build to complete
   - Your site will be available at `https://your-project.vercel.app`

### Vercel Configuration

The project includes a `vercel.json` file with optimized settings:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/dist/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/index.js"
    }
  ]
}
```

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configuration
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
└── vercel.json            # Vercel deployment configuration
```

## 🎨 Customization

### Brand Colors
Edit `client/src/index.css` to customize the studio theme:

```css
:root {
  --studio-blue: hsl(191, 100%, 50%);  /* Primary brand color */
  --studio-gold: hsl(51, 100%, 50%);   /* Accent color */
  --studio-black: hsl(0, 0%, 4%);      /* Background */
}
```

### Hero Slides
Modify `client/src/components/hero-section.tsx` to add/change hero slides:

```typescript
const heroSlides = [
  {
    id: 1,
    image: "your-studio-image-url",
    title: "YOUR",
    subtitle: "STUDIO",
    accent: "NAME",
    description: "Your custom description"
  }
];
```

### Services
Update `client/src/components/services-section.tsx` to modify services offered.

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript checks

### Adding New Features
1. Create components in `client/src/components/`
2. Add API routes in `server/routes.ts`
3. Update storage interface in `server/storage.ts`
4. Define schemas in `shared/schema.ts`

## 🎵 Audio Integration

The current implementation includes audio player UI simulation. To add real audio:

1. Add audio files to your hosting service
2. Update the `AudioPlayer` component to use actual HTML5 audio
3. Implement proper audio controls and progress tracking

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images and assets
- Fast loading times

## 🔒 Security

- Input validation with Zod schemas
- Secure API endpoints
- Environment variable configuration
- CORS protection

## 📈 Performance

- Optimized images with proper sizing
- Lazy loading for heavy components
- Efficient bundling with Vite
- Minimal JavaScript payload

## 📞 Support

For technical support or customization requests, contact the development team.

## 📄 License

MIT License - see LICENSE file for details.