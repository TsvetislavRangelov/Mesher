#!/usr/bin/env bash

kubectl apply -f https://github.com/envoyproxy/gateway/releases/download/latest/install.yaml

kubectl wait --timeout=5m -n envoy-gateway-system deployment/envoy-gateway --for=condition=Available

kubectl -n envoy-gateway-system port-forward service/envoy-gateway 8888:80 &

kubectl apply -f .
