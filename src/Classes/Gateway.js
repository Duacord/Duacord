import Websocket from "./Websocket"
import AdvancedEmitter from "./AdvancedEmitter"
import { Enums } from ".."
import GatewayHeartbeat from "./GatewayHeartbeat"

function AddSocketListeners(Socket, GatewayInstance) {
    Socket.On(
        "Data",
        (Data) => {
            if (Data.s) { GatewayInstance.Sequence = Data.s }
            GatewayInstance.Emit(Data.op, Data.d)
            if (Data.op == Enums.GATEWAY_OPCODE.DISPATCH) {
                GatewayInstance.Emit(Data.t, Data.d)
            }
        }
    )
}

class Gateway extends AdvancedEmitter {
    constructor(Token, Intents, DiscordClient) {
        super()

        this.Token = Token
        this.Intents = Intents
        this.DiscordClient = DiscordClient
        
        
        this.Sequence = null
        this.Heartbeat = new GatewayHeartbeat(this)

        this.On(
            Enums.GATEWAY_OPCODE.HELLO,
            (Data) => {
                this.Heartbeat.Start(Data.heartbeat_interval)
                this.Identify()
            }
        )
    }

    Identify() {
        this.Send(
            Enums.GATEWAY_OPCODE.IDENTIFY,
            {
                token: this.Token,
                intents: this.Intents,
                properties: {
                    $os: process.platform,
                    $browser: "Duacord",
                    $device: "Duacord"
                }
            }
        )
    }

    Send(Opcode, Data) {
        const Packet = {
            op: Opcode,
            d: Data
        }
        this.Socket.Send(Packet)
    }

    async GetGatewayUrl() {
        const Data = await this.DiscordClient.API.get_bot_gateway()
        this.DiscordClient.Logger.Debug(`Gateway: ${Data.url}`)
        return Data.url
    }

    async Connect() {
        const GatewayUrl = await this.GetGatewayUrl()
        const Url = `${GatewayUrl}?v=10&encoding=json`
        const Socket = new Websocket(Url)
        Socket.On("Data", console.log)
        AddSocketListeners(Socket, this)
        this.Socket = Socket
    }
}

export default Gateway