# space-flight-news

### Tecnologias
![Javascript](https://img.shields.io/badge/JavaScript-yellow)
![VueJS](https://img.shields.io/badge/Vue.js-green)
![Vuex](https://img.shields.io/badge/Vuex-darkgreen)
![VueRouter](https://img.shields.io/badge/VueRouter-brightgreen)
![Axios](https://img.shields.io/badge/Axios-blue)
![Buefy](https://img.shields.io/badge/Buefy-blueviolet)
![Docker](https://img.shields.io/badge/Docker-blue)

###### This is a Challenge by [Coodesh](https://coodesh.com/)

---

## Sobre

Este projeto é uma aplicação web construída em **Vue.js** que consume as informações de artigos retornadas 
pela API pública Space Flight News. Além de exibir os artigos retornados pela API, é possível buscar, filtrar 
os artigos através de palavras chaves contidas no título e, também, ordenar por artigos mais antigos ou 
mais recentes.

##### Apresentação do projeto [aqui](https://www.loom.com/share/f40b09e4314f4a6ab5b3486a117f76dd?sharedAppSource=personal_library)

---

## Instalação
## Rodando o Projeto com Docker

#### Dependências
![Docker](https://img.shields.io/badge/Docker--blue)

### Construir a imagem
```
docker build -t carolclara/space-flight-news .
```

### Criar o container
```
docker run -it -p 8081:8080 -d --name space-flight-news carolclara/space-flight-news
```

### Rodar o container
```
npm run start 
OU 
docker start space-flight-news
```

### Reiniciar o container
```
npm run restart
```

### Para o container
```
npm run stop
```

### Acesse
```
localhost:8081
```


---

## Rodando o Projeto com NPM

#### Dependências

![Node](https://img.shields.io/badge/Node.js-16.13.0-success)
![NPM](https://img.shields.io/badge/NPM-8.1.0-red)

## Instalar pacotes
```
npm install
```

### Rodar o projeto
```
npm run serve
```

### Acesse
```
localhost:8080
```
