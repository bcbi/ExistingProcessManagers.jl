import Distributed
import DocStringExtensions

"""
$(DocStringExtensions.TYPEDEF)

Fields:
$(DocStringExtensions.TYPEDFIELDS)

---

    ExistingProcessManager(wconfigs::Vector{Distributed.WorkerConfig})

Construct an `ExistingProcessManager` from a list of `WorkerConfig`s.

## Example

```julia
julia> w1 = WorkerConfig()
WorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)

julia> w1.host = "127.0.0.1"
"127.0.0.1"

julia> w1.port = 9601
9601

julia> w2 = WorkerConfig()
WorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)

julia> w2.host = "127.0.0.1"
"127.0.0.1"

julia> w2.port = 9602
9602

julia> wconfigs = WorkerConfig[w1, w2]
2-element Vector{WorkerConfig}:
 WorkerConfig(nothing, "127.0.0.1", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)
 WorkerConfig(nothing, "127.0.0.1", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)

julia> manager = ExistingProcessManager(wconfigs)
ExistingProcessManager(WorkerConfig[WorkerConfig(nothing, "127.0.0.1", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, "127.0.0.1", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])

julia> addprocs(manager)
```
"""
struct ExistingProcessManager <: Distributed.ClusterManager
    wconfigs::Vector{Distributed.WorkerConfig}
end
