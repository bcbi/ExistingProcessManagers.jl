using ExistingProcessManagers
using Documenter

makedocs(;
    modules=[ExistingProcessManagers],
    authors="Dilum Aluthge",
    repo="https://github.com/bcbi/ExistingProcessManagers.jl/blob/{commit}{path}#L{line}",
    sitename="ExistingProcessManagers.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://bcbi.github.io/ExistingProcessManagers.jl",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/bcbi/ExistingProcessManagers.jl",
)
