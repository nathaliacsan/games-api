# API de Games da {Reprograma}

Esse desafio foi passado na semana 10 do curso de back-end para reforçarmos os conhecimentos de PUT e PATCH

### Diferença entre PUT e PATCH

O `PUT` serve para atualizar um recurso inteiro, enquanto o `PATCH` é para atualizar um campos específicos do recursos.

#### Como utilizar cada um:

`PUT`
- Geralmente usado com parâmetro.
- Deve passar todos os dados do recursos, se você esquecer de colocar algum campo ele atualizará tudo e aquele campo esquecido sumirá. 

`PATCH`
- Use para editar o recurso sem a necessidade de enviar todos as chaves e valores do seu model
- Coloque o ID como parâmetro para que o serviço saiba o que será alterado.

### Ferramentas utilizadas

- `Node.Js`
- `Express`
- `Nodemon`
- `Cors`