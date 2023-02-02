import { Optional } from "../../../../common/commonTypes";
import { RepositoryFindOptions, RepositoryRemoveOptions, RepositoryUpdateManyOptions } from "../../../../common/persistance/RepositoryOptions";
import { Image } from "../../entity/image";

export interface IGalleryRepository {

    findImage(by: { id?: string, parentId?: string }, options?: RepositoryFindOptions): Promise<Optional<Image>>;

    countImages(by: { id?: string, parentId?: string }, options?: RepositoryFindOptions): Promise<number>;

    addImage(image: Image): Promise<{ id: string }>;

    updateImages(images: Image[], options?: RepositoryUpdateManyOptions): Promise<void>;

    updateImage(image: Image): Promise<void>;

    removeImage(imageId: string, options?: RepositoryRemoveOptions): Promise<void>;

    findImages(by?: { id?: string, parentId?: string }, options?: RepositoryFindOptions): Promise<Image[]>;

}