import Distributed

"""
    addprocs_existing(workers; kwargs...)

Equivalent to `addprocs(ExistingProcessManager(workers); kwargs...)`.

## Examples

### Example 1

```julia
julia> hosts_and_ports = [
       ("127.0.0.1", 9601), # the host is "127.0.0.1", and the port number is 9601
       ("127.0.0.1", 9602), # the host is "127.0.0.1", and the port number is 9602
       ]
2-element Vector{Tuple{String, Int64}}:
 ("127.0.0.1", 9601)
 ("127.0.0.1", 9602)

julia> addprocs_existing(hosts_and_ports; kwargs...)
```

### Example 2

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

julia> addprocs_existing(wconfigs; kwargs...)
```

### Example 3

```julia
julia> worker_output = \"""
       julia_worker:9960#192.168.1.151
       julia_worker:9960#192.168.1.151
       julia_worker:9960#192.168.1.151
       julia_worker:9966#192.168.1.157
       julia_worker:9968#192.168.1.159
       \"""
"julia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n"

julia> addprocs_existing(worker_output; kwargs...)
```
"""
@inline function addprocs_existing(workers; kwargs...)
    return Distributed.addprocs(ExistingProcessManager(workers); kwargs...)
end
