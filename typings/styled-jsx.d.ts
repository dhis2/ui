// Allows `<style jsx>` and `<style jsx global>` on `<style>` elements.
// styled-jsx is applied by a Babel transform, so nothing imports it and its
// own types are never loaded.
import 'react'

declare module 'react' {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean
        global?: boolean
    }
}
