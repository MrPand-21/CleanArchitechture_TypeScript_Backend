import { RepositoryFindOptions } from "../../persistance/RepositoryOptions";

export class DoesImageExistQuery {

    by: { id?: string, ownerId?: string };

    options?: RepositoryFindOptions;

    private constructor(by: { id?: string, ownerId?: string }, options?: RepositoryFindOptions) {
        this.by = by;
        this.options = options;
    }

    public static new(by: { id?: string, ownerId?: string }, options?: RepositoryFindOptions): DoesImageExistQuery {
        return new DoesImageExistQuery(by, options);
    }

}