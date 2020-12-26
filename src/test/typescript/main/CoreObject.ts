export default class CoreObject {
    private size?: number
    private count?: number

    public setSize(size: number) : this {
        this.size = size;
        return this;
    }

    public setCount(count: number) : this {
        this.count = count;
        return this;
    }
}