import Logger from "@corebyte/logger"
import API from "./API"
import Gateway from "./Gateway"

class DiscordClient {
    constructor(Settings) {
        if (typeof Settings == "string") {
            Settings = { Token: Settings, LogLevel: 6, Intents: 3276799 }
        }

        this.Token = `Bot ${Settings.Token}`

        this.API = new API(this.Token, this)
        this.Gateway = new Gateway(this.Token, Settings.Intents, this)
        this.Logger = new Logger("Duacord", Settings.LogLevel)
    }

    async Login() {
        this.Logger.Info("Connecting to the discord gateway...")
        await this.Gateway.Connect()
        this.Logger.Info("Connected to the discord gateway!")
    }
}

export default DiscordClient