import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-20">
          <Header />
        </header>
        <main className="flex-1">
            {children}
        </main>
        <Footer />
    </div>
  );
};

export default HomeLayout;