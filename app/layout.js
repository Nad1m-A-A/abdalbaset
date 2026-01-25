import "./globals.css";
import Navigation from "./components/Navigation/Navigation";
import { quicksand } from "./fonts";
import Footer from "./components/Footer";
import { WebVitals } from "./components/web-vitals";

export const metadata = {
  title: "AB-Designer",
  description: "This is the path to your dream!",
  keywords: ['3D videos', 'facade design', 'interior design', 'architectural plans', 'landscapes', 'commercial design', 'architect in uae', 'dubai', 'modern home design', 'ab-designer', 'ab designer', 'interior design prices', 'prices', 'landscape architecture', 'custom home design', 'remodeling', 'architectural consultation', 'commercial space planning', 'luxury']
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link type="image/png" sizes="16x16" rel="icon" href="images/icons8-building-16.png" />
      </head>
      <body
        className={`${quicksand.className} select-none bg-main`}
      >
        <main className="min-h-screen relative flex-col flex gap-14 p-5 lg:flex-row lg:pt-16 lg:pl-20 pb-20">
          <Navigation />
          <WebVitals />
          {children}
        </main>
        <Footer font={quicksand} />
      </body>
    </html>
  );
}
