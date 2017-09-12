import Vue from 'vue'
import Buefy from 'buefy'

// TODO: Fix hack. Unexpected '>* in buefy/src/utils/config when following https://github.com/rafaelpimpa/buefy/issues/73
Buefy.Icon.props.pack = { type: String, default: 'fa' }

Vue.component(Buefy.Icon.name, Buefy.Icon)
