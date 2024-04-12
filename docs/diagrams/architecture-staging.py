from diagrams import Diagram, Cluster
from diagrams.custom import Custom
from diagrams.k8s.network import Service
from diagrams.k8s.compute import Pod

with Diagram("Staging Environment", filename="architecture_staging", direction="LR"):
    with Cluster("127.0.0.1(localhost) + VPN"):
        client = Custom("Web Client", "./resources/web-client-icon.png")
        vpn = Custom("AnyConnect VPN", "./resources/cisco-vpn-icon.png")
    with Cluster("Fontys ICT Netlab", direction="LR"):
        netlab_firewall = Custom("Netlab PfSense", "./resources/firewall-icon.png")
        with Cluster("Microk8s Cluster", direction="LR"):
            with Cluster("Gateway NS", direction="LR"):
                api_gw = Custom("Envoy GW", "./resources/api-gw-icon.png")
                gw_class = Custom("Envoy GW Class", "./resources/envoy-gw.png")
            with Cluster("Service NS"):
                geometry_generator_service = Service("Geom. Gen.")
                geometry_generator_pod = Pod("Geom. Gen.")

    client >> vpn >> netlab_firewall >> api_gw >> geometry_generator_service >> geometry_generator_pod
