import Vue from 'vue'
import Buefy from 'buefy'

// TODO: Ugly hack, but it works...
Buefy.Icon.props.pack = { type: String, default: 'fa' }

Vue.component(Buefy.Icon.name, Buefy.Icon)
