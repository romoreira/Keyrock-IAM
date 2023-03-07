### Keyrock Stress Benchmark on FIBRE-NG using Apache Bench

* K6 Bench tool installation

```
sudo gpg --lock-never --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

* To run Apache Bench on Keyrocks
`ab -c 1000 -n 1000000 -g graph.tsv -p values.json -T application/json  http://51.13.21.139:3000/`

* To enable Kubernetes auto scale:
`kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10`
* More tests to be developed: https://k6.io/docs/test-types/soak-testing/
### ML Agent Load and Stress Benchmark using K6 Tool
---
#### System specs:

Stress Benchmark (Source):
Operating system: Linux (ubuntu 20.04)
Size: Standard E2s v3 (2 vcpus, 16 GiB memory)

Kubernetes Cluster (Target)
Kubernetes version: 1.24.9
Node sizes: Standard_DS2_v2

---
Experiments Datasheet

1. Smoke Testing
* Here we have the comparison of how much time the API with our four (4) ML algorithms to predict so the Flow regarding its traffic Patern: "DDoS" or "non-DDos"
* For each ML algorithm this test must bu run.
- `k6 run --out csv=knn_smoke-test_results.csv smoke.js`
- `k6 run --out csv=mlp_smoke-test_results.csv smoke.js`
- `k6 run --out csv=rf_smoke-test_results.csv smoke.js`
- `k6 run --out csv=svm_smoke-test_results.csv smoke.js`
* Build a graph containing four (4) bars with response time and its confidence interval
2. Load Testing
* Here we will ramp up the number of virtual users to a maximum to check if the response time or errors increases.
* Choose a correct and suitable value for ramping up without lossing connection.
- `k6 run --out csv=knn_load-test_results.csv load.js`
* Build a graph containing the Response Time, number of VUs, Request Rate and others
3. Stress Testing: To determine the limit of our API
* Here we will determine the limit of our MLAgent API considering a single replica of our Smart Deployment.
- `k6 run --out csv=knn_stress-test_results.csv stress.js`
* Build a graph showcasing how some variables increase as long as the VUs increases.

### Benchmarking Keyrock through K6 Tool

This experiment refers to the capacity of a single Keyrock instance on FIBRE-NG kubernetes to handle 
Token issue. In every interaction between slicing archictectures it is expected the API communication.
In our method, these interactions must occur using a updated token.

- `k6 run --out csv=knn_keyrock-load-test_results.csv keyrock-load.js`
* Build a graph containing the resources limit reaching.


