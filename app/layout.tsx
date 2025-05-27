"use client";
import "@styles/global.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
// export const metadata = {
//   title: "Promptopia",
//   description: "Discover & Share AI Prompts",
// };
const RootLayout = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return (
    <html lang="en">
      <body className="">
        <Provider session={session}>
          <div>
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
