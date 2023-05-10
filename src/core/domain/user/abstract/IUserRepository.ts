import { Optional } from "../../../common/utils/CommonTypes";
import { RepositoryFindOptions } from "../../../common/persistance/RepositoryOptions";
import { User } from "../entity/user";

export interface IUserRepository {

    findUser(by: { id?: string, email?: string }, options?: RepositoryFindOptions): Promise<Optional<User>>;

    countUsers(by: { id?: string, email?: string }, options?: RepositoryFindOptions): Promise<number>;

    findUsersList(by: { id?: string, email?: string }, options?: RepositoryFindOptions): Promise<Optional<User[]>>

    addUser(user: User): Promise<{ id: string }>;

    updateUser(user: User): Promise<void>;

}