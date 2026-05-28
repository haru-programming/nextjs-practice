type FooterProps = {
  studioName: string;
};

export function Footer({ studioName }: FooterProps) {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-zinc-950">{studioName}</p>
        <p>© 2026 {studioName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
