const path = require('path')
const findup = require('find-up')

exports.PROJECT_ROOT = findup.sync(
    directory => {
        const amiroot = ['.git', '.github'].map(i =>
            findup.sync.exists(path.join(directory, i))
        )
        return amiroot.includes(true) && directory
    },
    {
        type: 'directory',
    }
)
exports.COMPONENTS_DIR = path.join(this.PROJECT_ROOT, 'components')
exports.PACKAGES_DIR = path.join(this.PROJECT_ROOT, 'packages')
