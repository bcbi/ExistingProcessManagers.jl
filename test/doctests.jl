using ExistingProcessManagers
using Test
using Distributed

import Documenter

@testset "Doctests" begin
    Documenter.doctest(ExistingProcessManagers)
end
