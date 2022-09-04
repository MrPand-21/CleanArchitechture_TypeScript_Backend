import { TransactionalUseCase } from "../../../common/usecase/transactionalUseCase";
import { IRemoveImage } from "../abstract/usecase/iRemoveImage";

export interface RemoveImageUseCase extends TransactionalUseCase<IRemoveImage, void> { }