import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — TuneShip",
  description: "Saiba como o TuneShip coleta, usa e protege suas informações.",
};

const sections = [
  {
    title: "1. Informações Gerais",
    content: `O TuneShip ("nós", "nosso") é um serviço gratuito de migração de playlists entre plataformas de música. Esta Política de Privacidade descreve como tratamos as informações obtidas durante o uso do serviço em tuneship-web-music.vercel.app.

Ao utilizar o TuneShip, você concorda com os termos descritos nesta política. Se não concordar, por favor não utilize o serviço.`,
  },
  {
    title: "2. Informações que Coletamos",
    content: `O TuneShip coleta apenas o mínimo de informações necessário para realizar a migração:

• Token de acesso OAuth (Spotify ou YouTube Music): obtido com sua autorização explícita, utilizado exclusivamente para criar a playlist no destino durante a sessão ativa. Não é armazenado em nossos servidores após o término da operação.

• Lista de músicas: fornecida por você manualmente ou importada da plataforma de origem. Utilizada apenas para realizar a busca e criação da playlist. Não é armazenada permanentemente.

• Dados de uso anônimos: logs técnicos de requisições (endereço IP, horário, endpoint acessado) para fins de diagnóstico e segurança. Esses logs são retidos por até 7 dias e não são vinculados a nenhuma identidade pessoal.

Não coletamos nome, e-mail, data de nascimento, histórico de reprodução, biblioteca musical completa ou qualquer outro dado do seu perfil nas plataformas de música.`,
  },
  {
    title: "3. Como Usamos suas Informações",
    content: `As informações coletadas são usadas exclusivamente para:

• Autenticar sua conta na plataforma de destino via OAuth 2.0
• Buscar as músicas informadas na plataforma de destino
• Criar a playlist em seu nome na plataforma escolhida
• Garantir a segurança e o funcionamento do serviço

Não utilizamos suas informações para publicidade, análise comportamental, venda a terceiros ou qualquer finalidade além da migração de playlists.`,
  },
  {
    title: "4. Compartilhamento de Informações",
    content: `Não vendemos, alugamos ou compartilhamos suas informações com terceiros, exceto:

• Spotify AB: quando você autoriza o acesso via Spotify OAuth, a comunicação ocorre diretamente com a API oficial do Spotify conforme seus Termos de Serviço.

• Google LLC: quando você autoriza o acesso via Google OAuth, a comunicação ocorre diretamente com a YouTube Data API v3 conforme os Termos de Serviço do Google.

• Provedores de infraestrutura: utilizamos servidores para processar as requisições. Os dados transitam de forma criptografada via HTTPS e não são acessados por esses provedores para fins próprios.`,
  },
  {
    title: "5. Retenção de Dados",
    content: `O TuneShip não mantém banco de dados de usuários. Especificamente:

• Tokens OAuth: existem apenas na memória do servidor durante o processamento da tarefa (geralmente menos de 60 segundos) e são descartados imediatamente após.

• Lista de músicas: processada em memória e descartada após a criação da playlist.

• Cache de busca: resultados de pesquisa de músicas são armazenados em cache por até 24 horas para otimizar o desempenho, sem associação a nenhum usuário específico.

• Logs técnicos: retidos por até 7 dias para fins de diagnóstico.`,
  },
  {
    title: "6. Segurança",
    content: `Adotamos as seguintes medidas de segurança:

• Comunicação exclusivamente via HTTPS/TLS 1.2+
• Autenticação OAuth 2.0 com padrões oficiais do Spotify e Google
• Tokens nunca expostos no frontend ou em logs
• Nenhum dado sensível armazenado em banco de dados
• Infraestrutura protegida com firewall e controle de acesso`,
  },
  {
    title: "7. Seus Direitos e Controle de Acesso",
    content: `Você tem total controle sobre as permissões concedidas ao TuneShip:

• Revogar acesso ao Spotify: acesse spotify.com → Configurações → Aplicativos → TuneShip → Remover acesso.

• Revogar acesso ao Google/YouTube: acesse myaccount.google.com/permissions → TuneShip → Remover acesso.

Como não armazenamos dados pessoais identificáveis, não há perfil de usuário para excluir. A revogação do acesso nas plataformas acima é suficiente para encerrar completamente nossa capacidade de agir em seu nome.`,
  },
  {
    title: "8. Cookies e Armazenamento Local",
    content: `O TuneShip utiliza sessionStorage do navegador exclusivamente para:

• Manter o estado de autenticação durante a sessão ativa
• Transferir dados de demonstração entre páginas

Esses dados são automaticamente apagados ao fechar o navegador. Não utilizamos cookies de rastreamento, analytics ou publicidade.`,
  },
  {
    title: "9. Menores de Idade",
    content: `O TuneShip não é direcionado a menores de 13 anos. Não coletamos intencionalmente informações de crianças. Se você acredita que uma criança utilizou o serviço, entre em contato conosco para que possamos tomar as medidas cabíveis.`,
  },
  {
    title: "10. Lista de Espera",
    content: `Para usuários que desejam acesso antecipado ao TuneShip, oferecemos um formulário de lista de espera. Nesse formulário coletamos:

• Nome
• E-mail de contato: para notificá-lo quando sua vaga for liberada
• E-mail cadastrado no Spotify: necessário para liberar o acesso manualmente durante o período de revisão do Spotify

Esses dados são armazenados de forma segura em nossa infraestrutura e utilizados exclusivamente para gerenciar o processo de liberação de acesso. Não são compartilhados com terceiros.

Para solicitar a remoção dos seus dados da lista de espera, entre em contato através do e-mail contato@tuneship.app com o assunto "Remover da lista de espera".`,
  },
  {
    title: "11. Alterações nesta Política",
    content: `Podemos atualizar esta Política de Privacidade periodicamente. Quando isso ocorrer, a data de "Última atualização" no topo desta página será revisada. Recomendamos que você revise esta página ocasionalmente.`,
  },
  {
    title: "12. Contato",
    content: `Para dúvidas, solicitações ou preocupações relacionadas a esta Política de Privacidade, entre em contato:

E-mail: contato@tuneship.app
Site: tuneship-web-music.vercel.app

Responderemos em até 5 dias úteis.`,
  },
];

export default function PrivacyPage() {
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
              Política de Privacidade
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Última atualização: <span className="font-medium text-foreground">{lastUpdated}</span>
            </p>
          </div>

          {/* Resumo */}
          <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="font-semibold text-foreground mb-2">Resumo</h2>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Não armazenamos seus dados pessoais ou histórico musical</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Tokens OAuth são usados apenas durante a migração e descartados em seguida</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Não vendemos nem compartilhamos suas informações com terceiros</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Você pode revogar o acesso a qualquer momento nas configurações do Spotify ou Google</li>
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
