import { keyframes } from "@emotion/react";

export const moveUp = keyframes({
    '0%': {
        transform: `translateY(150%)`,
    },
    '100%': {
        transform: `translateY(0)`,
    },
});

export const show = keyframes({
    '0%': {
        opacity: '0',
    },
    '100%': {
        opacity: '1',
    }
});

export const fontStyle = keyframes({
    'from': {
        fontStyle: 'normal',
    },
    'to': {
        fontStyle: 'italic',
    }
})

export default {
    moveUp,
    show,
    fontStyle
}