import Vue from 'vue'
import Buefy, { Toast } from 'buefy'

const { Icon, Taglist, Tag } = Buefy

Icon.props.pack = { type: String, default: 'fa' }

Vue.component(Icon.name, Icon)
Vue.component(Taglist.name, Taglist)
Vue.component(Tag.name, Tag)

Vue.prototype.$toast = Toast
