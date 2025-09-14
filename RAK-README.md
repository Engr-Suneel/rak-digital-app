# RAK Digital - Appointment Booking System

A modern, responsive React application built with TypeScript, Vite, and Tailwind CSS for booking appointments with RAK Digital government services.

## 🚀 Features

### Core Functionality

- **Appointment Booking** - Complete form system for scheduling government appointments
- **Bilingual Support** - Full English/Arabic translation with RTL layout support
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation** - Real-time validation with user-friendly error messages
- **Modern UI/UX** - Clean, professional interface following RAK government design standards

### Technical Features

- **TypeScript** - Full type safety and enhanced developer experience
- **React Router** - Client-side routing with proper navigation
- **Component Architecture** - Reusable, well-structured components
- **Custom Hooks** - Advanced form management and language handling
- **Theme System** - Centralized color and typography management

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API + Hooks
- **Utilities**: clsx for className management

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Shared components (Header, Sidebar, etc.)
│   ├── forms/           # Form-related components
│   │   ├── AppointmentForm/  # Main appointment form
│   │   └── FormElements/     # Reusable form inputs
│   ├── layout/          # Layout components
│   └── ui/              # UI components (Modal, Tabs, Cards)
├── pages/               # Page-level components
├── hooks/               # Custom React hooks
├── contexts/            # React contexts (Language, Theme)
├── types/               # TypeScript type definitions
├── locales/             # Translation files (English/Arabic)
├── theme/               # Theme configuration
├── utils/               # Utility functions and constants
└── styles/              # Global CSS styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser with ES2022 support

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd rak-digital-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📋 Available Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm run preview`    | Preview production build     |
| `npm run lint`       | Run ESLint                   |
| `npm run type-check` | Run TypeScript type checking |

## 🌐 Internationalization

The application supports both English and Arabic languages with complete RTL (Right-to-Left) layout support.

### Adding Translations

1. **Add English translations** in `src/locales/en/*.json`
2. **Add Arabic translations** in `src/locales/ar/*.json`
3. **Use translations** in components:

   ```typescript
   import { useLanguage } from "@/contexts/LanguageContext";

   const { t } = useLanguage();
   return <div>{t("translation_key")}</div>;
   ```

### Language Switching

Users can toggle between languages using the language toggle button in the header. The application automatically:

- Switches text direction (LTR/RTL)
- Updates document attributes
- Adjusts component layouts
- Repositions icons and elements

## 🎨 Theming

The application uses a centralized theme system with RAK government branding.

### Colors

```typescript
// Primary colors
--rak-primary: #10233E    // RAK Blue
--rak-red: #BF1313        // RAK Red
--rak-light-blue: #0C7DE5 // Light Blue

// Usage in Tailwind
className="bg-rak-primary text-rak-red"
```

### Custom Components

Pre-built components following RAK design standards:

- Form elements (Input, Select, Textarea, Button)
- Navigation components (Header, Sidebar, Breadcrumb)
- UI components (Modal, Tabs, Card)

## 📱 Responsive Design

The application is built mobile-first and adapts to different screen sizes:

- **Mobile (< 768px)**: Hamburger menu, single-column layout
- **Tablet (768px - 1024px)**: Adaptive grid layouts
- **Desktop (> 1024px)**: Full sidebar navigation, multi-column forms

## 🔧 Development

### Adding New Pages

1. **Create page component** in `src/pages/NewPage/`
2. **Add route** in `src/App.tsx`:
   ```typescript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. **Update navigation** in `src/components/common/Sidebar/Sidebar.tsx`

### Custom Hooks

The application includes several custom hooks:

- `useForm<T>` - Advanced form state management with validation
- `useLanguage` - Language switching and translations
- `useLocalStorage<T>` - Persistent local storage management

### Form Validation

Built-in validation rules available:

```typescript
const validationRules = {
  fieldName: {
    required: true,
    email: true,
    phone: true,
    minLength: 5,
    maxLength: 100,
    pattern: /^[A-Za-z]+$/,
    custom: (value) => (value === "specific" ? null : "Error message"),
  },
};
```

## 🧪 Testing

The application is built with TypeScript for compile-time error catching. Run type checking with:

```bash
npm run type-check
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder contains the production build ready for deployment.

### Environment Configuration

Create `.env.local` for local environment variables:

```bash
VITE_API_URL=https://api.rakdigital.ae
VITE_APP_NAME=RAK Digital
```

## 🔒 Security

- All form inputs are validated client-side and should be validated server-side
- XSS protection through React's built-in escaping
- TypeScript provides compile-time type safety
- No sensitive data stored in localStorage

## 📄 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use provided custom hooks and components
- Maintain consistent code formatting
- Add translations for new text content
- Test responsive design on multiple screen sizes

## 📞 Support

For technical support or questions about the RAK Digital system:

- **Technical Issues**: Create an issue in this repository
- **Design Questions**: Refer to RAK Digital design standards
- **General Support**: Contact RAK Digital support team

## 📝 License

This project is proprietary to RAK Digital and the Government of Ras Al Khaimah.

---

**Built with ❤️ for RAK Digital**

_A modern government digital services platform_
