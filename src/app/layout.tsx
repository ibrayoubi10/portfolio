import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Al Ayoubi — Data Scientist & ML Engineer",
  description:
    "Portfolio of Ibrahim Al Ayoubi, a Data Scientist specializing in Machine Learning, Computer Vision, and Deep Learning. Research experience at INRIA and DVRC.",
  keywords: [
    "Ibrahim Al Ayoubi",
    "Data Scientist",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "PyTorch",
    "Medical Image Segmentation",
    "Vision Transformers",
    "AI Researcher",
  ],
  authors: [{ name: "Ibrahim Al Ayoubi" }],
  openGraph: {
    title: "Ibrahim Al Ayoubi — Data Scientist & ML Engineer",
    description: "Data Scientist specializing in Machine Learning & Computer Vision",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
