import { DiscordClient } from "../src";

process.title="Duacord"

const DuacordClient = new DiscordClient(Bun.env.TOKEN)
DuacordClient.Login()