provider "digitalocean" {
  token = "your-digitalocean-access-token"
}

resource "digitalocean_kubernetes_cluster" "app_cluster" {
  name = "app-cluster"
  region = "nyc1"
  version = "1.22.1-do.1"
  node_pool {
    name = "app-pool"
    size = "s-2vcpu-2gb"
    node_count = 2
  }
}

resource "digitalocean_kubernetes_namespace" "app_namespace" {
  metadata {
    name = "app-ns"
  }
}

resource "digitalocean_kubernetes_deployment" "app_deployment" {
  metadata {
    name = "app-deployment"
    namespace = digitalocean_kubernetes_namespace.app_namespace.metadata.0.name
  }
  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "app"
      }
    }
    template {
      metadata {
        labels = {
          app = "app"
        }
      }
      spec {
        container {
          name = "app-container"
          image = "my-registry/app:latest"
          port {
            container_port = 3000
          }
        }
      }
    }

