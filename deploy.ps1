# Script de Deploy para Vercel
# Execute este script no PowerShell

Write-Host "🚀 Iniciando deploy para Vercel..." -ForegroundColor Green

# Verificar se o Vercel CLI está instalado
try {
    vercel --version | Out-Null
    Write-Host "✅ Vercel CLI encontrado" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI não encontrado. Instalando..." -ForegroundColor Yellow
    npm install -g vercel
}

# Build do projeto
Write-Host "🔨 Fazendo build do projeto..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build concluído com sucesso!" -ForegroundColor Green
    
    # Deploy para Vercel
    Write-Host "🚀 Fazendo deploy para Vercel..." -ForegroundColor Blue
    vercel --prod
    
    Write-Host "🎉 Deploy concluído!" -ForegroundColor Green
    Write-Host "💡 Acesse seu projeto em: https://vercel.com/dashboard" -ForegroundColor Cyan
} else {
    Write-Host "❌ Erro no build. Verifique os erros acima." -ForegroundColor Red
    exit 1
}

