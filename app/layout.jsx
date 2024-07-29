import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
    <body>
        <div>{children}</div>
     </body>   
    </html>
  );
};

export default MainLayout;

