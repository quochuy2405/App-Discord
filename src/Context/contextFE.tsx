import { createContext, useContext } from 'react'
import sound from '../Sound/soundclick.mp3'
import mess from '../Sound/Message.mp3'
interface ContextInterface {
	startSound: Function
	messageSound:Function
}
let audio = new Audio(sound)
audio.volume = 0.02
const startSound = () => {
	audio.play()
}
let message = new Audio(mess)
message.volume = 0.1
const messageS = () => {
	message.play()
}
export const ctx = createContext<ContextInterface>({
	startSound: startSound,
	messageSound: messageS,
})
export const useGlobalContext = () => useContext(ctx)
