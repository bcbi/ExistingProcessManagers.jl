import Distributed

"""
    hosts_and_ports_to_workerconfigs(hosts_and_ports::Vector{Tuple{String, Int}})

Convert a list of hosts and port numbers to a list of `WorkerConfig`s.

## Examples

```julia
julia> hosts_and_ports = [
       ("127.0.0.1", 9601), # the host is "127.0.0.1", and the port number is 9601
       ("127.0.0.1", 9602), # the host is "127.0.0.1", and the port number is 9602
       ]
2-element Vector{Tuple{String, Int64}}:
 ("127.0.0.1", 9601)
 ("127.0.0.1", 9602)

julia> hosts_and_ports_to_workerconfigs(hosts_and_ports)
2-element Vector{Distributed.WorkerConfig}:
 Distributed.WorkerConfig(nothing, "127.0.0.1", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)
 Distributed.WorkerConfig(nothing, "127.0.0.1", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)
```
"""
@inline function hosts_and_ports_to_workerconfigs(hosts_and_ports::Vector{Tuple{String, Int}})
    num_workers = length(hosts_and_ports)
    wconfigs = Vector{Distributed.WorkerConfig}(undef, num_workers)
    for i = 1:num_workers
        host_and_port = hosts_and_ports[i]
        host = host_and_port[1]
        port = host_and_port[2]
        wconfig = Distributed.WorkerConfig()
        wconfig.host = host
        wconfig.port = port
        wconfigs[i] = wconfig
    end
    return wconfigs
end

"""
    ExistingProcessManager(hosts_and_ports::Vector{Tuple{String, Int}})

Construct an `ExistingProcessManager` from a list of hosts and port numbers.

## Example

```julia
julia> hosts_and_ports = [
       ("127.0.0.1", 9601), # the host is "127.0.0.1", and the port number is 9601
       ("127.0.0.1", 9602), # the host is "127.0.0.1", and the port number is 9602
       ]
2-element Vector{Tuple{String, Int64}}:
 ("127.0.0.1", 9601)
 ("127.0.0.1", 9602)

julia> manager = ExistingProcessManager(hosts_and_ports)
ExistingProcessManager(WorkerConfig[WorkerConfig(nothing, "127.0.0.1", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, "127.0.0.1", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])

julia> addprocs(manager)
```
"""
@inline function ExistingProcessManager(hosts_and_ports::Vector{Tuple{String, Int}})
    wconfigs = hosts_and_ports_to_workerconfigs(hosts_and_ports)
    return ExistingProcessManager(wconfigs)
end

"""
ExistingProcessManager(worker_output::AbstractString)

Construct an `ExistingProcessManager` from the output printed by Julia worker
processes.

## Example

```julia
julia> worker_output = \"""
       julia_worker:9960#192.168.1.151
       julia_worker:9960#192.168.1.151
       julia_worker:9960#192.168.1.151
       julia_worker:9966#192.168.1.157
       julia_worker:9968#192.168.1.159
       \"""
"julia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n"

julia> manager = ExistingProcessManager(worker_output)
ExistingProcessManager(WorkerConfig[WorkerConfig(nothing, "192.168.1.151", 9960, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, "192.168.1.157", 9966, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, "192.168.1.159", 9968, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])

julia> addprocs(manager)
```
"""
@inline function ExistingProcessManager(worker_output::AbstractString)
    hosts_and_ports = parse_julia_worker_output_to_hosts_and_ports(worker_output)
    wconfigs = hosts_and_ports_to_workerconfigs(hosts_and_ports)
    return ExistingProcessManager(wconfigs)
end
