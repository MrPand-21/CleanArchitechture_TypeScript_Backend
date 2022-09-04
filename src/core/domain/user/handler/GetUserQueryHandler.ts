import { Optional } from "../../../common/commonTypes";
import { IQueryHandler } from "../../../common/cqers/handlers/IQueryHandler";
import { GetUserQuery } from "../../../common/cqers/queries/user/getUserQuery";
import { GetUserQueryResult } from "../../../common/cqers/queries/user/results/getUserQueryResult";

export interface GetUserQueryHandler extends IQueryHandler<GetUserQuery, Optional<GetUserQueryResult>> { }