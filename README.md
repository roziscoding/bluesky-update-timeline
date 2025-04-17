# Bluesky Update Timeline

Website simples que usei quando tava internado pra postar updates via bluesky pra minha família e amigos.

## Back-end

Essa aplicação depende de um back-end para realizar o envio de notificações push e gerenciar os posts curtidos.
O código do back-end é escrito em TypeScript e projetado pra ser executado no Deno Deploy.
Você pode encontrá-lo em [roziscoding/health-updates-server](https://github.com/roziscoding/health-updates-server/).

## Executando

1. Copie o arquivo `.env.sample` para `.env`:
    ```sh
    cp .env.sample .env
    ```
1. Preencha as variáveis de ambiente conforme descrito nos comentários do arquivo
1. Instale as dependências:
    ```sh
    pnpm i
    ```
1. Adicione o certificado `localhost.cert`, que foi gerado na raiz do repositório, aos certificados confiados pelo seu sistema operacional.
1. Execute em modo de desenvolvimento:
    ```sh
    pnpm run dev
    ```
1. Acesse aplicação em https://localhost:3000/

## Por que HTTPS?

PWAs não possuem todas as funcionalidades quando acessados via sem HTTP.
Era pra ter uma exceção nesse sentido pro domínio `localhost` mas comigo não funcionou.