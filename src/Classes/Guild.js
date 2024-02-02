class Guild {
    constructor(Client, Data) {
        this.Client = Client
        this.Data = Data

        this.JoinedAt = new Date(Data.joined_at)
        console.log(Data)
    }

    get Id() {
        return this.Data.id
    }
    
    get id() {
        return this.Id
    }

    get Name() {
        return this.Data.name
    }

    get name() {
        return this.Name
    }

    get Icon() {
        return this.Data.icon
    }

    get icon() {
        return this.Icon
    }

}

export default Guild