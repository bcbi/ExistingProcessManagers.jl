var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API","title":"API","text":"CurrentModule = ExistingProcessManagers","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [ExistingProcessManagers]","category":"page"},{"location":"api/#ExistingProcessManagers.julia_worker_regex","page":"API","title":"ExistingProcessManagers.julia_worker_regex","text":"julia_worker_regex\n\nRegex for parsing the output printed by Julia worker processes.\n\n\n\n\n\n","category":"constant"},{"location":"api/#ExistingProcessManagers.ExistingProcessManager","page":"API","title":"ExistingProcessManagers.ExistingProcessManager","text":"struct ExistingProcessManager <: Distributed.ClusterManager\n\nFields:\n\nwconfigs::Array{Distributed.WorkerConfig,1}\n\n\n\nExistingProcessManager(wconfigs::Vector{Distributed.WorkerConfig})\n\nConstruct an ExistingProcessManager from a list of WorkerConfigs.\n\nExample\n\njulia> w1 = WorkerConfig()\nWorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> w1.host = \"127.0.0.1\"\n\"127.0.0.1\"\n\njulia> w1.port = 9601\n9601\n\njulia> w2 = WorkerConfig()\nWorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> w2.host = \"127.0.0.1\"\n\"127.0.0.1\"\n\njulia> w2.port = 9602\n9602\n\njulia> wconfigs = WorkerConfig[w1, w2]\n2-element Vector{WorkerConfig}:\n WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> manager = ExistingProcessManager(wconfigs)\nExistingProcessManager(WorkerConfig[WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"type"},{"location":"api/#ExistingProcessManagers.ExistingProcessManager-Tuple{AbstractString}","page":"API","title":"ExistingProcessManagers.ExistingProcessManager","text":"ExistingProcessManager(worker_output::AbstractString)\n\nConstruct an ExistingProcessManager from the output printed by Julia worker processes.\n\nExample\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\"\n\"julia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n\"\n\njulia> manager = ExistingProcessManager(worker_output)\nExistingProcessManager(WorkerConfig[WorkerConfig(nothing, \"192.168.1.151\", 9960, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, \"192.168.1.157\", 9966, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, \"192.168.1.159\", 9968, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"method"},{"location":"api/#ExistingProcessManagers.ExistingProcessManager-Tuple{Array{Tuple{String,Int64},1}}","page":"API","title":"ExistingProcessManagers.ExistingProcessManager","text":"ExistingProcessManager(hosts_and_ports::Vector{Tuple{String, Int}})\n\nConstruct an ExistingProcessManager from a list of hosts and port numbers.\n\nExample\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ]\n2-element Vector{Tuple{String, Int64}}:\n (\"127.0.0.1\", 9601)\n (\"127.0.0.1\", 9602)\n\njulia> manager = ExistingProcessManager(hosts_and_ports)\nExistingProcessManager(WorkerConfig[WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"method"},{"location":"api/#ExistingProcessManagers.addprocs_existing-Tuple{Any}","page":"API","title":"ExistingProcessManagers.addprocs_existing","text":"addprocs_existing(workers; kwargs...)\n\nEquivalent to addprocs(ExistingProcessManager(workers); kwargs...).\n\nExamples\n\nExample 1\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ]\n2-element Vector{Tuple{String, Int64}}:\n (\"127.0.0.1\", 9601)\n (\"127.0.0.1\", 9602)\n\njulia> addprocs_existing(hosts_and_ports; kwargs...)\n\nExample 2\n\njulia> w1 = WorkerConfig()\nWorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> w1.host = \"127.0.0.1\"\n\"127.0.0.1\"\n\njulia> w1.port = 9601\n9601\n\njulia> w2 = WorkerConfig()\nWorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> w2.host = \"127.0.0.1\"\n\"127.0.0.1\"\n\njulia> w2.port = 9602\n9602\n\njulia> wconfigs = WorkerConfig[w1, w2]\n2-element Vector{WorkerConfig}:\n WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> addprocs_existing(wconfigs; kwargs...)\n\nExample 3\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\"\n\"julia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n\"\n\njulia> addprocs_existing(worker_output; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"api/#ExistingProcessManagers.hosts_and_ports_to_workerconfigs-Tuple{Array{Tuple{String,Int64},1}}","page":"API","title":"ExistingProcessManagers.hosts_and_ports_to_workerconfigs","text":"hosts_and_ports_to_workerconfigs(hosts_and_ports::Vector{Tuple{String, Int}})\n\nConvert a list of hosts and port numbers to a list of WorkerConfigs.\n\nExamples\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ]\n2-element Vector{Tuple{String, Int64}}:\n (\"127.0.0.1\", 9601)\n (\"127.0.0.1\", 9602)\n\njulia> hosts_and_ports_to_workerconfigs(hosts_and_ports)\n2-element Vector{Distributed.WorkerConfig}:\n Distributed.WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n Distributed.WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\n\n\n\n\n","category":"method"},{"location":"api/#ExistingProcessManagers.parse_julia_worker_output_to_hosts_and_ports-Tuple{AbstractString}","page":"API","title":"ExistingProcessManagers.parse_julia_worker_output_to_hosts_and_ports","text":"parse_julia_worker_output_to_hosts_and_ports(; regex = julia_worker_regex)\n\nParse the output printed by Julia workers and return a list of hosts and ports.\n\nExample\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9962#192.168.1.153\n       julia_worker:9964#192.168.1.155\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\"\n\"julia_worker:9960#192.168.1.151\njulia_worker:9962#192.168.1.153\njulia_worker:9964#192.168.1.155\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n\"\n\njulia> parse_julia_worker_output_to_hosts_and_ports(worker_output)\n5-element Vector{Tuple{String, Int64}}:\n (\"192.168.1.151\", 9960)\n (\"192.168.1.153\", 9962)\n (\"192.168.1.155\", 9964)\n (\"192.168.1.157\", 9966)\n (\"192.168.1.159\", 9968)\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = ExistingProcessManagers","category":"page"},{"location":"#ExistingProcessManagers","page":"Home","title":"ExistingProcessManagers","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ExistingProcessManagers provides the ExistingProcessManager type, which is a ClusterManager for telling Distributed about Julia worker processes that you have already started.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The code for this package is available in the GitHub repository.","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"CurrentModule = ExistingProcessManagers","category":"page"},{"location":"example/#Example","page":"Example","title":"Example","text":"","category":"section"},{"location":"example/","page":"Example","title":"Example","text":"First, run the following command four times. It can be on the same machine or on different machines.","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"julia --worker=1234567890abcdef &","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Each worker process will print a line to stdout that looks something like this:","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"julia_worker:9682#192.168.1.151","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"In the above example, the host is 192.168.1.151 and the port number is 9682.","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"For the purposes of this example, suppose that you receive the following four lines as output:","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"julia_worker:9682#192.168.1.151\njulia_worker:9684#192.168.1.153\njulia_worker:9686#192.168.1.155\njulia_worker:9688#192.168.1.157","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"Now start a new Julia session and run the following commands:","category":"page"},{"location":"example/","page":"Example","title":"Example","text":"julia> using ExistingProcessManagers\n\njulia> using Distributed\n\njulia> Distributed.cluster_cookie(\"1234567890abcdef\")\n\njulia> workers = [\n       (\"192.168.1.151\", 9682),\n       (\"192.168.1.153\", 9684),\n       (\"192.168.1.155\", 9686),\n       (\"192.168.1.157\", 9688),\n       ]\n\njulia> addprocs(ExistingProcessManager(workers))","category":"page"}]
}
