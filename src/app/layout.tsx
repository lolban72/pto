import type { Metadata, Viewport } from "next";
import { company } from "../lib/site-content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "исполнительная документация",
    "аутсорсинг ПТО",
    "сопровождение строительства",
    "сдача объекта",
    "ПТО-ЮГРА",
  ],
  openGraph: {
    title: company.name,
    description: company.description,
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050b16",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-[#02040e] text-slate-950">
        {children}
      </body>
    </html>
  );
}
