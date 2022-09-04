import { Optional } from "../../../../common/commonTypes";
import { RepositoryFindOptions } from "../../../../common/persistance/RepositoryOptions";
import { Image } from "../../entity/image";

export interface IGalleryRepository {

    findImage(by: { id?: string, parentId?: string }, options?: RepositoryFindOptions): Promise<Optional<Image>>;

    countImages(by: { id?: string, parentId?: string }, options?: RepositoryFindOptions): Promise<number>;

    addImage(image: Image): Promise<{ id: string }>;

    updateImage(image: Image): Promise<void>;

    removeImage(imageId: string): Promise<void>;

    findImages(by?: { id?: string, parentId?: string }, options?: RepositoryFindOptions): Promise<Image[]>;

}