import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import Footer from './Footer.vue'

describe('Footer component', () => {
    const footerMount = () => {
        const wrapper = mount(Footer, {
            global: {
                plugins: [Quasar]
            }
        })
        return wrapper
    }
    it('Should component to be defined', () => {
        const wrapper = footerMount()
        expect(wrapper.vm).toBeDefined()
    })
})
