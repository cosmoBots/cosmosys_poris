# cosmoSys PORIS

Version: **0.2.4-dirty** (development).

Optional execution integrations can register a runtime result adapter through
`CosmosysPoris::RuntimeExecutionAdapters.register`. Adapters receive the user,
project, accepted state and operation results after commit; a rejected operation
suppresses all adapters. Results appear under `executions`, without changing the
configuration state or implying hardware execution. No adapter is installed by
PORIS itself. Architecture integration lives in the separate cosmosys_poris_arch.

This version uses Rails/ActiveRecord/Arel for database access and historical
migrations, reconciles the label-scope foreign key and requires cosmoSys 0.2.4.

PORIS modelling extension for [cosmoSys](https://github.com/cosmoBots/cosmoSys),
a free and open source plugin for Redmine.

cosmoSys PORIS lets a team describe systems, parameters, operating modes,
values and commands within the cosmoSys project model. It combines an
interactive configuration viewer with diagrams, generated requirements and
validation plans, and a session-based runtime for exercising model behaviour.

cosmoSys provides the shared base; cosmoSys PORIS adds the PORIS domain. It is
free, open source, and has no per-seat limits. It does not require cosmoSys-Req.

## Status

This repository contains an early alpha artifact. It is suitable for controlled
evaluation and is not yet declared production-ready. You can install it and try
it, but expect breaking changes.

The runtime checks the model's configuration rules; it does not control
physical hardware. Requirements and validation previews are available, but
generating corresponding requirements or validation projects is not yet
implemented. Creating missing `csDatum` definitions from a reviewed preview is
supported.

## Download a model using an API key

`GET /projects/:project_id/poris/model.xml` returns the existing PORIS XML for
external viewers such as pyPORIS. Enable **REST web service** in Redmine's
administration settings and use an active user's API access key. The key
identifies that user; normal project permissions and item visibility still
apply, including private projects and private items. This does not grant API
authentication to commit, generation or any other controller action.

Prefer the standard header over a query parameter:

```bash
curl --fail-with-body --silent --show-error \
  -H "X-Redmine-API-Key: ${REDMINE_API_KEY}" \
  -H 'Accept: application/xml' \
  'https://cosmobots.eu/projects/osiris/poris/model.xml' \
  --output model.xml
```

Redmine also accepts `?key=YOUR_API_KEY`; avoid it when possible because URLs
can end up in logs, browser history and copied links. Do not publish real keys.
When both are supplied, Redmine gives the query parameter precedence.

A successful response is HTTP **200**, `Content-Type: application/xml`, with a
`<poris>` root, not a login redirect. Clients should check the HTTP status and
XML root before opening the model rather than following login redirects.
Invalid keys and inactive users receive **401**; an authenticated user without
access receives **403** (or **404** for a non-visible scoped item). An explicit
invalid key never falls back to anonymous access, even for public projects.
The REST setting is respected; the plugin does not implement a second key
lookup or bypass that setting.

Without API credentials, existing browser-session access continues to work,
including the `.xml` URL. Anonymous export is still possible where Redmine's
settings and project permissions allow it. A supplied API key takes precedence
over the browser session on the XML endpoint.

The intended client command is
`pyPORIS/poriscsyspanel.sh https://cosmobots.eu/projects/osiris`: the client
derives the `/poris/model.xml` URL and sends the header. This plugin change
does not implement or modify that external command or the XML format.

Regression smoke (transactional, real key/session authentication):

```bash
bundle exec rails runner -e production \
  test_support/cosmosys_poris/scripts/run_model_api_auth_smoke_test.rb
```

The smoke script belongs to the csys development workspace, not the standalone
plugin package. It rolls back users, keys, roles, fixtures and settings.

## Requirements

cosmoSys PORIS requires the [cosmoSys](https://github.com/cosmoBots/cosmoSys)
plugin. Both are licensed under GPLv3 by cosmoBots.eu.

It is developed and validated against **Redmine 7.0.1** (Rails 8). It declares
`requires_redmine_plugin :cosmosys, version_or_higher: '0.2.4'`, so Redmine
refuses to start it unless the installed cosmoSys version satisfies that
constraint.

The compiled porisViewer assets are included in this repository. Installing
the plugin does not require Node.js, a separate viewer checkout, or this
development workspace.

## Installation (classic, no Docker)

Migration 002 converts legacy PORIS `blocks` relations to `precedes` and clears
scheduling dates. Its `down` permits schema rollback but deliberately retains
the converted relations and their current ordering priorities; it does not
reconstruct former relation types or dates. Normal upgrades run forwards.
Full removal still refuses to delete PORIS trackers while they contain items.

Install cosmoSys PORIS into an existing Redmine instance with a working
cosmoSys installation (see its
[README](https://github.com/cosmoBots/cosmoSys#installation-classic-no-docker)).

1. **Stop the web server** before changing plugin code or running migrations.
   Back up the database and Redmine file store before upgrading.

2. **Place the plugin in the plugins directory.** From the Redmine root:

   ```bash
   cd /path/to/redmine
   git clone https://github.com/cosmoBots/cosmosys_poris.git plugins/cosmosys_poris
   ```

   A packaged release can be unpacked to `plugins/cosmosys_poris` instead.
   Only the plugin directory itself is required.

3. **Install dependencies.** The plugin uses Redmine and cosmoSys dependencies
   and declares no additional gems. If installing cosmoSys at the same time,
   follow its dependency setup and run from the Redmine root:

   ```bash
   bundle install
   ```

4. **Run the plugin migrations.** Run the cosmoSys migrations first, then PORIS:

   ```bash
   RAILS_ENV=production bundle exec rake redmine:plugins:migrate NAME=cosmosys
   RAILS_ENV=production bundle exec rake redmine:plugins:migrate NAME=cosmosys_poris
   ```

   The migrations add PORIS attributes, labels and structural trackers. On
   upgrade, migration `002` converts PORIS-to-PORIS `blocks` relations to
   `precedes` and clears planning dates on PORIS items. Relations belonging to
   other profiles are left unchanged.

5. **Restart Redmine** and confirm cosmoSys PORIS appears in the administration
   plugin list alongside cosmoSys.

6. **Create a project with the PORIS profile.** The project profile enables
   `prSys`, `prParam`, `prMode`, `prValue` and `prCmd`, together with the shared
   cosmoSys trackers. Open **PORIS** in the project menu to explore the model.

### Upgrading an existing installation

With the server stopped and a backup available:

```bash
cd /path/to/redmine
git -C plugins/cosmosys_poris fetch
git -C plugins/cosmosys_poris checkout <new-tag-or-sha>
RAILS_ENV=production bundle exec rake redmine:plugins:migrate NAME=cosmosys_poris
# restart Redmine
```

Upgrade cosmoSys first if the selected PORIS release requires a newer base
version. Run its migrations before the PORIS migrations. After restarting,
reload open PORIS pages so the browser uses the matching JavaScript.

## Installation with Docker Compose

For a reproducible Docker installation, use the separate
[`cosmoSys_deploy`](https://github.com/cosmoBots/cosmoSys_deploy) repository.
It installs Redmine and cosmoSys at compatible pinned revisions, runs migrations
and bootstrap, and provides health checks, backups and update/restore scripts.

PORIS is an optional plugin set, available with either the base or Requirements
variant. Follow the deployment README to configure a new instance and include
`poris` in `COSMOSYS_PLUGINS`. The PORIS set itself requires no additional tool
groups or companion services. You do not need to install the plugin manually
inside the container.

For an existing deployment, use its updater to select the complete desired set
of plugins, including `poris`; retain any other sets the instance needs. Follow
the deployment repository's configuration and update procedures rather than
editing plugin revisions inside a running container.

## Using PORIS

Build the model with systems and parameters, their modes, and enumerated,
numeric or text values. PORIS `precedes` relations determine which alternatives
a mode enables; their priority determines the order of eligible alternatives.

The project page provides configuration, requirements, validation-plan, Ruby
constructor and automated-validation tabs. **Commit** applies the current
configuration to the session runtime. **Run** prepares a validation plan once,
then executes its steps in sequence and checks their expected results. Failed
checks stop the run; steps whose expected outcome is not defined are marked
unverified rather than passed. Editing the model during a run requires restarting
that run.

Runtime configurations are private to each user session, not saved as shared
project state. They are cached on the server for 24 hours after the last write;
validation plans expire after two hours. The cache must be accessible across
requests in the same session. Losing the runtime cache resets its configuration;
losing a validation plan requires restarting Run.

Behaviour details, model semantics, known limitations and viewer build
instructions are in the [technical notes](docs/technical-notes.md) (Spanish).

## Repository

The canonical repository for this project is
[github.com/cosmoBots/cosmosys_poris](https://github.com/cosmoBots/cosmosys_poris).
Forks and mirrors are welcome under the terms of the GPLv3, but they are not
maintained by cosmoBots.eu and may diverge from this source.

## Contact and licence

- Contact: cosmosys@elporis.com
- Licence: GNU General Public License version 3; see [`LICENSE`](LICENSE).
