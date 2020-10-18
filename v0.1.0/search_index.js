var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API","title":"API","text":"CurrentModule = ExistingProcessManagers","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [ExistingProcessManagers]","category":"page"},{"location":"api/#ExistingProcessManagers.julia_worker_regex","page":"API","title":"ExistingProcessManagers.julia_worker_regex","text":"julia_worker_regex\n\nRegex for parsing the output printed by Julia worker processes.\n\n\n\n\n\n","category":"constant"},{"location":"api/#ExistingProcessManagers.ExistingProcessManager","page":"API","title":"ExistingProcessManagers.ExistingProcessManager","text":"Summary\n\nstruct ExistingProcessManager <: Distributed.ClusterManager\n\nFields\n\nwconfigs :: Vector{Distributed.WorkerConfig}\n\n\n\nExistingProcessManager(wconfigs::Vector{Distributed.WorkerConfig})\n\nConstruct an ExistingProcessManager from a list of WorkerConfigs.\n\nExample\n\njulia> w1 = WorkerConfig();\n\njulia> w1.host = \"127.0.0.1\";\n\njulia> w1.port = 9601;\n\njulia> w2 = WorkerConfig();\n\njulia> w2.host = \"127.0.0.1\";\n\njulia> w2.port = 9602;\n\njulia> wconfigs = WorkerConfig[w1, w2];\n\njulia> manager = ExistingProcessManager(wconfigs);\n\nNow you can do:\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"type"},{"location":"api/#ExistingProcessManagers.ExistingProcessManager-Tuple{AbstractString}","page":"API","title":"ExistingProcessManagers.ExistingProcessManager","text":"ExistingProcessManager(worker_output::AbstractString)\n\nConstruct an ExistingProcessManager from the output printed by Julia worker processes.\n\nExample\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\";\n\njulia> manager = ExistingProcessManager(worker_output);\n\nNow you can do:\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"method"},{"location":"api/#ExistingProcessManagers.ExistingProcessManager-Tuple{Array{Tuple{String,Int64},1}}","page":"API","title":"ExistingProcessManagers.ExistingProcessManager","text":"ExistingProcessManager(hosts_and_ports::Vector{Tuple{String, Int}})\n\nConstruct an ExistingProcessManager from a list of hosts and port numbers.\n\nExample\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ];\n\njulia> manager = ExistingProcessManager(hosts_and_ports);\n\nNow you can do:\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"method"},{"location":"api/#ExistingProcessManagers.addprocs_existing-Tuple{Any}","page":"API","title":"ExistingProcessManagers.addprocs_existing","text":"addprocs_existing(x; kwargs...)\n\nEquivalent to addprocs(ExistingProcessManager(x); kwargs...).\n\nExamples\n\nExample 1\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ]\n2-element Vector{Tuple{String, Int64}}:\n (\"127.0.0.1\", 9601)\n (\"127.0.0.1\", 9602)\n\njulia> addprocs_existing(hosts_and_ports; kwargs...)\n\nExample 2\n\njulia> w1 = WorkerConfig();\n\njulia> w1.host = \"127.0.0.1\";\n\njulia> w1.port = 9601;\n\njulia> w2 = WorkerConfig();\n\njulia> w2.host = \"127.0.0.1\";\n\njulia> w2.port = 9602;\n\njulia> wconfigs = WorkerConfig[w1, w2];\n\njulia> addprocs_existing(wconfigs; kwargs...)\n\nExample 3\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\";\n\njulia> addprocs_existing(worker_output; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"api/#ExistingProcessManagers.hosts_and_ports_to_workerconfigs-Tuple{Array{Tuple{String,Int64},1}}","page":"API","title":"ExistingProcessManagers.hosts_and_ports_to_workerconfigs","text":"hosts_and_ports_to_workerconfigs(hosts_and_ports::Vector{Tuple{String, Int}})\n\nConvert a list of hosts and port numbers to a list of WorkerConfigs.\n\nExample\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ];\n\njulia> wconfigs = hosts_and_ports_to_workerconfigs(hosts_and_ports);\n\nNow you can do either of the following two options, which are equivalent:\n\nOption 1:\n\njulia> addprocs(ExistingProcessManager(wconfigs))\n\nOption 2:\n\njulia> addprocs_existing(wconfigs)\n\n\n\n\n\n","category":"method"},{"location":"api/#ExistingProcessManagers.parse_julia_worker_output_to_hosts_and_ports-Tuple{AbstractString}","page":"API","title":"ExistingProcessManagers.parse_julia_worker_output_to_hosts_and_ports","text":"parse_julia_worker_output_to_hosts_and_ports(; regex = julia_worker_regex)\n\nParse the output printed by Julia workers and return a list of hosts and ports.\n\nExample\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9962#192.168.1.153\n       julia_worker:9964#192.168.1.155\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\";\n\njulia> hosts_and_ports = parse_julia_worker_output_to_hosts_and_ports(worker_output);\n\nNow you can do either of the following two options, which are equivalent:\n\nOption 1:\n\njulia> addprocs(ExistingProcessManager(hosts_and_ports))\n\nOption 2:\n\njulia> addprocs_existing(hosts_and_ports)\n\n\n\n\n\n","category":"method"},{"location":"examples/","page":"Examples","title":"Examples","text":"CurrentModule = ExistingProcessManagers","category":"page"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#Example-1","page":"Examples","title":"Example 1","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"First, run the following command four times. It can be on the same machine or on different machines.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia --worker=1234567890abcdef &","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Each worker process will print a line to stdout that looks something like this:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia_worker:9682#192.168.1.151","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"In the above example, the host is 192.168.1.151 and the port number is 9682.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"For the purposes of this example, suppose that you receive the following four lines as output:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia_worker:9682#192.168.1.151 \njulia_worker:9684#192.168.1.153 \njulia_worker:9686#192.168.1.155 \njulia_worker:9688#192.168.1.157 ","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Now start a new Julia session and run the following commands:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> using ExistingProcessManagers\n\njulia> using Distributed\n\njulia> Distributed.cluster_cookie(\"1234567890abcdef\")\n\njulia> hosts_and_ports = [\n       (\"192.168.1.151\", 9682),\n       (\"192.168.1.153\", 9684),\n       (\"192.168.1.155\", 9686),\n       (\"192.168.1.157\", 9688),\n       ]\n\njulia> addprocs(ExistingProcessManager(hosts_and_ports))","category":"page"},{"location":"examples/#Example-2","page":"Examples","title":"Example 2","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"First, run the following command four times. It can be on the same machine or on different machines.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia --worker=1234567890abcdef &","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Each worker process will print a line to stdout that looks something like this:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia_worker:9682#192.168.1.151","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"In the above example, the host is 192.168.1.151 and the port number is 9682.","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"For the purposes of this example, suppose that you receive the following four lines as output:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia_worker:9682#192.168.1.151 \njulia_worker:9684#192.168.1.153 \njulia_worker:9686#192.168.1.155 \njulia_worker:9688#192.168.1.157 ","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"Now start a new Julia session and run the following commands:","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> using ExistingProcessManagers\n\njulia> using Distributed\n\njulia> Distributed.cluster_cookie(\"1234567890abcdef\")\n\njulia> worker_output = \"\"\"\n       julia_worker:9682#192.168.1.151\n       julia_worker:9684#192.168.1.153\n       julia_worker:9686#192.168.1.155\n       julia_worker:9688#192.168.1.157\n       \"\"\"\n\njulia> addprocs(ExistingProcessManager(worker_output))","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ExistingProcessManagers","category":"page"},{"location":"#ExistingProcessManagers","page":"Home","title":"ExistingProcessManagers","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ExistingProcessManagers provides the ExistingProcessManager type, which is a ClusterManager for telling Distributed about Julia worker processes that you have already started.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The code for this package is available in the GitHub repository.","category":"page"}]
}
