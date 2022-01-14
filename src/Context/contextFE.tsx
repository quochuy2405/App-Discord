import { createContext, useContext } from 'react'
import sound from '../Sound/soundclick.mp3'
interface ContextInterface {
	startSound: Function
}
let audio = new Audio(sound)
audio.volume = 0.02
const startSound = () => {
	audio.play()
}
const ctx = createContext<ContextInterface>({
	startSound: startSound,
})
export const useGlobalContext = () => useContext(ctx)
