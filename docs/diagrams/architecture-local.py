from diagrams import Diagram, Cluster
from diagrams.custom import Custom
from diagrams.k8s.network import Service
from diagrams.k8s.compute import Pod


with Diagram("Local Environment", filename="architecture_local", direction="LR"):
    with Cluster("127.0.0.1(localhost)"):
        client = Custom("Web Client", "./resources/web-client-icon.png")
    with Cluster("Docker Desktop Kubernetes \n 192.168.x.x", direction="LR"):
        with Cluster("Gateway NS", direction="TB"):
            api_gw = Custom("Envoy GW", "./resources/api-gw-icon.png")
            gw_class = Custom("Envoy GW Class", "./resources/envoy-gw.png")
        with Cluster("Service NS"):    
            geometry_generator_service = Service("Geom. Gen.")
            geometry_generator_pod = Pod("Geom. Gen")
    client >> api_gw >> geometry_generator_service >> geometry_generator_pod