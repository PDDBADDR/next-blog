import BaseTemplate from "@/components/templates/BaseTemplate/BaseTemplate";
import "./globals.scss";

import Navbar from "@/components/organisms/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <BaseTemplate>{children}</BaseTemplate>
      </body>
    </html>
  );
}
