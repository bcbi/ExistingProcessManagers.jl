@inline function start_worker_processes(num_workers::Integer;
                                        cookie::String,
                                        delay,
                                        julia_worker_timeout::Integer)
    output_directories = Vector{String}(undef, num_workers)
    processes = Vector{Base.Process}(undef, num_workers)
    output_strings = Vector{String}(undef, num_workers)
    for i = 1:num_workers
        output_directories[i] = mktempdir(; cleanup = true)
    end
    for i = 1:num_workers
        output_directory = output_directories[i]
        stdout_file = joinpath(output_directory, "stdout.txt")
        stderr_file = joinpath(output_directory, "stderr.txt")
        p = withenv("JULIA_WORKER_TIMEOUT" => "$(julia_worker_timeout)") do
            cmd = `julia --worker=$(cookie)`
            my_pipeline = pipeline(cmd, stdout = stdout_file, stderr = stderr_file)
            run(my_pipeline; wait = false)
        end
        processes[i] = p
    end
    sleep(delay)
    for i = 1:num_workers
        output_directory = output_directories[i]
        stdout_file = joinpath(output_directory, "stdout.txt")
        output = read(stdout_file, String)::String
        output_strings[i] = output
    end
    return processes, output_strings
end
