import '../styles/reset.css';
import '../styles/layout.css';
import '../styles/fonts.css';
import '../styles/colors.css';
import '../styles/globals.css';
import Providers from '@/components/Providers';
import Sidebar from '@/components/SideBar';
import PageContent from '@/components/PageContent';
import Header from '@/components/Header';
import Body from '@/components/Body';
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
      <Providers>
        <Body>
          <Header />
          {/* <Sidebar /> */}
          {children}
        </Body>
      </Providers>
    </html>
  );
}
