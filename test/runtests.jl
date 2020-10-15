using ExistingProcessManagers
using Test

@testset "ExistingProcessManagers.jl" begin
    @test ExistingProcessManagers._foobar(1) == 2
end
