#!/usr/bin/env bash

kubectl apply --server-side --force-conflicts -f https://github.com/envoyproxy/gateway/releases/download/v1.0.1/install.yaml

kubectl wait --timeout=5m -n envoy-gateway-system deployment/envoy-gateway --for=condition=Available


export ENVOY_SERVICE=$(kubectl get svc -n envoy-gateway-system --selector=gateway.envoyproxy.io/owning-gateway-namespace=default,gateway.envoyproxy.io/owning-gateway-name=eg -o jsonpath='{.items[0].metadata.name}')

kubectl -n envoy-gateway-system port-forward service/${ENVOY_SERVICE} 8043:443 &



kubectl apply -f .
