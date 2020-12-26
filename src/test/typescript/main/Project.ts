import CoreObject from './CoreObject'

export default class Project extends CoreObject {
    private name?: string

    static of() : Project {
        return new Project()
    }

    public setName(name: string) : this{
        this.name = name;
        return this;
    }

    public getName(): string | undefined {
        return this.name;
    }
}