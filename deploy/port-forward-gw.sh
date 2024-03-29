#!/usr/bin/env bash
# Export the envoy service name into an env variable.export ENVOY_SERVICE=$(kubectl get svc -n envoy-gateway-system --selector=gateway.envoyproxy.io/owning-gateway-namespace=default,gateway.envoyproxy.io/ownin

# Assigns an external ip address so that the gateway can be reachable via the web client.
#kubectl patch gateway eg --type=json --patch '[{
 #  "op": "add",
  # "path": "/spec/addresses",
   #"value": [{
    #  "type": "IPAddress",
     # "value": "198.51.118.26"
   #}]
#}]'
