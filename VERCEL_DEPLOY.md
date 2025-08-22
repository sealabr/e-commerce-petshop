# Deploy na Vercel

## Passos para fazer o deploy:

### 1. Instalar Vercel CLI (opcional)
```bash
npm i -g vercel
```

### 2. Fazer login na Vercel
```bash
vercel login
```

### 3. Deploy automático via GitHub
- Conecte seu repositório GitHub na Vercel
- A Vercel detectará automaticamente que é um projeto Vite
- Configure as variáveis de ambiente se necessário

### 4. Deploy manual via CLI
```bash
vercel --prod
```

## Configurações já aplicadas:

✅ **vercel.json** - Configuração do projeto
✅ **vite.config.ts** - Otimizado para produção
✅ **Build script** - Configurado para gerar `dist/`
✅ **SPA routing** - Configurado para React Router

## Estrutura de build:
- **Comando de build**: `npm run build`
- **Diretório de saída**: `dist/`
- **Framework**: Vite
- **Routing**: SPA com fallback para index.html

## Variáveis de ambiente (se necessário):
Crie um arquivo `.env.local` para desenvolvimento:
```env
VITE_API_URL=sua_api_url_aqui
```

Na Vercel, configure as mesmas variáveis no painel do projeto.

