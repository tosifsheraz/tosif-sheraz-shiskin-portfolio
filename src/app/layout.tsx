import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/lib/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO(owner): point this at the final production domain when the site is deployed
  metadataBase: new URL("https://tosifsheraz.com"),
  title: {
    default: "Tosif Sheraz — Entrepreneur, Founder & CEO of Core Elite Experts | DevOps & Cloud Engineer",
    template: "%s | Tosif Sheraz",
  },
  description:
    "Tosif Sheraz is a Pakistani entrepreneur, digital educator, and DevOps & Cloud Engineer. Founder & CEO of Core Elite Experts — delivering AWS, Azure, Docker, Kubernetes, and CI/CD solutions for international clients, and mentoring the next generation of freelancers.",
  keywords: [
    "Tosif Sheraz",
    "Core Elite Experts",
    "entrepreneur Pakistan",
    "DevOps engineer",
    "cloud engineer",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitOps",
    "freelancer",
    "Fiverr",
    "Upwork",
    "digital educator",
    "freelancing mentor",
    "Gilgit-Baltistan",
  ],
  authors: [{ name: "Tosif Sheraz" }],
  creator: "Tosif Sheraz",
  openGraph: {
    title: "Tosif Sheraz — Entrepreneur, Founder & CEO of Core Elite Experts",
    description:
      "Building businesses, developing talent, and engineering cloud systems that work in production. DevOps & Cloud Engineering · Digital Education · Freelancing Mentorship.",
    siteName: "Tosif Sheraz — Personal Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: profile.portrait,
        width: 1024,
        height: 1536,
        alt: "Professional portrait of Tosif Sheraz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tosif Sheraz — Entrepreneur & DevOps/Cloud Engineer",
    description:
      "Founder & CEO of Core Elite Experts. Building businesses, developing talent, and engineering reliable cloud systems.",
    images: [profile.portrait],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#161412" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
