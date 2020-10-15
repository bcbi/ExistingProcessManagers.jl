var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ExistingProcessManagers","category":"page"},{"location":"#ExistingProcessManagers","page":"Home","title":"ExistingProcessManagers","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ExistingProcessManagers]","category":"page"},{"location":"#ExistingProcessManagers.julia_worker_regex","page":"Home","title":"ExistingProcessManagers.julia_worker_regex","text":"julia_worker_regex\n\nRegex for parsing the output printed by Julia worker processes.\n\n\n\n\n\n","category":"constant"},{"location":"#ExistingProcessManagers.ExistingProcessManager","page":"Home","title":"ExistingProcessManagers.ExistingProcessManager","text":"struct ExistingProcessManager <: Distributed.ClusterManager\n\nFields:\n\nwconfigs::Array{Distributed.WorkerConfig,1}\n\n\n\nExistingProcessManager(wconfigs::Vector{Distributed.WorkerConfig})\n\nConstruct an ExistingProcessManager from a list of WorkerConfigs.\n\nExample\n\njulia> w1 = WorkerConfig()\nWorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> w1.host = \"127.0.0.1\"\n\"127.0.0.1\"\n\njulia> w1.port = 9601\n9601\n\njulia> w2 = WorkerConfig()\nWorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> w2.host = \"127.0.0.1\"\n\"127.0.0.1\"\n\njulia> w2.port = 9602\n9602\n\njulia> wconfigs = WorkerConfig[w1, w2]\n2-element Vector{WorkerConfig}:\n WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> manager = ExistingProcessManager(wconfigs)\nExistingProcessManager(WorkerConfig[WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"type"},{"location":"#ExistingProcessManagers.ExistingProcessManager-Tuple{AbstractString}","page":"Home","title":"ExistingProcessManagers.ExistingProcessManager","text":"ExistingProcessManager(worker_output::AbstractString)\n\nConstruct an ExistingProcessManager from the output printed by Julia worker processes.\n\nExample\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\"\n\"julia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n\"\n\njulia> manager = ExistingProcessManager(worker_output)\nExistingProcessManager(WorkerConfig[WorkerConfig(nothing, \"192.168.1.151\", 9960, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, \"192.168.1.157\", 9966, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, \"192.168.1.159\", 9968, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"method"},{"location":"#ExistingProcessManagers.ExistingProcessManager-Tuple{Array{Tuple{String,Int64},1}}","page":"Home","title":"ExistingProcessManagers.ExistingProcessManager","text":"ExistingProcessManager(hosts_and_ports::Vector{Tuple{String, Int}})\n\nConstruct an ExistingProcessManager from a list of hosts and port numbers.\n\nExample\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ]\n2-element Vector{Tuple{String, Int64}}:\n (\"127.0.0.1\", 9601)\n (\"127.0.0.1\", 9602)\n\njulia> manager = ExistingProcessManager(hosts_and_ports)\nExistingProcessManager(WorkerConfig[WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing), WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)])\n\njulia> addprocs(manager)\n\n\n\n\n\n","category":"method"},{"location":"#ExistingProcessManagers.addprocs_existing-Tuple{Any}","page":"Home","title":"ExistingProcessManagers.addprocs_existing","text":"addprocs_existing(workers; kwargs...)\n\nEquivalent to addprocs(ExistingProcessManager(workers); kwargs...).\n\nExamples\n\nExample 1\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ]\n2-element Vector{Tuple{String, Int64}}:\n (\"127.0.0.1\", 9601)\n (\"127.0.0.1\", 9602)\n\njulia> addprocs_existing(hosts_and_ports; kwargs...)\n\nExample 2\n\njulia> w1 = WorkerConfig()\nWorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> w1.host = \"127.0.0.1\"\n\"127.0.0.1\"\n\njulia> w1.port = 9601\n9601\n\njulia> w2 = WorkerConfig()\nWorkerConfig(nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> w2.host = \"127.0.0.1\"\n\"127.0.0.1\"\n\njulia> w2.port = 9602\n9602\n\njulia> wconfigs = WorkerConfig[w1, w2]\n2-element Vector{WorkerConfig}:\n WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\njulia> addprocs_existing(wconfigs; kwargs...)\n\nExample 3\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9960#192.168.1.151\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\"\n\"julia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9960#192.168.1.151\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n\"\n\njulia> addprocs_existing(worker_output; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"#ExistingProcessManagers.hosts_and_ports_to_workerconfigs-Tuple{Array{Tuple{String,Int64},1}}","page":"Home","title":"ExistingProcessManagers.hosts_and_ports_to_workerconfigs","text":"hosts_and_ports_to_workerconfigs(hosts_and_ports::Vector{Tuple{String, Int}})\n\nConvert a list of hosts and port numbers to a list of WorkerConfigs.\n\nExamples\n\njulia> hosts_and_ports = [\n       (\"127.0.0.1\", 9601), # the host is \"127.0.0.1\", and the port number is 9601\n       (\"127.0.0.1\", 9602), # the host is \"127.0.0.1\", and the port number is 9602\n       ]\n2-element Vector{Tuple{String, Int64}}:\n (\"127.0.0.1\", 9601)\n (\"127.0.0.1\", 9602)\n\njulia> hosts_and_ports_to_workerconfigs(hosts_and_ports)\n2-element Vector{Distributed.WorkerConfig}:\n Distributed.WorkerConfig(nothing, \"127.0.0.1\", 9601, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n Distributed.WorkerConfig(nothing, \"127.0.0.1\", 9602, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing)\n\n\n\n\n\n","category":"method"},{"location":"#ExistingProcessManagers.parse_julia_worker_output_to_hosts_and_ports-Tuple{AbstractString}","page":"Home","title":"ExistingProcessManagers.parse_julia_worker_output_to_hosts_and_ports","text":"parse_julia_worker_output_to_hosts_and_ports(; regex = julia_worker_regex)\n\nParse the output printed by Julia workers and return a list of hosts and ports.\n\nExample\n\njulia> worker_output = \"\"\"\n       julia_worker:9960#192.168.1.151\n       julia_worker:9962#192.168.1.153\n       julia_worker:9964#192.168.1.155\n       julia_worker:9966#192.168.1.157\n       julia_worker:9968#192.168.1.159\n       \"\"\"\n\"julia_worker:9960#192.168.1.151\njulia_worker:9962#192.168.1.153\njulia_worker:9964#192.168.1.155\njulia_worker:9966#192.168.1.157\njulia_worker:9968#192.168.1.159\n\"\n\njulia> parse_julia_worker_output_to_hosts_and_ports(worker_output)\n5-element Vector{Tuple{String, Int64}}:\n (\"192.168.1.151\", 9960)\n (\"192.168.1.153\", 9962)\n (\"192.168.1.155\", 9964)\n (\"192.168.1.157\", 9966)\n (\"192.168.1.159\", 9968)\n\n\n\n\n\n","category":"method"}]
}
