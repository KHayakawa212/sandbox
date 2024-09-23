/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			extend: {
				screens: {
					xxs: '400px',
					wrapper: '1680px'
				},
				maxWidth: {
					wrapper: '1680px'
				},
				minWidth: {
					wrapper: '320px'
				},
				animation: {
					fadeIn: 'fadeIn 200ms ease-in',
					loadingImage: 'loadingImage 1s infinite'
				},
				keyframes: {
					fadeIn: {
						'0%': { opacity: 0 },
						'100%': { opacity: 1 }
					},
					loadingImage: {
						'0%': { left: '-45%' },
						'100%': { left: '100%' }
					}
				}
			}
		}
	},
	plugins: []
};
