export default {
    extends: ['@commitlint/config-conventional'],
    // semantic-release appends the changelog to a release commit, which
    // pushes it past the header length limit.
    ignores: [(commit) => commit.includes('[skip release]')],
}
