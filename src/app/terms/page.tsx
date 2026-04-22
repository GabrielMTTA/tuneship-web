import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Termos de Serviço — TuneShip",
  description: "Termos e condições de uso do serviço TuneShip.",
};

const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao acessar ou utilizar o TuneShip ("Serviço"), disponível em tuneship-web-music.vercel.app, você concorda em cumprir estes Termos de Serviço. Se não concordar com algum dos termos aqui descritos, por favor não utilize o Serviço.

O TuneShip é fornecido gratuitamente, sem fins comerciais, como uma ferramenta de utilidade pessoal para migração de playlists entre plataformas de música.`,
  },
  {
    title: "2. Descrição do Serviço",
    content: `O TuneShip permite que usuários migrem playlists entre plataformas de música (Spotify e YouTube Music) por meio de autenticação OAuth 2.0 oficial com cada plataforma.

O Serviço realiza exclusivamente as seguintes operações em seu nome:
• Buscar músicas na plataforma de destino
• Criar uma nova playlist em sua conta na plataforma de destino
• Adicionar as músicas encontradas à playlist criada

O TuneShip não realiza nenhuma outra operação além das explicitamente listadas acima.`,
  },
  {
    title: "3. Uso do Serviço",
    content: `Ao utilizar o TuneShip, você declara que:

• Tem pelo menos 13 anos de idade
• Possui conta válida nas plataformas de música utilizadas
• Utilizará o Serviço apenas para fins pessoais e lícitos
• Não tentará contornar, desabilitar ou interferir nos mecanismos de segurança do Serviço
• É responsável por manter a confidencialidade de suas credenciais de acesso nas plataformas de origem

Você concorda em não usar o Serviço para qualquer finalidade ilegal, incluindo violação de direitos autorais ou de propriedade intelectual.`,
  },
  {
    title: "4. Autenticação e Permissões OAuth",
    content: `Para utilizar o TuneShip, você autoriza o acesso à sua conta nas plataformas de música via OAuth 2.0. As permissões solicitadas são:

Spotify: criar e modificar playlists em sua conta
YouTube Music (Google): criar playlists e adicionar vídeos às suas playlists

Essas permissões são utilizadas exclusivamente para a funcionalidade de migração de playlists. Você pode revogar o acesso a qualquer momento nas configurações das respectivas plataformas (Spotify ou Google).

O TuneShip não solicita, acessa ou armazena seu histórico de reprodução, biblioteca completa, dados financeiros ou qualquer informação além do estritamente necessário.`,
  },
  {
    title: "5. Propriedade Intelectual",
    content: `O código-fonte, design e conteúdo do TuneShip são de propriedade de seus criadores. As playlists criadas pertencem inteiramente a você, o usuário.

O TuneShip não reivindica nenhum direito sobre as músicas, playlists ou conteúdo de sua propriedade. Toda a propriedade intelectual relacionada ao conteúdo musical pertence aos respectivos detentores de direitos e às plataformas utilizadas.`,
  },
  {
    title: "6. Limitação de Responsabilidade",
    content: `O TuneShip é fornecido "como está" (as is), sem garantias de qualquer natureza. Não garantimos:

• Disponibilidade contínua ou ininterrupta do Serviço
• Precisão de 100% na correspondência de músicas entre plataformas
• Compatibilidade permanente com as APIs do Spotify ou Google

O TuneShip não se responsabiliza por perdas ou danos resultantes de:
• Erros na migração de playlists
• Interrupções nas APIs de terceiros (Spotify, Google)
• Uso indevido do Serviço
• Modificações nas políticas das plataformas de música

A responsabilidade máxima do TuneShip, em qualquer hipótese, é limitada a zero, uma vez que o Serviço é gratuito e sem fins comerciais.`,
  },
  {
    title: "7. Serviços de Terceiros",
    content: `O TuneShip integra-se a serviços de terceiros. Ao utilizá-los por meio do TuneShip, você também está sujeito aos termos desses serviços:

• Spotify: https://www.spotify.com/legal/end-user-agreement/
• Google / YouTube: https://policies.google.com/terms

O TuneShip não é afiliado, endossado ou patrocinado pelo Spotify ou pelo Google.`,
  },
  {
    title: "8. Privacidade",
    content: `O uso de suas informações pessoais é regido pela nossa Política de Privacidade, disponível em tuneship-web-music.vercel.app/privacy. Ao usar o Serviço, você concorda com a coleta e uso de informações conforme descrito na Política de Privacidade.`,
  },
  {
    title: "9. Modificações do Serviço e dos Termos",
    content: `Nos reservamos o direito de modificar ou descontinuar o Serviço a qualquer momento, sem aviso prévio.

Estes Termos de Serviço podem ser atualizados periodicamente. A data de "Última atualização" reflete a versão mais recente. O uso continuado do Serviço após a publicação de alterações constitui sua aceitação dos novos termos.`,
  },
  {
    title: "10. Lei Aplicável",
    content: `Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Qualquer disputa decorrente do uso do Serviço será submetida à jurisdição exclusiva dos tribunais competentes no Brasil.`,
  },
  {
    title: "11. Contato",
    content: `Para dúvidas ou questões relacionadas a estes Termos de Serviço, entre em contato:

E-mail: contato@tuneship.app
Site: tuneship-web-music.vercel.app`,
  },
];

export default function TermsPage() {
  const lastUpdated = "22 de abril de 2026";

  return (
    <div className="flex min-h-full flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">

          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Documento legal
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Termos de Serviço
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Última atualização: <span className="font-medium text-foreground">{lastUpdated}</span>
            </p>
          </div>

          {/* Resumo */}
          <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="font-semibold text-foreground mb-2">Resumo</h2>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>O TuneShip é gratuito e sem fins comerciais</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Acessamos apenas o necessário para criar sua playlist</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Você pode revogar o acesso a qualquer momento</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Não somos afiliados ao Spotify ou Google</li>
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map(({ title, content }) => (
              <section key={title}>
                <h2 className="text-lg font-semibold text-foreground mb-3">{title}</h2>
                <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {content}
                </div>
              </section>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-border">
            <Link href="/" className="text-sm text-primary hover:underline">
              ← Voltar para o início
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
