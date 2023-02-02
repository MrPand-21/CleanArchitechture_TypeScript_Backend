import { UseCase } from "./useCase";

export interface TransactionalUseCase<TIUseCase, TUseCaseResult> extends UseCase<TIUseCase, TUseCaseResult> {
    onCommit?: (result: TUseCaseResult, port: TIUseCase) => Promise<void>;
    onRollback?: (error: Error, port: TIUseCase) => Promise<void>
}