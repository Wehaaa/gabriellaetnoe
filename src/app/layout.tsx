import { Montserrat, Shantell_Sans } from "next/font/google";
import { QueryProvider } from "@/components/app-components/providers/QueryProvider";
import AuthProvider from "@/components/app-components/providers/AuthProvider";
import "@/app/globals.css";
import { blueParadise } from '@/lib/fonts'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});

const shantell = Shantell_Sans({
  subsets: ["latin"],
  variable: '--font-shantell'
});

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug?: string[] }>;
 };
 
 export default async function RootLayout({
  children,
  params,
 }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} ${shantell.variable} ${blueParadise.variable}`}>
        {/* <AuthProvider>
          <QueryProvider> */}
            <main>
              {children}
            </main>
          {/* </QueryProvider>
        </AuthProvider> */}
      </body>
    </html>
  );
 }