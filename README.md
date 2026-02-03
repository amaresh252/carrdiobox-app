# Contributing Guidelines

Thanks for contributing 👋

This repository follows a lightweight and practical set of conventions to keep the codebase clean, consistent, and easy to scale.

## Getting Started

1. **Fork and Clone**: Fork the repository and clone it to your local machine
2. **Setup Environment**: Follow the setup instructions in the README.md
3. **Create a Branch**: Always create a new branch from `develop` for your work (see Branching Strategy)
4. **Make Changes**: Implement your changes following our coding standards
5. **Test Thoroughly**: Ensure all tests pass and new functionality is tested
6. **Submit PR**: Create a Pull Request following our PR guidelines

## Branching Strategy

Our project follows a structured branching strategy designed to maintain code quality and enable smooth collaboration across large teams.

### Branch Types

#### Long-lived Branches

- **main**: Production-ready code. This branch contains only released, stable code and should always be in a deployable state.
- **develop**: Integration branch for all development work. All feature, fix, and chore branches merge into develop before being promoted to main.

#### Short-lived Branches

**Feature Branches**

- **Naming Convention**: `feat-<scope>-<description>`
- **Purpose**: New features, enhancements, and functionality additions
- **Source**: Always branch from `develop`
- **Example**: `feat-api-auth`, `feat-web-login`

**Fix Branches**

- **Naming Convention**: `fix-<scope>-<description>`
- **Purpose**: Bug fixes, issue resolutions, and hotfixes
- **Source**: Always branch from `develop` (or `main` for critical production fixes)
- **Example**: `fix-api-healthcheck`, `fix-web-login-validation`

**Chore Branches**

- **Naming Convention**: `chore-<task>`
- **Purpose**: Maintenance tasks, dependency updates, refactoring, configuration changes
- **Source**: Always branch from `develop`
- **Example**: `chore-repo-baseline-setup`, `chore-shared-logger-cleanup`

**Documentation Branches**

- **Naming Convention**: `docs-<topic>`
- **Purpose**: Documentation updates and improvements
- **Source**: Always branch from `develop`
- **Example**: `docs-contributing-guide`, `docs-api-reference`

**Infrastructure Branches**

- **Naming Convention**: `infra-<task>`
- **Purpose**: Infrastructure, deployment, and DevOps related changes
- **Source**: Always branch from `develop`
- **Example**: `infra-ci-pipeline`, `infra-docker-setup`

### Branch Workflow

```
main (production)
  ↑
develop (integration)
  ↑
feat-<scope>-<description> | fix-<scope>-<description> | chore-<task> | docs-<topic> | infra-<task>
```

### Branch Rules

- Never commit directly to `main` or `develop` branches
- Always create a branch from `develop` for new work
- Use kebab-case for all branch names
- Keep branch names short and descriptive
- One concern per branch - branches should be focused on a single feature, fix, or chore
- Keep branches up-to-date - regularly sync with `develop` to avoid conflicts
- Delete branches after successful merge to keep the repository clean

## Code Conventions

### General Guidelines

- **Language**: TypeScript
- Prefer `async/await` over promises and callbacks
- Avoid using `any` type - use proper typing
- Keep functions small and readable
- One primary responsibility per file

### File Naming

- Use `kebab-case.ts` for all TypeScript files
- Example: `user-service.ts`, `auth-middleware.ts`

### Imports

- Prefer workspace package imports over relative imports
- Avoid deep relative imports across packages

**Example:**

```typescript
// Good
import { logger } from "@main-back-office/logger";

// Avoid
import { logger } from "../../../packages/logger";
```

## Logging Guidelines

Consistent logging is essential for debugging and monitoring.

### Rules

- **Do not use `console.log`** - Always use the shared logger package
- Use appropriate log levels: `info`, `warn`, `error`, `debug`

### Usage Example

```typescript
import { logger } from "@main-back-office/logger";

logger.info("Service started");
logger.error(error, "Unexpected error occurred");
```

### When to Add Logs

