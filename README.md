### Keyrock Stress Benchmark on FIBRE-NG

* To run Apache Bench on Keyrocks
`ab -c 1000 -n 1000000 -g graph.tsv -p values.json -T application/json  http://51.13.21.139:3000/`

* To enable Kubernetes auto scale:
`kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10`
* More tests to be developed: https://k6.io/docs/test-types/soak-testing/