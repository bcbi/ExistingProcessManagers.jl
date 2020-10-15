module ExistingProcessManagers

import Distributed

export ExistingProcessManager
export addprocs_existing
export hosts_and_ports_to_workerconfigs
export julia_worker_regex
export parse_julia_worker_output_to_hosts_and_ports

include("types.jl")

include("constructors.jl")

include("addprocs_existing.jl")
include("launch.jl")
include("manage.jl")
include("parse_julia_worker_output.jl")

end # end module ExistingProcessManagers
