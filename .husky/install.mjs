// Installs the git hooks as part of `yarn install`, and no-ops wherever hooks
// make no sense: CI, a production install, or a source tree checked out without
// .git (a Docker build stage, a tarball).
//
// Wired up as the `prepare` script, so a fresh clone picks the hooks up on the
// first install without anyone having to remember a setup step.
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

if (process.env.CI === 'true' || process.env.NODE_ENV === 'production') {
  process.exit(0);
}

if (!existsSync('.git')) {
  process.exit(0);
}

const husky = (await import('husky')).default;
const message = husky();
if (message) console.log(message);

// Opens every `git commit` on the Conventional Commits reminder, so the rule is
// visible before the commit-msg hook has to reject anything.
try {
  execFileSync('git', ['config', 'commit.template', '.gitmessage']);
} catch {
  // A missing or unusual git setup is not a reason to fail an install.
}
