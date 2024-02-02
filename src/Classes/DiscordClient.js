import Logger from "@corebyte/logger"
import API from "./API"
import Gateway from "./Gateway"
import { Enums } from ".."
import AdvancedEmitter from "./AdvancedEmitter"
import Guild from "./Guild"

function BindGatewayEvents(DiscordClient, GatewayInstance) {

    GatewayInstance.On(
        Enums.DISPATCH_EVENT.GUILD_CREATE,
        (Data) => {
            const GuildInstance = new Guild(DiscordClient, Data)
            DiscordClient.Guilds.push(GuildInstance)
            DiscordClient.Emit(Enums.CLIENT_EVENT.GUILD_CREATE, GuildInstance)
        }
    )

}

class DiscordClient extends AdvancedEmitter {
    constructor(Settings) {
        super()
        if (typeof Settings == "string") {
            Settings = { Token: Settings, LogLevel: 6, Intents: 3276799 }
        }

        this.Token = `Bot ${Settings.Token}`

        this.API = new API(this.Token, this)
        this.Gateway = new Gateway(this.Token, Settings.Intents, this)
        this.Logger = new Logger("Duacord", Settings.LogLevel)

        this.Guilds = []

        BindGatewayEvents(this, this.Gateway)
    }

    async Login() {
        this.Logger.Info("Connecting to the discord gateway...")
        await this.Gateway.Connect()
        this.Logger.Info("Connected to the discord gateway!")
    }
}

export default DiscordClient