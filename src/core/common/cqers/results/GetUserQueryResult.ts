import { Nullable } from '../../utils/CommonTypes';
export class GetUserQueryResult {

    public readonly id: string;

    public readonly name: string;

    public readonly role: Nullable<number>;

    constructor(id: string, name: string, role: Nullable<number>) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    public static new(id: string, name: string, role: Nullable<number>): GetUserQueryResult {
        return new GetUserQueryResult(id, name, role);
    }

}