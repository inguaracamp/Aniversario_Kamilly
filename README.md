# Convite Cinematográfico — Kamys · 15 Anos

Convite digital tema **Oceano Elegante**, pronto para compartilhar no WhatsApp.

## Testar localmente

1. Abra o arquivo **`index.html`** no navegador (duplo clique ou arraste para Chrome/Edge/Firefox).
2. Ou use um servidor local (recomendado para testar áudio e caminhos):

```powershell
cd "c:\Users\naelg\Desktop\Projeto PJ\Aniversario_Kamilly"
npx --yes serve .
```

3. Acesse `http://localhost:3000` no celular (mesma rede Wi-Fi) para simular a experiência real.

## Deploy no Vercel (via GitHub)

1. Crie um repositório no GitHub e faça push desta pasta.
2. Acesse [vercel.com/new](https://vercel.com/new) → Import Project → selecione o repo.
3. Deploy automático (sem config extra — site estático).
4. **Após o deploy**, edite em `index.html`:
   - `og:image` → URL absoluta: `https://SEU-PROJETO.vercel.app/assets/og-convite.jpg`
   - `og:url` (opcional) → URL do site
5. Force refresh do preview WhatsApp: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

## Onde editar

| O quê | Arquivo | Buscar por |
|-------|---------|------------|
| Número WhatsApp | `index.html` | `wa.me/5521988240767` |
| Link Google Maps | `index.html` | `maps.google.com` |
| Meta OG (preview WhatsApp) | `index.html` | `og:image` |
| Música de fundo | `assets/musica-fundo.mp3` | adicionar arquivo MP3 |
| Foto da Kamys (opcional) | `index.html` | `foto-kamys.jpg` (descomentar) |
| Textos do convite | `index.html` | seções `#convite`, `#local`, etc. |
| Cores e animações | `css/styles.css` | variáveis `:root` |

## Estrutura

```
├── index.html          ← abrir este arquivo para testar
├── css/styles.css
├── js/main.js
├── imgs/               ← ilustrações aquarela
├── assets/
│   ├── og-convite.jpg  ← preview ao compartilhar link
│   └── musica-fundo.mp3 (adicionar)
└── vercel.json
```

## Assets pendentes (opcionais)

- **`assets/musica-fundo.mp3`** — música oceânica suave (o botão de som aparece após abrir o convite)
- **`assets/foto-kamys.jpg`** — foto da aniversariante na capa (linha comentada no HTML)

## ASSETS NECESSÁRIOS (referência)

| Arquivo | Pasta | Status |
|---------|-------|--------|
| concha.png | imgs/ | ✅ |
| estrela-do-mar.png | imgs/ | ✅ |
| agua-viva.png | imgs/ | ✅ |
| cavalo-marinho.png | imgs/ | ✅ |
| tartaruga-horizontal.png | imgs/ | ✅ |
| tartaruga-inclinada.png | imgs/ | ✅ |
| og-convite.jpg | assets/ | Capa desktop + preview WhatsApp |
| og-convite-vertical.png | assets/ | Capa celular (padrão) |
| musica-fundo.mp3 | assets/ | ⏳ adicionar |
| foto-kamys.jpg | assets/ | ⏳ opcional |

## Dica: comprimir imagens

As PNGs em `imgs/` são grandes (~1 MB cada). Se o carregamento no 4G estiver lento, comprima em [squoosh.app](https://squoosh.app) antes do deploy final.
