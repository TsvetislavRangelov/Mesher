#!/usr/bin/env bash

kubectl create secret tls example-cert --key=www.mesher.com.key --cert=www.mesher.com.crt
kubectl apply -f https://github.com/envoyproxy/gateway/releases/download/v1.0.1/install.yaml

kubectl wait --timeout=5m -n envoy-gateway-system deployment/envoy-gateway --for=condition=Available

kubectl apply -f .
