import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            colors: {
                blue: "#000133",
                purple: "#815CA7",
                pink: "#F0BEBE",
            },
            fontFamily: {
                header: ["Oswald"],
                body: ["Bw Gradual"],
            },
        },
    },

    plugins: [forms],
};
