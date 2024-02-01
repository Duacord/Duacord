import AdvancedEmitter from "./AdvancedEmitter";

class Websocket extends AdvancedEmitter {
    constructor(Url) {
        super()

        this.Socket = new WebSocket(Url)

        this.Socket.addEventListener("open", () => { this.Emit("Connected") })
        this.Socket.addEventListener("message", (Message) => { this.Emit("RawData", Message) })
        this.Socket.addEventListener("close", () => { this.Emit("Disconnected") })

        this.On("RawData", (Message) => { this.Emit("Data", JSON.parse(Message.data)) })
    }

    Send(Data) {
        this.Socket.send(JSON.stringify(Data))
    }
}

export default Websocket