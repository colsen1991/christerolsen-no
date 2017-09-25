import Vue from 'vue'
import Buefy, { Toast } from 'buefy'

Buefy.Icon.props.pack = { type: String, default: 'fa' }

Vue.component(Buefy.Icon.name, Buefy.Icon)
Vue.component(Buefy.Taglist.name, Buefy.Taglist)
Vue.component(Buefy.Tag.name, Buefy.Tag)

Vue.prototype.$toast = Toast
