import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Ibrahim Al Ayoubi | AI Engineer · Computer Vision & ML",
  description: "AI engineer focused on computer vision and machine learning. Explore Ibrahim Al Ayoubi’s work in medical image segmentation, RAG systems, and knowledge graphs, with research experience at ESILV / DVRC and Inria.",
  keywords: ["Ibrahim Al Ayoubi", "AI Engineer", "Machine Learning", "Computer Vision", "PyTorch", "Medical Image Segmentation", "DINOv2", "RAG", "FastAPI"],
  authors: [{ name: "Ibrahim Al Ayoubi" }],
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Ibrahim Al Ayoubi | AI Engineer", description: "Computer vision, machine learning, and applied AI. Research, built into practice.", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
