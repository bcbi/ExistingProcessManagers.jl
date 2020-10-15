import Distributed

@inline function Distributed.manage(manager::ExistingProcessManager,
                                    id::Integer,
                                    config::Distributed.WorkerConfig,
                                    op::Symbol)
    return nothing
end
