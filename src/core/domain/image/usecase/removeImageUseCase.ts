import { TransactionalUseCase } from "../../../common/usecase/transactionalUseCase";
import { IRemoveImage } from "../abstract/usecase/IRemoveImage";

export interface RemoveImageUseCase extends TransactionalUseCase<IRemoveImage, void> { }