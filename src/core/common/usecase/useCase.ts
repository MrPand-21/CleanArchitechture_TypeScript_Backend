export interface UseCase<TIUseCase, TUseCaseResult> {
    execute(port?: TIUseCase): Promise<TUseCaseResult>;
}