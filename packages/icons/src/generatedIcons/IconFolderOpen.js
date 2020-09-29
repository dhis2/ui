import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconFolderOpen16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m5.58578644 2c.26521649 0 .5195704.10535684.70710678.29289322l1.70710678 1.70710678h5c.5522847 0 1 .44771525 1 1l.001153 2.03215581c.6794822.14297338 1.1895966.74583699 1.1895966 1.46784419 0 .08888199-.0078998.17749951-.0235604.26481325l-.0292939.12986286-1.1428953 4.19032389-.0017277.0316211c-.0577651.4973387-.4804365.8833789-.9932723.8833789h-11c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1zm8.10496316 6h-8.99032234c-.18021704 0-.34393117.09663713-.432277.24868049l-.03761971.08044798-1.69953055 4.67087153 10.4688749.0008723c-.0000168-.0144659.0005989-.0290117.0018672-.0436027l.015876-.0888283 1.1555134-4.2368826c.0116932-.04287506.0176181-.08711771.0176181-.1315587 0-.24545989-.1768751-.44960837-.4101244-.49194433zm-8.10496316-5h-3.58578644l-.001 8.539 1.29173713-3.55161459c.19897637-.54718503.69431582-.92550479 1.26545407-.98047005l.14423606-.00691536 8.29857274-.001.001-1.999h-5.41421356z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconFolderOpen16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFolderOpen24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8.46481624 3c.33435319 0 .64658452.16710114.8320503.4452998l1.70313346 2.5547002h7c1.1045695 0 2 .8954305 2 2v1.999l2 .001c.6931133 0 1.1639458.6820192.948521 1.3175237l-.0423379.1053618-2.9061831 6.2261145v.351c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-13c0-1.1045695.8954305-2 2-2zm11.96418376 9h-13.753l-2.4 6h13.353zm-12.5-7h-3.929v8.306l1.07152331-2.6773907c.13667702-.3416925.44818881-.577512.80721584-.621259l.12126085-.0073503 12-.001v-1.999h-8.07036752z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconFolderOpen24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFolderOpen = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconFolderOpen16 className={className} color={color} />

        case 24:
            return <IconFolderOpen24 className={className} color={color} />

        default:
            return null
    }
}

IconFolderOpen.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconFolderOpen.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconFolderOpen }
