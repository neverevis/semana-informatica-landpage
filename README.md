# Semana da Informática 2026 — IFSP Câmpus Araraquara

Landing page estática (HTML/CSS/JS puro, sem build) com a programação do evento,
que acontece nos dias **26, 27 e 28 de outubro de 2026**, no IFSP Câmpus Araraquara.

## Status atual

Atualizado em 28/09/2026. Fonte: cronograma no Drive + ata da reunião de organização de 01/09/2026 + revisão dos cards da landing page.

### Palestras e mesas-redondas

| Dia | Período | Atividade | Palestrante | Status |
|---|---|---|---|---|
| 26/10 (Seg) | Manhã (8h20 – 9h20) | Palestra: Game Design | Jefferson Santana | Confirmado |
| 26/10 (Seg) | Tarde (13h – 14h) | Palestra: Mercado de Trabalho em Jogos | Scorpion Bits | Confirmado |
| 26/10 (Seg) | Noite (19h10 – 20h10) | Mudar de rota, transformar o jogo — carreira, tecnologia e transformação digital no campo | Daniel Mendes | Confirmado |
| 27/10 (Ter) | Manhã (8h20 – 9h20) | Desafios em Cibersegurança no Ambiente Digital | João Paulo Machado Vieira | Confirmado |
| 27/10 (Ter) | Tarde (13h – 14h) | Me formei, e agora? Entendendo o mercado tech... | Isaias Silva | Confirmado |
| 27/10 (Ter) | Noite (19h10 – 20h10) | Do backlog ao Pull Request: agentes de IA no ciclo real de desenvolvimento de software | Bruno Silvestre | Confirmado |
| 28/10 (Qua) | Manhã (8h20 – 9h20) | Mesa-redonda: Mercado de Trabalho (ADS) | Ex-alunos do IFSP | Confirmado |
| 28/10 (Qua) | Tarde (15h – 17h30) | Mini-curso: Desenvolvimento de Aplicações Inteligentes com Node.js e IA Generativa | Igor Sasaki | Confirmado |
| 28/10 (Qua) | Noite (19h10 – 20h10) | Do Currículo ao Portfólio de Impacto: Aplicando UX... | Ivo C. Neto | Confirmado |
| 28/10 (Qua) | Noite (21h – 22h30) | Mesa-redonda (TSI) & Encerramento Oficial | Comissão Organizadora e convidados | Confirmado |

> **Duração das palestras:** Cada palestra tem duração de **1 hora**.
> **Aviso de vagas:** O quadro de palestras está totalmente preenchido (não há mais vagas para palestrantes).
> Ainda há disponibilidade para interessados em ministrar **mini-cursos**.

### Mini-cursos

- **26/10 e 27/10**: Mini-cursos sem temática de IA, distribuídos em 2 dias (1h30 por dia: Manhã 10h10 – 11h40 e Noite 21h – 22h30).
- **28/10**: Mini-cursos com temática de IA, concentrados na quarta-feira à tarde (15h – 17h30).

| Mini-curso | Responsável | Status |
|---|---|---|
| Desenvolvimento de jogos (Godot/GDScript) | Scorpion Bits | Confirmado (26/10 e 27/10, 1h30/dia) |
| Desenvolvimento de Aplicações Inteligentes com Node.js e IA Generativa | Igor Sasaki | Confirmado (28/10, Tarde 15h – 17h30) |
| Arte Digital para Jogos (inclui pixel art) | Ana Laura Maekawa (Scorpion Studios) | Em negociação (26/10 e 27/10) |
| Git e GitHub | Marcelo, Zenon, Antônio e Asafe | Confirmado (26/10 e 27/10, 1h30/dia) |
| Mini-curso (tema a definir) | Gustavo Furquim | Confirmado (tema a definir) |
| Música para jogos | Thales (Reserva) | Plano B (26/10 e 27/10, 1h30/dia) |
| Vaga em aberto | A definir | Disponível para interessados |

> Atenção: **Scorpion Bits** (estúdio comercial, palestra confirmada de 26/10) e **Scorpion Studios**
> (grupo de estudos do próprio IFSP, minicurso de arte digital) são entidades diferentes apesar do
> nome parecido.

Detalhes completos, horários-padrão do dia e a lista de vagas em aberto estão na própria
[página do evento](index.html) (seção Programação / Mini-cursos).

A prospecção de empresas/instituições e as pendências internas de logística (reserva de
auditório, edital de patrocínio, comissão organizadora etc.) ficam nos documentos do Drive
compartilhado do evento — não estão neste repositório público por conterem contatos e
negociações ainda em aberto.

## Estrutura do projeto

```
index.html            página principal
assets/css/style.css  estilos
assets/js/main.js     interações (menu mobile, abas de dias)
docs/HISTORICO.md      linha do tempo de decisões de organização
```

## Rodando localmente

Não há dependências. Basta abrir `index.html` no navegador, ou servir a pasta:

```bash
python3 -m http.server 8000
```

e acessar `http://localhost:8000`.

## Atualizando o conteúdo

- **Programação**: edite os blocos `.day-panel` em `index.html` (seção `#programacao`).
  Cada dia tem três `.slot` (Manhã/Tarde/Noite). Um horário confirmado usa a classe
  `badge-confirmed`; um em negociação usa `badge-proposed`; um horário livre usa
  `slot-open` + `badge-open` ("Vaga em aberto").
- **Mini-cursos**: seção `#minicursos`, um `.minicourse-card` por curso.
- **Palestrantes**: seção `#palestrantes`, um `.speaker-card` por pessoa/instituição.
- **Contato**: e-mail da organização no rodapé e na seção `#parceiro`.
- Depois de atualizar, registre a mudança relevante em `docs/HISTORICO.md`.

## Publicando (GitHub Pages)

No repositório, em Settings → Pages, selecione a branch de publicação e a pasta raiz (`/`).
Como é um site estático, nenhum passo de build é necessário.
