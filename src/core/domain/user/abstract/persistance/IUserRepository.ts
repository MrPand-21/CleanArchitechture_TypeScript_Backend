import { Optional } from "../../../../common/commonTypes";
import { RepositoryFindOptions } from "../../../../common/persistance/RepositoryOptions";
import { User } from "../../entity/user";

export interface IUserRepository {

    findUser(by: { id?: string, email?: string }, options?: RepositoryFindOptions): Promise<Optional<User>>;

    countUsers(by: { id?: string, email?: string }, options?: RepositoryFindOptions): Promise<number>;

    addUser(user: User): Promise<{ id: string }>;

    updateUser(user: User): Promise<void>;

}