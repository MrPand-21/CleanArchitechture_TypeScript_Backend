import { Optional } from "../../../common/commonTypes";
import { GetUserQuery } from "../../../common/cqers/queries/user/getUserQuery";
import { GetUserQueryResult } from "../../../common/cqers/queries/user/results/getUserQueryResult";
import { IUserRepository } from "../../../domain/user/abstract/persistance/IUserRepository";
import { User } from "../../../domain/user/entity/user";
import { GetUserQueryHandler } from "../../../domain/user/handler/GetUserQueryHandler";

export class HandleGetUserQueryService implements GetUserQueryHandler {

    /**
     * @param userRepository which is used to find user by id or email in database
     */
    constructor(
        private readonly userRepository: IUserRepository,
    ) { }

    async handle(query: GetUserQuery): Promise<Optional<GetUserQueryResult>> {

        let queryResult: Optional<GetUserQueryResult>;

        const user: Optional<User> = await this.userRepository.findUser(query.by, query.options);

        if (user) {
            queryResult = GetUserQueryResult.new(user.getId(), user.getName(), user.getRole());
        }

        return queryResult;

    }

}