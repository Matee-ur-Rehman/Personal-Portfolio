"use client";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  links: NavLink[];
  isOpen: boolean;
  onLinkClick: () => void;
}

export default function MobileMenu({ links, isOpen, onLinkClick }: MobileMenuProps) {
  return (
    <div
      className={`overflow-hidden border-b border-border-subtle bg-bg-primary transition-[max-height,opacity] duration-300 ease-out md:hidden ${
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className="py-3 font-mono text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
