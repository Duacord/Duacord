import merge from "just-merge";

class BaseBuilder {
    constructor(BaseData, OverwriteData={}) {
        this.Data = merge(BaseData, OverwriteData)
    }

    Export() {
        return this.Data
    }
}

export default BaseBuilder