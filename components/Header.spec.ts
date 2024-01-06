import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import Header from './Header.vue'

describe('Header component', () => {
    const headerMount = () => {
        const wrapper = mount(Header, {
            global: {
                plugins: [Quasar]
            },
        })
        return wrapper
    }
    it('Should component to be defined', () => {
        const wrapper = headerMount()
        expect(wrapper.vm).toBeDefined()
    })
})
