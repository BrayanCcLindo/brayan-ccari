import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="container  m-auto ">{children}</div>;
}

export default Layout;
