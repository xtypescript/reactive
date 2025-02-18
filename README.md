<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/199759488?s=150&u=6b91b3230d09350680bf26ea41c8979da2cf2a64&v=4"
    title="@xtypescript/reactive"
  />
</a>

## xtypescript/reactive

<!-- npm badge -->
[![npm version][xtypescript-npm-badge-svg]][xtypescript-npm-badge]
[![GitHub issues][xtypescript-badge-issues]][xtypescript-issues]
[![GitHub license][xtypescript-badge-license]][xtypescript-license]

A **TypeScript** library for building reactive applications.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - `Subjects`
  - `Subscriptions`
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

Install peer dependencies

```bash
npm install @rxjs@latest --save-peer
```

Install the library

```bash
npm install @xtypescript/reactive --save-peer
```

## Api

```typescript
import {
  Subjects,
  Subscriptions,
} from '@xtypescript/reactive';
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © xtypescript ([license][xtypescript-license])

<!-- This package: xtypescript  -->
  <!-- GitHub: badges -->
  [xtypescript-badge-issues]: https://img.shields.io/github/issues/xtypescript/reactive
  [xtypescript-badge-forks]: https://img.shields.io/github/forks/xtypescript/reactive
  [xtypescript-badge-stars]: https://img.shields.io/github/stars/xtypescript/reactive
  [xtypescript-badge-license]: https://img.shields.io/github/license/xtypescript/reactive
  <!-- GitHub: badges links -->
  [xtypescript-issues]: https://github.com/xtypescript/reactive/issues
  [xtypescript-forks]: https://github.com/xtypescript/reactive/network
  [xtypescript-license]: https://github.com/xtypescript/reactive/blob/master/LICENSE
  [xtypescript-stars]: https://github.com/xtypescript/reactive/stargazers
<!-- This package -->

<!-- Package: xtypescript -->
  <!-- npm -->
  [xtypescript-npm-badge-svg]: https://badge.fury.io/js/@xtypescript%2Freactive.svg
  [xtypescript-npm-badge]: https://badge.fury.io/js/@xtypescript%2Freactive

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
