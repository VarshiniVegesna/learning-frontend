import "./globals.css";

export const metadata = {
  title: "Personalized Learning System",
  description: "Learning Progress & Recommendation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}