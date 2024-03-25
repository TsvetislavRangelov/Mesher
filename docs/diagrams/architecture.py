from diagrams import Diagram, Cluster
from diagrams.custom import Custom


graph_attr_dict = {
    "width": "0.75"
}

with Diagram("Cluster", filename="pipeline_diagram", direction="TB", graph_attr=graph_attr_dict):
    with Cluster("", direction="LR"):
        client = Custom("Web Client (React TypeScript & R3F)", "./resources/service-icon.png")
        api_gw = Custom("API Gateway (YARP)", "./resources/api-gw-icon.png")
        geometry_generator_service = Custom("Geometry Generator Service Non-Sampled (.NET Web API)", 
                                            "./resources/service-icon.png")

        client >> api_gw >> geometry_generator_service