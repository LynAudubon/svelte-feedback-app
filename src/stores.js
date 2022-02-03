import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Cat ipsum dolor sit amet, chase red laser dot. Knock over christmas tree. Cat mojo tickle my belly at your own peril i will pester for food when you\'re in the kitchen even if it\'s salad for eat from dog\'s food fall over dead (not really but gets sypathy) or chase dog then run away.',
    },
    {
        id: 2,
        rating: 9,
        text: 'Whenever a door is opened, rush in before the human catch mouse and gave it as a present and hopped up on catnip, so pretend not to be evil, pretend not to be evil yet jump five feet high and sideways when a shadow moves.',
    },
    {
        id: 3,
        rating: 8,
        text: 'Leopard american bobtail. Malkin. Birman devonshire rex tiger yet kitty or egyptian mau havana brown. Savannah tiger tiger, yet balinese.',
    },
])