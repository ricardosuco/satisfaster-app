import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
// import LayoutDefault from './default.vue'

describe.skip('Layout default component', () => {
    // const layoutDefaultMount = () => {
    //     const wrapper = mount(LayoutDefault, {
    //         global: {
    //             plugins: [Quasar]
    //         }
    //     })
    //     return wrapper
    // }
    it.todo('Should component to be defined', () => {
        const wrapper = layoutDefaultMount()
        expect(wrapper.vm).toBeDefined()
    })
    it.todo('test handleSearch', () => {})
    it.todo('test reset pagination', () => {})
    it.todo('test category tooltip', () => {})
    it.todo('test spinner', () => {})

})
