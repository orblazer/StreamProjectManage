# Stream Project Manage

The `Stream Project Manage` is an software for manage an current project for streamer.

> ⚠ The name of the project is temporary.

## Working

Software architecture :

* Panel : The panel is an interface for manage the software from local web server.
* Software : The software render the panel URL and the URLs of component (project name, current task, tasks and progress bar)

File architecture :

* Project name : Stored in `{folder}/name.tkt`
* Current task : Stored in `{folder}/current_task.tkt`
* Recent tasks (x limit) : Stored in `{folder}/tasks.tkt`

## (DEV) Installation

Install the packages :

```bash
yarn
# or : npm install
```

Build the project :

```bash
yarn build
# or : npm run build
```
