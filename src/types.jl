import Distributed

"""
## Summary

struct ExistingProcessManager <: Distributed.ClusterManager

## Fields

- wconfigs :: Vector{Distributed.WorkerConfig}

---

    ExistingProcessManager(wconfigs::Vector{Distributed.WorkerConfig})

Construct an `ExistingProcessManager` from a list of `WorkerConfig`s.

## Example

```jldoctest; setup = :(using ExistingProcessManagers; using Distributed)
julia> w1 = WorkerConfig();

julia> w1.host = "127.0.0.1";

julia> w1.port = 9601;

julia> w2 = WorkerConfig();

julia> w2.host = "127.0.0.1";

julia> w2.port = 9602;

julia> wconfigs = WorkerConfig[w1, w2];

julia> manager = ExistingProcessManager(wconfigs);
```

Now you can do:
```julia
julia> addprocs(manager)
```
"""
struct ExistingProcessManager <: Distributed.ClusterManager
    wconfigs::Vector{Distributed.WorkerConfig}
end
