#!/usr/bin/env bash

# install CRDs and Envoy Gateway
helm install eg oci://docker.io/envoyproxy/gateway-helm --version v0.0.0-latest -n envoy-gateway-system --create-namespace

# Wait for Envoy Gateway to become available
kubectl wait --timeout=5m -n envoy-gateway-system deployment/envoy-gateway --for=condition=Available

kubectl apply -f .
