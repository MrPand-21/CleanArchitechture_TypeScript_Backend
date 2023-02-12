import { RepositoryFindOptions } from "../../../../common/persistance/RepositoryOptions";

export interface IGetImagesDTO {
    options: RepositoryFindOptions,
    parentId?: string
}