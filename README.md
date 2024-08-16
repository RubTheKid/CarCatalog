# Car Catalog API

## Descrição

Este projeto é um trabalho complementar para criar uma API pública destinada à consulta de todos os carros comercializados no território brasileiro.
A API permite buscar informações sobre carros com base em marca, modelo, ano e versão. A intenção é fornecer uma solução acessível para integração em sistemas diversos.

Além disso, este projeto serve como uma extensão para meu TCC.

[MINTSAPI](https://github.com/RubTheKid/MintsApi) [MINTS DASHBOARD](https://github.com/rubthekid/mints.dashboard)
[MINTSWEB](https://github.com/rubthekid/mints.Web) [MINTSAPP](https://github.com/RubTheKid/mints.app)
(privados por enquanto)

## Funcionalidades

- **Consultar carros por marca**: Permite buscar veículos baseados na marca fornecida.
- **Consultar carros por modelo**: Permite buscar veículos baseados no modelo especificado.
- **Consultar carros por ano**: Permite buscar veículos fabricados no ano informado.
- **Consultar carros por versão**: Permite buscar veículos pela versão especificada.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Express**: Framework para construção de APIs em Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados dos carros em nuvem.
- **Mongoose**: Biblioteca para modelagem de objetos MongoDB em Node.js.


## Endpoints

- `GET /cars/brand/:brand` - Busca carros por marca.
- `GET /cars/model/:model` - Busca carros por modelo.
- `GET /cars/year/:year` - Busca carros por ano.
- `GET /cars/version/:version` - Busca carros por versão.

- 
## Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/rubthekid/CarCatalog.git
    cd CarCatalog
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto e adicione o URI do MongoDB:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/car-api
    ```

4. **Execute o servidor:**

    ```bash
    npm start
    ```

    ## Contribuição

Se você deseja contribuir para este projeto, siga as seguintes etapas:

1. Faça um fork do repositório.
2. Crie uma branch para suas modificações:

    ```bash
    git checkout -b feature/MinhaNovaFuncionalidade
    ```

3. Commit suas alterações:

    ```bash
    git commit -am 'Adiciona nova funcionalidade'
    ```

4. Faça um push para a branch:

    ```bash
    git push origin feature/MinhaNovaFuncionalidade
    ```

5. Crie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para mais informações, entre em contato:

- **Autor**: [Jader Cardoso](https://github.com/RubTheKid)
- **E-mail**: jadercardoso@tuta.io