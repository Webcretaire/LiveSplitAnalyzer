import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app, route, $config }) => {
    if ($config.matomoUrl && $config.matomoSiteId) {
        Vue.use(VueMatomo, {
            router: app.router,
            host: $config.matomoUrl,
            siteId: $config.matomoSiteId,
            disableCookies: true,
        })
    }
}
