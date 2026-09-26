import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { contactChannels } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border-subtle py-14 md:py-20 lg:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
            05 — Contact
          </p>

          <p className="mt-6 max-w-[520px] text-lg leading-[1.6] text-text-secondary">
            Open to internships, full-time opportunities, and freelance work.
          </p>

          <div className="mt-8 flex flex-col divide-y divide-border-subtle border-t border-border-subtle sm:max-w-[480px]">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-4 transition-colors duration-150"
              >
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-text-tertiary">
                  {channel.label}
                </span>
                <span className="font-mono text-[0.8125rem] text-text-secondary transition-colors duration-150 group-hover:text-accent">
                  {channel.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
