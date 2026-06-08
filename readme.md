# PSPSR — Guia de Execução Local

## Estrutura de Pastas

```
pspsr/
├── index.html          ← Ponto de entrada do sistema
├── css/
│   └── style.css       ← Todos os estilos visuais
└── js/
    └── script.js       ← Toda a lógica e interatividade
```

---

## Passo a Passo

**1. Baixar o projeto**
Faça o download da pasta `pspsr/` e salve em qualquer local do seu computador.

**2. Verificar a estrutura**
Confirme que os arquivos estão organizados exatamente como mostrado acima, com as subpastas `css/` e `js/` dentro de `pspsr/`.

**3. Abrir no navegador**
Acesse a pasta `pspsr/`, clique duas vezes no arquivo `index.html`.
O sistema abrirá diretamente no seu navegador padrão.

**4. Testar as funcionalidades**
- Navegue pelas seções pelo menu lateral: Dashboard, Pacientes, Evolução Clínica, Profissionais, Configurações.
- Abra os modais clicando nos botões "Novo Paciente", "Nova Evolução" e "Novo Profissional".
- Utilize o filtro de busca e o filtro por status na tela de Pacientes.
- Teste as abas na tela de Evolução Clínica (Evoluções / Encaminhamentos / Histórico).
- Verifique o comportamento responsivo redimensionando a janela do navegador.
- Em telas menores, use o ícone de menu (☰) para abrir e fechar a sidebar.

---

## Pré-requisitos

| Requisito | Detalhe |
|-----------|---------|
| Navegador | Google Chrome, Microsoft Edge ou Mozilla Firefox (versão atualizada) |
| Node.js | ❌ Não é necessário |
| Dependências | ❌ Não é necessário instalar nada |
| Terminal | ❌ Nenhum comando precisa ser executado |
| Servidor local | ❌ Não é necessário |

---

## Observação Técnica

O PSPSR foi desenvolvido com **HTML5, CSS3 e JavaScript puro**, sem nenhuma dependência externa instalável. A única requisição externa é o carregamento da fonte **Inter** via Google Fonts, que requer conexão com a internet. Caso não haja conexão, o sistema continuará funcionando normalmente com a fonte de sistema padrão do navegador.

---

## Compatibilidade Testada

| Navegador | Suporte |
|-----------|---------|
| Google Chrome 110+ | ✅ Total |
| Microsoft Edge 110+ | ✅ Total |
| Mozilla Firefox 110+ | ✅ Total |
| Safari 16+ | ✅ Total |

---

## Atenção

Não mova ou renomeie os arquivos individualmente. O `index.html` referencia os caminhos `css/style.css` e `js/script.js` de forma relativa. Se a estrutura de pastas for alterada, o sistema pode perder o estilo ou a interatividade.