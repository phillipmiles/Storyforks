import '../styles/reset.css';
import '../styles/layout.css';
import '../styles/fonts.css';
import '../styles/colors.css';
import '../styles/globals.css';
import Providers from '@/components/Providers';
import Sidebar from '@/components/SideBar';
import PageContent from '@/components/PageContent';
export const metadata = {
  title: 'Storyforks',
  description: 'Collaborative storytelling community website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Sidebar />
          <PageContent>{children}</PageContent>
        </Providers>
      </body>
    </html>
  );
}
