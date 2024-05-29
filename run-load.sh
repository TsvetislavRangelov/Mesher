#!/usr/bin/env bash

cd mesher-client/tests

echo "Executing load tests with K6."

k6 run geometry-generator-non-sampled-load-test.spec.ts
