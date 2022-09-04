import { DoesImageExistQueryResult } from './../../../common/cqers/queries/image/results/doesImageExistQueryResult';
import { Optional } from "../../../common/commonTypes";
import { IQueryHandler } from "../../../common/cqers/handlers/IQueryHandler";
import { DoesImageExistQuery } from '../../../common/cqers/queries/image/doesImageExistQuery';

export interface DoesImageExistQueryHandler extends IQueryHandler<DoesImageExistQuery, Optional<DoesImageExistQueryResult>> { }