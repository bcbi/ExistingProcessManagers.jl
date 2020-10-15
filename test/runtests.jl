using ExistingProcessManagers
using Test

@testset "ExistingProcessManagers.jl" begin
    @test ExistingProcessManagers._foobar(2) == 4
end
