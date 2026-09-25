import Container from "@/components/layout/Container";

/**
 * Structural placeholder only. Sticky/scroll behavior, real nav links,
 * mobile menu, and the theme toggle are implemented in Phase 5.
 */
export default function Header() {
  return (
    <header className="border-b border-border-subtle">
      <Container className="flex h-16 items-center justify-between">
        <span className="font-mono text-sm text-text-secondary">MUR</span>
        <nav aria-label="Primary" />
      </Container>
    </header>
  );
}