const icons = {
    bin: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <line x1='4' y1='7' x2='20' y2='7' />
        <line x1='10' y1='11' x2='10' y2='17' />
        <line x1='14' y1='11' x2='14' y2='17' />
        <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
        <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
    </svg>,

    eraserOn: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3' />
        <path d='M18 13.3l-6.3 -6.3' />
    </svg>,

    eraserOff: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M3 3l18 18" />
        <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l4.995 -4.993m2.009 -2.01l2.997 -2.996a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41c-1.417 1.431 -2.406 2.432 -2.97 3m-2.02 2.043l-4.211 4.256" />
        <path d="M18 13.3l-6.3 -6.3" />
    </svg>,

    sun: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <circle cx='12' cy='12' r='4' />
        <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
    </svg>,

    moon: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
    </svg>,

    resize: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1' />
        <path d='M4 12h7a1 1 0 0 1 1 1v7' />
    </svg>,

    palette: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25' />
        <circle cx='8.5' cy='10.5' r='1' />
        <circle cx='12.5' cy='7.5' r='1' />
        <circle cx='16.5' cy='10.5' r='1' />
    </svg>
}

export default icons;