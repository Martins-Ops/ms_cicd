# Deploying Microservices to Kubernetes Using Helm Chart

This Project deploys a simple microservice (frontend and backend ) application to a Kubernetes Cluster with the help of a Package Manager called Helm Chart.
## Run Locally

## Frontend

Clone the project

```bash
  git clone https://github.com/Martins-Ops/microservice_app_helm_nginx.git
```
Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Backend

Clone the project

Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Prerequisite

Install Helm CLI

[Helm](https://helm.sh)

Install Kubectl

[Kubectl](https://kubernetes.io)

Install Minikube for Kubernetes Provisioning

[Minikube](https://minikube.sigs.k8s.io/docs/start/)

Install Docker

[Docker](https://docs.docker.com/engine/install/ubuntu/)

    
## Nginx Ingress Controller

The Ingress is a Kubernetes resource that lets you configure an HTTP load balancer for applications running on Kubernetes, represented by one or more Services. Such a load balancer is necessary to deliver those applications to clients outside of the Kubernetes cluster.

Install Using Helm Chart

```bash
  helm repo add nginx-stable https://helm.nginx.com/stable
  helm repo update
  helm install my-release nginx-stable/nginx-ingress
```

## Deployment

To deploy this project to Kubernetes run in the root directory

```bash
  minikube start 
  helm install <name_of_deployent> ./deploy_chart
```

If Minikube was started with Docker in a WSL2 environment run the command below

```bash
  minikube tunnel
```

## Accesing Our Application

For this Project **localhost** was used for hosting the application on Nginx, we can use a Domain Name instead

## Domain Name

If we used a Domain name then we would copy the following to "etc/host" 

<minikube_ip>  <domain_name>

### Visit the browser

**Frontend**

http://localhost

**Backend**

http://localhost/backend