- Server startup and shutdown
- Errors and exceptions
- Important lifecycle events
- API request/response (when appropriate)

## Project Structure Guidelines

Our monorepo is organized as follows:

```
apps/
  api/        → Backend (Fastify)
  web/        → Frontend (React)

packages/
  logger/     → Shared logger
  shared/     → Shared schemas and types
```

### Structure Rules

- Apps should not depend on each other directly
- Shared logic must live in `packages/`
- Keep packages focused and single-purpose

## Testing Expectations

Quality code requires proper testing.

### Guidelines

- New features should include tests when feasible
- Bug fixes should include a regression test
- Prefer readable tests over complex ones
- Test edge cases and error scenarios

**Note**: Testing rules may evolve as the project grows.

## Commit Guidelines

Clear, descriptive commit messages are essential for maintaining a readable project history and enabling effective collaboration.

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **chore**: Changes to build process, dependencies, or tooling
- **docs**: Documentation changes
- **infra**: Infrastructure and deployment changes

### Commit Message Examples

**Good Examples:**

```
feat(auth): implement OAuth2 authentication flow

- Add OAuth2 provider integration
- Implement token refresh mechanism
- Add error handling for expired tokens
```

```
fix(api): resolve memory leak in health check endpoint

The health check was not properly cleaning up database connections,
causing memory leaks during high traffic periods.
```

```
chore(deps): update React to version 18.3.0

- Update react and react-dom packages
- Update peer dependencies
- Resolve breaking changes
```

### Commit Best Practices

- Write clear, descriptive messages that explain what and why, not just how
- Keep commits atomic - each commit should represent a single logical change
- Commit frequently - small, frequent commits are easier to review and revert
- Reference issues - include issue numbers in commit messages when applicable

## Pull Request Process

All changes to `develop` or `main` branches must be made through Pull Requests (PRs).

### PR Requirements

Before opening a PR, ensure:

- **Branch from develop**: Always create your branch from the latest `develop` branch
- **Update develop**: Ensure your branch is up-to-date with `develop` before creating PR
- **Branch name follows convention**: Use proper naming format (feat-, fix-, chore-, etc.)
- **Code builds locally**: Verify the project builds without errors
- **No console.log statements**: Use the logger package instead
- **Logging added where appropriate**: Important operations should be logged
- **No unused files or exports**: Clean up any unused code
- **Documentation updated**: Update docs if behavior changed
- **No conflicts**: Resolve any merge conflicts before requesting review
- **Clear Description**: Provide a comprehensive description of your changes
- **Link Issues**: Reference related issues in the PR description

### PR Review Process

1. **Code Review**: All PRs require approval from a reviewer before merging
2. **Address Feedback**: Respond to review comments and make requested changes
3. **Re-request Review**: After addressing feedback, re-request review
4. **Merge**: Once approved, the PR will be merged by the reviewer

### PR Best Practices

- Keep PRs small and focused - one feature, fix, or chore per PR
- Keep PRs small - easier to review and less error-prone
- Explain why the change is needed, not just what changed
- Update frequently - rebase or merge `develop` into your branch regularly
- Address review comments clearly or discuss them
- Respond promptly - address review feedback in a timely manner
- Be open to feedback - code review is a collaborative process

## Development Workflow

### Standard Workflow

1. **Sync with develop**:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Create feature branch**:
   ```bash
   git checkout -b feat-scope-description
   ```

3. **Make changes**: Implement your feature/fix/chore

4. **Commit frequently**: Make small, atomic commits with clear messages
   ```bash
   git add .
   git commit -m "feat(scope): description of changes"
   ```

5. **Push branch**:
   ```bash
   git push origin feat-scope-description
   ```

6. **Create PR**: Open a Pull Request targeting `develop`

7. **Address feedback**: Make changes based on code review

8. **Get approval**: Wait for approval from reviewer

9. **Merge**: PR will be merged after approval

## Questions or Improvements?

Feel free to open an issue or discussion. Suggestions to improve conventions are always welcome.

Thanks for contributing 🚀
