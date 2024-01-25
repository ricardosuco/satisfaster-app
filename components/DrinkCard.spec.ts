import { mount } from '@vue/test-utils'
import DrinkCard from './DrinkCard.vue'
import DialogDetailsDrink from './DialogDetailsDrink.vue'
import { describe, it, expect, vi } from 'vitest'
import { Quasar } from 'quasar'

describe('DrinkCard', () => {
    const drinkCardMount = (options?) => {
        const wrapper = mount(DrinkCard, {
            global: {
                plugins: [Quasar],
            },
            props: {
                drink: {
                    id: 1,
                    name: 'Coca Cola',
                    instructions: 'Mix it all together',
                    image: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg',
                    category: 'Ordinary Drink'
                }
            },
        })
        return wrapper
    }
    it('should mount the component', async () => {
        const wrapper = drinkCardMount()
        expect(wrapper.vm).toBeDefined()
    })
    it('should set drink as favorite when favorite button is clicked', async () => {
        const wrapper = drinkCardMount()
        console.log(wrapper.vm)
        const handleFavorite = vi.spyOn(wrapper.vm, 'handleFavorite')
        const button = wrapper.find('[data-testid="favorite-btn"]')
        await button.trigger('click')
        expect(handleFavorite).toHaveBeenCalled()
        expect(handleFavorite).toBeCalledWith(wrapper.vm.$props.drink)
    })
    it('should show dialog drink details when showDrink button is clicked', async () => {
        const wrapper = drinkCardMount()
        const showDrink = vi.spyOn(wrapper.vm, 'showDrink')
        const button = wrapper.find('[data-testid="show-drink-btn"]')
        await button.trigger('click')
        expect(showDrink).toHaveBeenCalled()
        expect(showDrink).toBeCalledWith(wrapper.vm.$props.drink)
        expect(wrapper.vm.$data.currentDrink).toBe(wrapper.vm.$props.drink)
        expect(wrapper.vm.$data.showDialog).toBe(true)
        expect(wrapper.findComponent(DialogDetailsDrink).exists()).toBe(true)
    })
    it.todo('should create local user when component is created', async () => {
        const wrapper = drinkCardMount()
        const createLocalUser = vi.spyOn(wrapper.vm, 'createLocalUser')
        expect(createLocalUser).toHaveBeenCalled()
    })
    it.todo('test isFavorite', async () => {
        
    })
})
