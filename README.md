# LiveSplitAnalyzer

[![Continuous integration](https://github.com/Webcretaire/LiveSplitAnalyzer/actions/workflows/ci.yml/badge.svg)](https://github.com/Webcretaire/LiveSplitAnalyzer/actions/workflows/ci.yml)
[![Deployment](https://github.com/Webcretaire/LiveSplitAnalyzer/actions/workflows/cd.yml/badge.svg)](https://github.com/Webcretaire/LiveSplitAnalyzer/actions/workflows/cd.yml)
[![Github Pages](https://img.shields.io/github/deployments/Webcretaire/LiveSplitAnalyzer/github-pages?label=Github%20Pages)](https://github.com/Webcretaire/LiveSplitAnalyzer/deployments/activity_log?environment=github-pages)
[![SonarCloud Status](https://sonarcloud.io/api/project_badges/measure?project=Webcretaire_LiveSplitAnalyzer&metric=alert_status)](https://sonarcloud.io/dashboard/?id=Webcretaire_LiveSplitAnalyzer)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

Small tool to modify and visualize info from LiveSplit .lss files. All processing is done entirely in the browser locally, splitfiles are never sent to any server. See live [here](https://webcretaire.github.io/LiveSplitAnalyzer/).

## Features

The main purpose of this tool is to visualize data in a hopefully pretty way, by displaying you times in graphs, for both full runs, individual splits and subsplits, though it has since evolved to allow you to modify splitfiles and download them back. (Probably incomplete) list of features:

### Times visualization

- Full run stats: line graphs of your finished attempts
- Individual run stats: doughnut graphs that focus on one run of your choice, displaying the times and potential timesave of each split
- Individual (sub)split stats: line graphs of your time at any split or subspit across all your attempts. Includes agregated data of subsplits belonging to the same "bigger split"

### Comparison management

- Visualize, rename, delete and manually edit comparisons
- Generate balanced comparisons: create comparisons from a percentage that will be added to golds, or a target time that you want to reach

### Other modifications to splitfiles

- Fix fake golds: remove any attempt at any split, and re-compute your gold for said split with the remaining attempts
- Remove all runs before some point: if you have started running again after a huge re-route, you can create a clean split file by deleting any number of old runs
- Merge any split into the next one: if you created a subsplit you no longer want, or need to remove a split after a re-route

## Contact

This tool doesn't really have its own community yet, but if you want to chat the closest we have for now is the `#livesplitanalyzer` channel on my (Webcrétaire) own [Discord server](https://discord.gg/RBPYTBtFBw), which you are very welcome to join even if you don't watch my streams on Twitch.

## Contributing

If you want to help develop this tool (well first thanks 😊) you need to be familiar with [Nuxt 2](https://nuxtjs.org), [Typescript](https://www.typescriptlang.org), using [yarn](https://yarnpkg.com) and working with [git](https://git-scm.com). We use a traditional workflow with [GitHub Pull Requests](https://github.com/Webcretaire/LiveSplitAnalyzer/pulls) to integrate new features, so go ahead and start by [forking the project](https://github.com/Webcretaire/LiveSplitAnalyzer/fork) if you want to help. If you don't know what to do, or want to report a bug / submit a feature request have a look at the [issue tracker](https://github.com/Webcretaire/LiveSplitAnalyzer/issues).
