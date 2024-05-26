from diagrams import Diagram, Cluster
from diagrams.custom import Custom
from diagrams.k8s.network import Service
from diagrams.onprem.monitoring import Grafana
from diagrams.k8s.clusterconfig import HPA
from diagrams.k8s.compute import Pod


with Diagram("Local Environment", filename="architecture_local", direction="LR"):
    auth0 = Custom("Auth0", "./resources/auth0.png")
    
    with Cluster("127.0.0.1(localhost)", direction="LR"):
        client = Custom("Web Client", "./resources/web-client-icon.png")
    with Cluster("Docker Desktop Kubernetes \n 192.168.x.x", direction="LR"):
        with Cluster("Gateway NS", direction="LR"):
            gw_group = [Custom("Envoy GW", "./resources/api-gw-icon.png"),
                        Custom("Envoy GW Class", "./resources/envoy-gw.png")]
        with Cluster("Service NS", direction="LR"):
            svc_group = [Service("Geom. Gen.") >> Pod("Geom.Gen.") >> HPA("Geom.Gen."),
                         Service("Gen. History") >> Pod("Gen.History") >> HPA("Gen.History"),
                         Service("Model Collection") >> Pod("Model Collection") >> HPA("Model Collection"),
                         Service("Transactions") >> Pod("Transactions") >> HPA("Transactions")]  
        with Cluster("Monitoring NS", direction="LR"):
            monitoring = Grafana("Grafana Cloud")
    auth0 >> client >> gw_group[0]
    gw_group[0] >> gw_group[1]
    gw_group[0] >> svc_group
    svc_group << monitoring