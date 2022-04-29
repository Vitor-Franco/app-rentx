## Requisitos Funcionais - RF
[Descrição] - O que o usuário poderá fazer, a aplicação fazer e etc.

## Requisitos Não Funcionais - RNF
[Descrição] - Qual banco de dados utilizar. Coisas que não são necessariamente impactante na funcionalidade.

## Regras de negócio - RN
[Descrição] - Regra de negócio atrelada a um requisito funcional.


# Cadastrar Carros
### RF
[]. Deve ser possível cadastrar um novo carro.
[]. Deve ser possível listar todas as categorias.

### RN 
[]. Não deve ser possível cadastrar um carro com uma placa já existente.
[]. O carro deve ser cadastrado com `available` (disponibilidade) como verdadeira - disponível -.
[]. Apenas usuários 'administradores' podem cadastrar carros.

# Listagem de Carros
### RF
[]. Deve ser possível listar todos carros disponíveis.
[]. Deve ser possível listar todos carros disponíveis pelo nome da categoria.
[]. Deve ser possível listar todos carros disponíveis pelo nome da marca.
[]. Deve ser possível listar todos carros disponíveis pelo nome do carro.

### RN 
[]. O usuário não precisa estar autenticado.

# Cadastrado de Especificação no carro
### RF
[]. Deve ser possível cadastrar uma especificação para um carro.
[]. Deve ser possível listar todas as especificações.
[]. Deve ser possível listar todos os carros.

### RN 
[]. Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[]. Não deve ser possível cadastrar uma especificação já existente, para um segundo carro.
[]. Apenas usuários 'administradores' podem cadastrar Especificação.

# Cadastrado de imagens do carro
### RF
[]. Deve ser possível cadastrar uma imagem para um carro.
[]. Deve ser possível listar todos os carros.

### RNF
[]. Utilizar o multer para upload dos arquivos.

### RN 
[]. O usuário poderá cadastrar mais de uma imagem para um mesmo carro.
[]. Apenas usuários 'administradores' podem cadastrar.

# Aluguel de carro
### RF
[]. Deve ser possível cadastrar um aluguel.

### RN 
[]. O aluguel deve ter duração mínima de 24 horas.
[]. Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
[]. Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.