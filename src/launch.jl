import Distributed

@inline function Distributed.launch(manager::ExistingProcessManager,
                                    params::Dict,
                                    launched::Array,
                                    launch_ntfy::Condition)
    while !isempty(manager.wconfigs)
        wconfig = pop!(manager.wconfigs)
        push!(launched, wconfig)
        notify(launch_ntfy)
    end
    return nothing
end
