using ExistingProcessManagers
using Test
using Distributed

import Documenter

include("test-utils.jl")

@testset "ExistingProcessManagers.jl" begin
    include("unit-tests.jl")
    include("doctests.jl")
    include("integration-tests.jl")
end
