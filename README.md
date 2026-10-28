# O pequeno universo de Kally

Site em Next.js App Router, React, TypeScript, Tailwind CSS, Motion e Lucide. Inclui as 11 fotos fornecidas, sem inventar acontecimentos. A linha do tempo começa apenas com o marco planejado do encontro.

## Executar e publicar na Vercel

Requer Node.js 20.9+ e pnpm. Execute `pnpm install` e `pnpm dev`. Para produção: `pnpm build`. A exportação estática é gerada em `out/`. Na Vercel, importe este diretório como projeto Next.js; o comando de build é `pnpm build` e a saída é `out`.

O arquivo `.openai/hosting.json` identifica a publicação privada no Sites. Ele não é necessário para publicar na sua conta Vercel. Não contém senha nem chave privada.

## Personalizar

`app/config.ts` reúne o nome de referência, o instante do encontro (ISO 8601 com deslocamento -03:00), a playlist, a música, as seis cartas e as fotografias iniciais. Também contém 100 motivos e 52 bilhetes. Os textos editoriais da página ficam em `app/page.tsx`; ao trocar o nome da destinatária, ajuste também esses textos. O calendário e as surpresas diárias foram desenhados especificamente para novembro de 2026.

A data configurada para o contador e para liberar o diário é **23/11/2026 às 00:00 de São Paulo**, equivalente a 03:00 UTC. A mudança ocorre sem apagar nenhuma seção. O calendário de presentes abre um bilhete por dia, de 1 a 23 de novembro. O jardim continua florido depois e cresce com as memórias.

## Dados e privacidade

Este projeto está no modo local provisório solicitado, sem Supabase configurado. IndexedDB guarda as fotos novas, lembranças, planos, favoritos, desbloqueios e progresso do jogo. A preferência de tema fica em localStorage. Os dados **não sincronizam entre aparelhos**, não têm autenticação de casal e podem ser vistos por qualquer pessoa com acesso a esse navegador. Limpar os dados do navegador ou usar uma sessão privada pode apagar o diário.

Use **Nossa história → Exportar** regularmente. O JSON inclui textos, imagens (inclusive as iniciais), planos e progresso. Para levar para outro navegador ou para a futura URL Vercel, use **Importar** e confirme a substituição. A importação valida o formato antes de substituir. Não importe arquivos desconhecidos; os backups contêm fotos pessoais. Uma origem nova possui armazenamento separado.

A publicação Sites inicia privada, acessível apenas ao proprietário. Ela não adiciona Kally automaticamente. Compartilhar o site ou configurar Supabase requer uma etapa posterior com as contas e permissões reais dos dois. Não há segurança simulada: as cartas bloqueadas e o cantinho secreto são brincadeiras de descoberta, não barreiras de autenticação.

Para persistência compartilhada futura, configure um projeto Supabase real, Auth com os dois usuários autorizados, políticas RLS por casal, bucket privado e URLs assinadas. A implementação atual não envia memórias a um backend. Não insira a chave service_role no frontend.

## Música

A playlist usa somente o iframe oficial do Spotify e um link externo. O site não baixa áudio nem simula reprodução. A disponibilidade da música e dos controles depende do Spotify, do dispositivo e da conta. Não há autoplay forçado. Te Devoro, de Djavan, está identificada como a música principal; não foi inventado um ID de faixa.

## Verificação

Build de produção e TypeScript. Verificações no navegador: abertura, cartas, motivos, minijogo até 23, corações escondidos, persistência após recarregar, temas, responsividade, exportação/importação com imagens. A fase pós-encontro foi exercitada com data temporária de teste e restaurada para 23/11/2026 antes da publicação: cadastro, persistência, edição, favorito e exclusão confirmada de uma lembrança de teste. Não há eventos de teste cadastrados no código entregue.
