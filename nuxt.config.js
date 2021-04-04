import colors from 'vuetify/lib/util/colors'

export default {
	buildModules: ['@nuxtjs/pwa', '@nuxtjs/vuetify'],
	components: true,
	pwa: {
		manifest: {
			name: 'Nuxt Counter',
			short_name: 'Nuxt Counter',
			theme_color: colors.blue.darken3,
		},
	},
	srcDir: 'src',
	target: 'static',
}
