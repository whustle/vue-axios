import { axios } from '@/utils/request'
import Vue from 'vue'

export function getAllVolume() {
	return Vue.axios({
		url: 'volumes',
		method: 'get'
	})
}