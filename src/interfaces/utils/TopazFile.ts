import { Expose } from "class-transformer"

export class TopazFile {
    @Expose()
    extension!: string;

    @Expose()
    name!: string

    constructor(url: string) {
        if (!url) return

        const [_, name, extension] = url.match(/\/([^/]+)\.([^/.]+)$/) as Array<string>;
        
        this.extension = extension;
        this.name = name
    }

    get url() {
        return "/files/" + this.name + this.extension
    }
}
