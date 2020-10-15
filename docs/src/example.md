```@meta
CurrentModule = ExistingProcessManagers
```

# Example

First, run the following command four times. It can be on the same machine or
on different machines.
```bash
julia --worker=1234567890abcdef &
```

Each worker process will print a line to stdout that looks something like this:
```
julia_worker:9682#192.168.1.151
```

In the above example, the host is `192.168.1.151` and the port number is
`9682`.

For the purposes of this example, suppose that you receive the following
four lines as output:
```
julia_worker:9682#192.168.1.151
julia_worker:9684#192.168.1.153
julia_worker:9686#192.168.1.155
julia_worker:9688#192.168.1.157
```

Now start a new Julia session and run the following commands:
```julia
julia> using ExistingProcessManagers

julia> using Distributed

julia> Distributed.cluster_cookie("1234567890abcdef")

julia> workers = [
       ("192.168.1.151", 9682),
       ("192.168.1.153", 9684),
       ("192.168.1.155", 9686),
       ("192.168.1.157", 9688),
       ]

julia> addprocs(ExistingProcessManager(workers))
```
