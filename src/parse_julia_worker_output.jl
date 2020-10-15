"""
    julia_worker_regex

Regex for parsing the output printed by Julia worker processes.
"""
const julia_worker_regex = r"julia_worker:([\d]*?)#([\w\d.]*?)\n"

"""
    parse_julia_worker_output_to_hosts_and_ports(; regex = julia_worker_regex)

Parse the output printed by Julia workers and return a list of hosts and
ports.

## Example

```julia
julia> worker_output = \"""
       julia_worker:9960#192.168.1.151
       julia_worker:9962#192.168.1.153
       julia_worker:9964#192.168.1.155
       julia_worker:9966#192.168.1.157
       julia_worker:9968#192.168.1.159
       \"""
"julia_worker:9960#192.168.1.151\njulia_worker:9962#192.168.1.153\njulia_worker:9964#192.168.1.155\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n"

julia> parse_julia_worker_output_to_hosts_and_ports(worker_output)
5-element Vector{Tuple{String, Int64}}:
 ("192.168.1.151", 9960)
 ("192.168.1.153", 9962)
 ("192.168.1.155", 9964)
 ("192.168.1.157", 9966)
 ("192.168.1.159", 9968)
```
"""
@inline function parse_julia_worker_output_to_hosts_and_ports(worker_ouput::AbstractString;
                                                              regex = julia_worker_regex)
    occurrences = findall(regex, worker_ouput)
    num_occurences = length(occurrences)
    hosts_and_ports = Vector{Tuple{String, Int}}(undef, num_occurences)
    for i in 1:num_occurences
        occurrence = occurrences[i]
        m = match(regex, worker_ouput[occurrence])
        host = convert(String, m[2])::String
        port_string = m[1]
        port = parse(Int, port_string)::Int
        host_and_port = (host, port)
        hosts_and_ports[i] = host_and_port
    end
    unique!(hosts_and_ports)
    return hosts_and_ports
end
