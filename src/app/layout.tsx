import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Homies Town — Um lugar para construir juntos",
    template: "%s | Homies Town",
  },
  description:
    "Uma pequena cidade feita entre amigos. Explora o bairro, visita as casas e constrói o teu cantinho com React e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>
        <a href="#conteudo" className="skip-link">
          Saltar para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <footer className="site-footer page-width">
          <span>Uma pequena cidade. Um monte de possibilidades.</span>
          <span>
            Feito de código e amizade <span aria-hidden="true">♡</span>
          </span>
        </footer>
      </body>
    </html>
  );
}
