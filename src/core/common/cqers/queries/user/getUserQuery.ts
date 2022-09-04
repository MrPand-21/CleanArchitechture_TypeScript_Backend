import { RepositoryFindOptions } from "../../../persistance/RepositoryOptions";

export class GetUserQuery {

    by: { id?: string, email?: string };

    options?: RepositoryFindOptions;

    private constructor(by: { id?: string, email?: string }, options?: RepositoryFindOptions) {
        this.by = by;
        this.options = options;
    }

    public static new(by: { id?: string, email?: string }, options?: RepositoryFindOptions): GetUserQuery {
        return new GetUserQuery(by, options);
    }

}