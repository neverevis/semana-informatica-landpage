# Semana da Informática 2026 — IFSP Câmpus Araraquara

Landing page estática (HTML/CSS/JS puro, sem build) com a programação do evento,
que acontece nos dias **26, 27 e 28 de outubro de 2026**, no IFSP Câmpus Araraquara.

## Status atual

Atualizado em 03/09/2026. Fonte: cronograma no Drive + ata da reunião de organização de 01/09/2026.

### Palestras

| Dia | Período | Palestra | Palestrante | Status |
|---|---|---|---|---|
| 26/10 (Seg) | Manhã (8h20) | Game Design | Jefferson Santana | Confirmado |
| 27/10 (Ter) | Manhã | Desafios em Cibersegurança no Ambiente Digital | João Paulo Machado Vieira | Confirmado |
| 27/10 (Ter) | Tarde | Desenvolvimento de Jogos | Scorpion Bits | Confirmado |
| 27/10 (Ter) | Noite | Desafios em Cibersegurança no Ambiente Digital | João Paulo Machado Vieira | Confirmado |
| 28/10 (Qua) | Manhã / Tarde / Noite | — | — | Em aberto |

### Mini-cursos

| Mini-curso | Responsável | Status |
|---|---|---|
| Desenvolvimento de jogos (Godot/GDScript) | Scorpion Bits | Confirmado (dias 27 e 28) |
| Git e GitHub | Zenon + colega da comissão | Em negociação |
| Uso prático de IA com Ollama | Milan | Em negociação |
| Minicurso com Vinícius (tema a definir) | Vinícius | Em negociação |
| Música para jogos | Thales | Plano B |

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
