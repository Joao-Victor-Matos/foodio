import Link from "@/node_modules/next/link";

const Header = () => {
  return (
    <header className="h-20 flex flex-row items-center justify-between px-20 py-5 text-primary">
      <h1 className="text-3xl font-bold">Foods.io</h1>
      <div className="flex items-center justify-center gap-20 text-xl text-fontcolor">
        <Link href="/">Search</Link>
        <Link href="/">About</Link>
      </div>
    </header>
  );
};

export default Header;
