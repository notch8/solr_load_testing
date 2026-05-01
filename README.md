## Instructions for developing tests

1. Install jmeter
```bash
brew install jmeter
```
1. Start jmeter - this will open the GUI, which should only be used when building or editing tests, not when actually load testing.
```bash
jmeter
```
1. From the GUI, select File > Open then browse to the test plan you want to work on (e.g. `solr_test_plan.jmx`)
1. You may need to press the "plus" buttons to the left of the headers to see the full plan.
1. Go to the User Defined Variables under the top-level "Solr test plan" and make sure the variables match the environment you want to work against.
1. In order to run the current test plan, click the green arrow button.

## Running via Kubernetes

This is the preferred approach for repeatable tests, as it runs JMeter inside the cluster
alongside Solr, eliminating network variance.

### Prerequisites

- `kubectl` configured with access to the target cluster
- `kustomize` (or `kubectl` v1.14+, which includes kustomize support via `-k`)

### Configuration

The Job is configured to run against Solr at `solr.solr.svc.cluster.local:8983`.

### Running a test

```zsh
kubectl apply -k . --context <your-cluster>
```

### Retrieving results

Once the Job completes, copy the results to your local machine:

```zsh
RESULTS_POD=$(kubectl get pods -n load-testing --context <your-cluster> -l job-name=jmeter-solr-load-test -o jsonpath='{.items[0].metadata.name}')
kubectl cp --context <your-cluster> -n load-testing ${RESULTS_POD}:/results ./test-results
```

The `./test-results` directory will contain:
- `test-report.jtl` — raw results data
- `html-report/` — open `html-report/index.html` in a browser to view the dashboard

### Re-running a test

Kubernetes Jobs are immutable once created.

If you want to re-run the job without changing any variables, run:

```zsh
kubectl get job jmeter-solr-load-test -n load-testing --context <your-cluster> -o yaml \
  | kubectl replace --force -f -
```

If you have changed the specs, before re-running, delete the existing Job:

```zsh
kubectl delete job jmeter-solr-load-test -n load-testing --context <your-cluster>
```

Then apply again:

```zsh
kubectl apply -k . --context <your-cluster>
```

## Tips on planning a useful test

* When a new Solr configuration is deployed, it clears the Solr caches (Filter Cache, Query
Cache, etc). If you want to compare two different configurations, make sure to deploy them
both fresh before running your test (unless your test is specifically investigating what
happens with a full cache).

* To ensure Solr caches are cleared before a test, perform a rolling restart:

```zsh
kubectl rollout restart statefulset/solr -n solr --context <your-cluster>
```

Then wait for the rollout to complete before running the test:

```zsh
kubectl rollout status statefulset/solr -n solr --context <your-cluster>
```

## Tips on analyzing the data

* If you are comparing between two tests, the dashboard's median response time and
percentiles can be useful metrics to compare.
* The charts tend not to be very useful unless you are trying to see the impact of a
particular event that happened _during_ your test (e.g. a cache gradually filled, or the
Solr instance hit some resource limit).

## Monitoring notes

Port-forward Prometheus, if installed

```bash
kubectl port-forward svc/kube-prometheus-stack-prometheus -n monitoring 9090:9090
```

Go to prometheus in the browser http://localhost:9090/ and enter queries

Examples:

CPU
```
rate(container_cpu_usage_seconds_total{namespace="solr", container="solr"}[1m])
```

Memory
```
container_memory_working_set_bytes{namespace="solr", container="solr"}
```
