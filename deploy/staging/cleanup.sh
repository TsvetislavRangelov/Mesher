#!/usr/bin/env bash

# Cleanup current active deployment.
sudo microk8s kubectl delete -f . --ignore-not-found=true
