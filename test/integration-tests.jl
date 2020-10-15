using ExistingProcessManagers
using Test
using Distributed

const cookie = "1234567890abcdef"
const delay = 15
const julia_worker_timeout = 600

@testset "Integration tests" begin
    function f1(combined_output::AbstractString)
        addprocs(ExistingProcessManager(combined_output))
        return nothing
    end
    function f2(combined_output::AbstractString)
        addprocs_existing(combined_output)
        return nothing
    end
    @testset "ExistingProcessManager" for f in [f1, f2]
        rmprocs(deepcopy(workers()))
        @test nprocs() == 1
        @test nworkers() == 1
        @test length(procs()) == 1
        @test length(workers()) == 1
        @test procs() == [1]
        @test workers() == [1]

        cluster_cookie(cookie)
        processes, output_strings = start_worker_processes(
            5;
            cookie = cookie,
            delay = delay,
            julia_worker_timeout = julia_worker_timeout,
        )
        combined_output = join(output_strings)
        f(combined_output)
        @test nprocs() == 6
        @test nworkers() == 5
        @test length(procs()) == 6
        @test length(workers()) == 5
        @test !(1 in workers())
        @test all(workers() .> 1)

        rmprocs(deepcopy(workers()))
        @test nprocs() == 1
        @test nworkers() == 1
        @test length(procs()) == 1
        @test length(workers()) == 1
        @test procs() == [1]
        @test workers() == [1]
    end
end
