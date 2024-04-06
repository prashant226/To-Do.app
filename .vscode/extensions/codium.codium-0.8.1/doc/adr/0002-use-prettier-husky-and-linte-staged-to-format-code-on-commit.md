# 2. Use Prettier, Husky, and lint-staged to format code on commit

Date: 2023-04-21

## Status

Accepted

## Context

Today, code isn't formatted automatically. It's up to the configuration of each developer's editor, which generates a lot of noise in the Pull Requests.

Ideally, we want something that we don't have to think about. [Prettier](https://prettier.io/) is the standard for JavaScript projects nowadays.

Also, we don't want to think about it. We want Prettier to format code consistently whenever we commit. We don't want developers to have to do manual things to their environment to make it work. It should be reliable and transparent.

The best way we know to make the process transparent is to have Prettier run automatically on the staged file, before each commit.

[Husky](https://typicode.github.io/husky/) provides a simple way to run pre-commit hooks.

Prettier [has multiple ways to be executed as a pre-commit hook](https://prettier.io/docs/en/precommit.html). Today, [lint-staged](https://github.com/okonet/lint-staged) is an easy way to execute a script on the staged files.

## Decision

We will format our code with Prettier.

We'll use Husky + lint-staged to run Prettier on staged file, as a pre-commit hook.

## Consequences

- All commits will be formatted according to our Prettier config from now on. No need to think about it anymore!
- All staged files will be formatted on commit.
- Developers won't have to do anything. Husky will configure the git pre-commit hook when you run `npm install`.
- Commits may take slightly longer to execute, depending on how much files need to be formatted (probably ~1s max)
