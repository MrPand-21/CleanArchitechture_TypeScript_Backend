export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type ResultDescription = {
    code: number,
    message: string,
};

export type CreateExceptionPayload<TData> = {
    resultDescription: ResultDescription,
    overrideMessage?: string,
    data?: TData
};

export type ClassValidationDetails = {
    context: string;
    errors: ClassValidationErrors[],
};

export type ClassValidationErrors = {
    property: string,
    message: string[]
};
