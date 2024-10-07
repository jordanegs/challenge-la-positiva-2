# Documentación de uso

## Requisitos

- Node.js
- Java

## Instalación

Instalar [AWS CLI](https://aws.amazon.com/es/cli/) y luego configurar una cuenta de AWS.

```bash
# Configure sus credenciales:
$ aws configure
```

## Ejecución

```bash
# Contrucción de imagenes
$ docker build -t pods-frontend:latest -f frontend/Dockerfile .
$ docker build -t pods-backend:latest -f backend/Dockerfile .
# Desplegar recursos del frontend
$ kubectl apply -f k8s/frontend/frontend-deployment.yaml
$ kubectl apply -f k8s/frontend/frontend-service.yaml
# Desplegar recursos del backend
$ kubectl apply -f k8s/backend/backend-deployment.yaml
$ kubectl apply -f k8s/backend/backend-service.yaml
```
