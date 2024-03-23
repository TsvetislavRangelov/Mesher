from diagrams import Diagram, Cluster
from diagrams.custom import Custom


with Diagram("CI Pipeline (via GitHub Actions)", filename="pipeline_diagram", direction="LR"):
    with Cluster("Triggered on every commit to master", direction="LR"):
        login = Custom("Login to GHCR", "./resources/auth_icon.png")
        setup = Custom("Setup Docker Buildx", "./resources/docker_logo.png")
        build = Custom("Build images", "./resources/build-icon.png")
        test = Custom("Run tests", "./resources/test-pass-fail-icon.png")
        publish = Custom("Publish to GHCR", "./resources/publish-icon.png")
        scan = Custom("Scan with Codacy", "./resources/job-icon.png")

        login >> setup >> build >> test >> publish >> scan