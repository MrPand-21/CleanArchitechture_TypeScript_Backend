import { Optional } from "../../../common/commonTypes";
import { IQueryHandler } from "../../../common/cqers/handlers/IQueryHandler";
import { GetImagePreviewQuery } from "../../../common/cqers/queries/image/getImagePreviewQuery";
import { GetImagePreviewQueryResult } from "../../../common/cqers/queries/image/results/getImagePreviewQuery";

export interface GetImagePreviewQueryHandler extends IQueryHandler<GetImagePreviewQuery, Optional<GetImagePreviewQueryResult>> { }