#!/usr/bin/env bash

# Cleanup current active deployment.
kubectl delete -f . --ignore-not-found=true

# Uninstall the gateway.
helm uninstall eg -n envoy-gateway-system
