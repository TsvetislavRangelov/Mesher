#!/usr/bin/env bash

sudo microk8s kubectl apply -f https://github.com/envoyproxy/gateway/releases/download/latest/install.yaml

sudo microk8s kubectl wait --timeout=5m -n envoy-gateway-system deployment/envoy-gateway --for=condition=Available

sudo microk8s kubectl -n envoy-gateway-system port-forward service/envoy-gateway 8888:80 &

sudo microk8s kubectl apply -f .
