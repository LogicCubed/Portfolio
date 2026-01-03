import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
        <div className="fixed top-0 left-0 h-full w-full z-50 pointer-events-none">
            <Sidebar />
        </div>
    </div>
  );
};

export default HomeLayout;