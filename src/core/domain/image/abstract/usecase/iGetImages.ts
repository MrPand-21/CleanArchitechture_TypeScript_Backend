import { RepositoryFindOptions } from "../../../../common/persistance/RepositoryOptions";

export interface IGetImages {
    options: RepositoryFindOptions,
    parentId?: string
}