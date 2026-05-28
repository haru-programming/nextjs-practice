import Link from "next/link";

type HeaderProps = {
  studioName: string;
};

export function Header({ studioName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-lg font-bold">
          {studioName}
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-zinc-600 sm:flex">
          <Link href="/services" className="hover:text-zinc-950">
            Service
          </Link>
          <a href="#contact" className="hover:text-zinc-950">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
