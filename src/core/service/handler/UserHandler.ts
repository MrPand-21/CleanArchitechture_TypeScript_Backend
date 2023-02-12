import { Optional } from "@core/common/utils/CommonTypes";
import { GetUserQuery } from "@core/common/cqers/queries/GetUserQuery";
import { GetUserQueryResult } from "@core/common/cqers/results/GetUserQueryResult";
import { IUserRepository } from "@core/domain/user/abstract/IUserRepository";
import { User } from "@core/domain/user/entity/User";

export class UserHandler {

    /**
     * @param userRepository which is used to find user by id or email in database
     */
    constructor(
        private readonly userRepository: IUserRepository,
    ) { }

    async handleGetUser(query: GetUserQuery): Promise<Optional<GetUserQueryResult>> {

        let queryResult: Optional<GetUserQueryResult>;

        const user: Optional<User> = await this.userRepository.findUser(query.by, query.options);

        if (user) {
            queryResult = GetUserQueryResult.new(user.getId(), user.getName(), user.getRole());
        }

        return queryResult;

    }

}