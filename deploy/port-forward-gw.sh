#!/usr/bin/env bash

# Export the envoy service name into an env variable.
export ENVOY_SERVICE=$(kubectl get svc -n envoy-gateway-system --selector=gateway.envoyproxy.io/owning-gateway-namespace=default,gateway.envoyproxy.io/owning-gateway-name=eg -o jsonpath='{.items[0].metadata.name}')

# Port forward envoy to localhost on port 8888.
kubectl -n envoy-gateway-system port-forward service/${ENVOY_SERVICE} 8888:80 &
