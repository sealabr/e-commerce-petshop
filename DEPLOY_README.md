# 🚀 Deploy na Vercel - E-commerce PetShop

## 📋 Pré-requisitos

- ✅ Conta na [Vercel](https://vercel.com)
- ✅ Projeto no GitHub/GitLab/Bitbucket
- ✅ Node.js 18+ instalado

## 🎯 Métodos de Deploy

### 1. Deploy Automático (Recomendado)

1. **Conecte seu repositório:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório GitHub
   - A Vercel detectará automaticamente que é um projeto Vite

2. **Configure o projeto:**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Configure variáveis de ambiente** (se necessário):
   - Vá em Settings > Environment Variables
   - Adicione as variáveis do arquivo `env.example`

4. **Deploy:**
   - Clique em "Deploy"
   - A Vercel fará o build e deploy automaticamente

### 2. Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 3. Deploy via Script PowerShell

```powershell
# Execute o script de deploy
.\deploy.ps1
```

## ⚙️ Configurações Aplicadas

### ✅ vercel.json
- Configuração para projeto Vite
- SPA routing com fallback para index.html
- Headers de segurança
- Cache otimizado para assets

### ✅ vite.config.ts
- Build otimizado para produção
- Code splitting para vendor e UI
- Source maps desabilitados para produção

### ✅ Build Scripts
- `npm run build` - Gera o build de produção
- `npm run preview` - Preview local do build

## 🔧 Variáveis de Ambiente

### Desenvolvimento Local
```bash
# Copie o arquivo de exemplo
cp env.example .env.local

# Configure as variáveis
VITE_API_URL=https://sua-api.com
VITE_APP_NAME=PetShop
```

### Vercel
Configure as mesmas variáveis no painel da Vercel:
- Settings > Environment Variables
- Adicione para Production, Preview e Development

## 📱 Domínios

Após o deploy, você terá:
- **URL de produção**: `https://seu-projeto.vercel.app`
- **URLs de preview**: Para cada PR/commit
- **Domínio customizado**: Configure em Settings > Domains

## 🚨 Troubleshooting

### Build falha
```bash
# Limpe o cache
rm -rf node_modules package-lock.json
npm install

# Verifique os logs
vercel logs
```

### Página em branco
- Verifique se o `vercel.json` está correto
- Confirme que o build gera arquivos em `dist/`
- Verifique os logs de deploy

### Assets não carregam
- Verifique se o `outputDirectory` está como `dist`
- Confirme que o build inclui todos os assets

## 📞 Suporte

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **Comunidade**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

🎉 **Seu projeto está pronto para deploy na Vercel!**

