# Kavya Madani - Premium AI Developer Portfolio

A modern, production-ready portfolio website for an AI & Machine Learning student/developer. Built with Next.js App Router, Tailwind CSS, Framer Motion, and deployed on Vercel.

## 🚀 Features

- **Futuristic AI-Themed Design**: Dark mode first, animated gradient backgrounds, and glassmorphism UI cards.
- **Smooth Animations**: Powered by Framer Motion, featuring smooth scroll, reveal animations, and hover effects.
- **Interactive UI**: Micro-interactions, dynamic custom cursor glow, and scroll progress indicators.
- **High Performance**: Optimized using Next.js 14+ specific server components and image optimization.
- **Fully Responsive**: Adapts seamlessly from mobile devices to ultrawide desktops.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```
/app          # Next.js App Router root layout & main page
/components   # Modular React components including UI fragments
/lib          # Utilities (e.g., Shadcn Tailwind merge utils)
/data         # Placeholder for JSON or TS data constants
/public       # Static files (images, SVGs etc.)
/styles       # Additional CSS / SASS configurations
```

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js 18.x or above installed.

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/KavyaMadani/portfolio
   ```

2. Navigate and install dependencies:
   ```bash
   cd portfolio
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌍 Environment Variables

There are currently no required environment variables. However, if you expand the `<Contact />` component to use a service like Resend or EmailJS, create a `.env.local` file:

```env
NEXT_PUBLIC_API_KEY=your_key_here
```

## 🚀 Deployment

The project is already optimized and configured for seamless deployment on Vercel.

1. Create a [Vercel](https://vercel.com/) account and log in.
2. Click **Add New Project**.
3. Import this repository directly from GitHub.
4. Keep the default Build Settings:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **Deploy**.

In a few minutes, your portfolio will be fully live. It is deeply integrated and will automatically rebuild on every commit pushed to the `main` branch.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
