# Guia de Desenvolvimento Local do NutriZen

Olá, contribuidor! Ficamos muito felizes em ter você por aqui. Este guia irá ajudá-lo a configurar o ambiente de desenvolvimento e a rodar o NutriZen na sua máquina local.

## Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas:

* **Node.js:** Versão 18.x ou superior. [Baixe aqui](https://nodejs.org/)
* **pnpm:** Usamos o `pnpm` como nosso gerenciador de pacotes. Após instalar o Node.js, instale-o com:
    ```bash
    npm install -g pnpm
    ```
* **Git:** Essencial para controle de versão. [Baixe aqui](https://git-scm.com/)

## 1. Configuração do Projeto

Siga estes passos para ter o código pronto para rodar.

### a. Fork e Clone

Primeiro, faça um [Fork](https://github.com/Coffee-System/nutrizen/fork) do repositório para a sua conta no GitHub.

Depois, clone o **seu fork** para a sua máquina local (lembre-se de substituir `<SEU-USUARIO>` pelo seu nome de usuário):

```bash
git clone [https://github.com/](https://github.com/)<SEU-USUARIO>/nutrizen.git
cd nutrizen
```

### b. Instale as Dependências

Agora, instale todas as dependências do projeto usando `pnpm`:

```bash
pnpm install
```

## 2. Configuração das Variáveis de Ambiente

Para que o aplicativo se conecte corretamente aos serviços externos (como o banco de dados), você precisa configurar suas variáveis de ambiente.

### a. Configure o Supabase

O NutriZen usa o [Supabase](https://supabase.com/) para banco de dados e autenticação. Você precisará criar um projeto gratuito para o desenvolvimento local.

1.  Crie uma conta gratuita no [Supabase](https://app.supabase.com/).
2.  Crie um novo projeto (ex: "nutrizen-dev").
3.  Após a criação do projeto, vá em **Project Settings > API**.
4.  Você encontrará sua **URL do Projeto** e sua **chave de API `anon (public)`**.

### b. Crie o Arquivo `.env.local`

Na raiz da aplicação web (`/apps/web`), crie um arquivo chamado `.env.local`. **Este arquivo não deve ser enviado para o GitHub.**

Copie o conteúdo do arquivo de exemplo (`.env.example`) para o seu novo arquivo e preencha com as suas chaves do Supabase:

```env
# Arquivo: /apps/web/.env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL="SUA_URL_DO_PROJETO_SUPABASE_AQUI"
NEXT_PUBLIC_SUPABASE_ANON_KEY="SUA_CHAVE_ANON_KEY_DO_SUPABASE_AQUI"

# Outras variáveis de ambiente do projeto irão aqui no futuro...
```

**Importante:** Você também precisará criar as tabelas do banco de dados no seu projeto Supabase. Nós iremos disponibilizar o script SQL para isso em breve.

## 3. Rodando a Aplicação

Com tudo configurado, você está pronto para rodar o servidor de desenvolvimento.

A partir da raiz do monorepo, execute o seguinte comando:

```bash
# Para rodar a aplicação web (Next.js)
pnpm --filter web dev
```

Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000). Você deverá ver a aplicação NutriZen rodando!

## Encontrou um Problema?

Se algo não funcionou como o esperado, por favor, [abra uma Issue](https://github.com/Coffee-System/nutrizen/issues) e nos conte o que aconteceu. Estamos aqui para ajudar!

Obrigado por contribuir!
