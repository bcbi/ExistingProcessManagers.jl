using ExistingProcessManagers
using Test
using Distributed

@testset "Unit tests" begin
    @testset "constructors.jl" begin    
        hosts_and_ports = [
            ("127.0.0.1", 9601), # the host is "127.0.0.1", and the port number is 9601
            ("127.0.0.1", 9602), # the host is "127.0.0.1", and the port number is 9602
        ]
        @test ExistingProcessManager(hosts_and_ports) isa ExistingProcessManager
    end
end
