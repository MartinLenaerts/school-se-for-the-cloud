# school-se-for-the-cloud

For the project we used Docker, Kubernetes, Minikube

We use Digital Ocean as cloud infrastructure

![](assets/334899497_1938923689788493_1359734916298432329_n.png)

We have created a database and a droplet for the deployment

![](assets/337745153_914677139872248_197690834359376029_n.png)
![](assets/337049301_610658290522427_6462022159836551707_n.png)

For automatically deploy our app we have created a ci cd pipeline that deploy the services to docker hub
and update the deployment of kubernetes by restarting the pods.

![](assets/cicd.png)

For the k8s config we have created kubernetes YML manifest for our services.

![](assets/k8s_manifest.png)

### Deployment

![](assets/k8s_deployment.png)

Minikube service list

![](assets/minikube.png)

ingress.yml

![](assets/ingress.png)


---

## Labs

![](assets/labs_LENAERTSMARTIN.png)

![](assets/labs_LIWILLIAM.png)