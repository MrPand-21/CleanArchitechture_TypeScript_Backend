export class DoesImageExistQueryResult {

    public readonly doesExist: boolean;

    constructor(doesExist: boolean) {
        this.doesExist = doesExist;
    }

    public static new(doesExist: boolean): DoesImageExistQueryResult {
        return new DoesImageExistQueryResult(doesExist);
    }
}