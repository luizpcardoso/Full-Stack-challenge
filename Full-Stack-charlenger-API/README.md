# Projeto-Full-Stack

## Instruções para rodar a api de forma local:

- Após clonar o repositório crie um arquivo .env na raiz do projeto contendo o salt do JWT e a URI do db. Para maior comodidade deixei um .envExemple na raiz do projeto, se preferir pode apenas renomer o arquivo de ".envExample" para ".env", os dados já estão definidos para teste não sendo necessário alterar.

- após configurar o arquivo .env bas rodar o comando: `docker-compose up --build`.
- Este último comnado criará os containers da aplicação na porta 3001, e do DB na porta 5432 por padrão. Recomendo verificar a disponibilidade das portas antes de rodar a aplicação.

# Documentação

para teste local use a url base:http://localhost:3001

## <strong>Rotas User</strong>

---

## User create:

## Rota: /api/user

Rota tipo POST para criação de um novo usuário. <br />

- username: deve ter ao mesnos 3 caracteres. <br />
- password: deve conter ao menos 8 caracteres, comportos ao menos um númeral e uma letra maiúscula.

### Exemplo:

```
{
	"username":"luiz",
	"password":"Luiz123"
}
```

### Resposta 201:

```
{
	"username":"luiz",
}
```

## User login:

## Rota: /api/login

Roda tipo POST para login de um novo usuário. <br />

- Caso a conta não exista e/ou as credenciaís estejam erradas a aplicação retornará uma mensagem de erro. <br />
- Em caso de sucesso será retornado um tokem com exparação para 24h.

### Exemplo:

```
{
	"username":"luiz",
	"password":"Luiz123"
}
```

### Resposta 200:

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpVCJ9.eyJ1c2VybmFtZSIImx1aXoiLCJpYXQiOjE2Njg2MzE2NzEsImV4cCI6MTY2ODcxODA3MX0.Ga9j5O0dkCj--6F2HTnXIHtrYyLycHywvBl7-t1VIc"
}
```

## User get balance:

## Rota: /api/balance

Rota tipo GET para buscar o saldo do usuário logado. <br />

- Não possui corpo da requisição, deve informar no headder o token do usuário.

### Resposta:

```
{
	"balance": 80
}
```

# Rotas transações.

## transaction POST:

## Rota: /api/pay

- cria uma transação de transferência de fundos entre usuários.
- Deve ser unformado no header da requisição o toquem do usuário pagador.
- Deve ser informado no corpo da requisição o username do usuário recebedor e o valor da tranferência.

### Exemplo:

```
{
	"username":"luiz",
	"value":5
}
```

### Resposta:

```
{
	"balance": 80
}
```

## transaction GET:

## Rota: /api/transactions

- Lista todas as trasações realizadas pelo usuário.
- O token deve ser informado no header da requisição.
- é possível filtrar por type="cashIn", type="cashOut" e date="Datetime" utilizando query params.
- Não há corpo na requisição.

### Exemplos:

Rota com filtros: api/transactions?date=2022-11-16T18:36:39.064Z&type=cashIn

### Resposta:

```
{
	"cashIn": [
		{
			"transaction_id": "8e0b0dbf-3334-4f8d-b31b-fb5c176bd384",
			"value": 5,
			"createdAt": "2022-11-16T20:56:55.624Z",
			"debitedAccount": {
				"account_id": "8f9e811a-3c03-43e9-93ca-c14e1e58b7e1",
				"balance": 120
			},
			"creditedAccount": {
				"account_id": "e4165a3f-30cd-41f3-816f-0e02907ff152",
				"balance": 80
			}
		}
    ...
}


```
