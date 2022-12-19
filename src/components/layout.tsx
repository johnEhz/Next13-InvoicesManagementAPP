import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div id="page-container" className="w-full min-h-[500px] h-screen bg-[#F8F7FC] dark:bg-[#141625]">
      <Navbar />
      <main className="md:pl-20">{children}</main>
      <Footer />
    </div>
  );
}
