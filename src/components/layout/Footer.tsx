import Container from "@/components/layout/Container";

/**
 * Minimal footer shell. Content stays intentionally sparse per Phase 1 —
 * expanded only if a real need arises later.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Container className="flex h-16 items-center">
        <p className="font-mono text-xs text-text-tertiary">
          © {new Date().getFullYear()} Matee Ur Rehman
        </p>
      </Container>
    </footer>
  );
}