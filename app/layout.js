import './globals.css';

export const metadata = {
  title: 'Daniel Olaoye | Generative AI, IT Support & ICT',
  description:
    'Professional portfolio of Daniel Olaoye — Generative AI, AI evaluation, IT support, ICT instruction, Microsoft Office and AI-assisted technical projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
