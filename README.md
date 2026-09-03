# Semana da Informática 2026 — IFSP Câmpus Araraquara

Landing page estática (HTML/CSS/JS puro, sem build) com a programação do evento,
que acontece nos dias 26, 27 e 28 de outubro de 2026.

## Rodando localmente

Não há dependências. Basta abrir `index.html` no navegador, ou servir a pasta:

```bash
python3 -m http.server 8000
```

e acessar `http://localhost:8000`.

## Atualizando o conteúdo

- **Programação**: edite os blocos `.day-panel` em `index.html` (seção `#programacao`).
  Cada dia tem três `.slot` (Manhã/Tarde/Noite). Um horário confirmado usa a classe
  `badge-confirmed`; um horário livre usa `slot-open` + `badge-open` ("Vaga em aberto").
- **Palestrantes**: seção `#palestrantes`, um `.speaker-card` por pessoa/instituição.
- **Contato**: e-mail da organização no rodapé e na seção `#parceiro`.

## Publicando (GitHub Pages)

No repositório, em Settings → Pages, selecione a branch de publicação e a pasta raiz (`/`).
Como é um site estático, nenhum passo de build é necessário.
