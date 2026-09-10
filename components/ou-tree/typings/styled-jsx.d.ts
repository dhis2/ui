/*
 * styled-jsx works through a Babel transform, so nothing in component
 * source imports it and its type augmentation is never pulled into the
 * program on its own. Without this file, `<style jsx>` fails to
 * type-check because `jsx` and `global` are not valid props on `style`.
 */
import 'react'

declare module 'react' {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean
        global?: boolean
    }
}
