import { ResultDescription, CreateExceptionPayload, Optional } from "../utils/CommonTypes";

export class Exception<TData> extends Error {

    public readonly code: number;

    public readonly data: Optional<TData>;

    private constructor(resultDescription: ResultDescription, overrideMessage?: string, data?: TData) {
        super();

        this.name = this.constructor.name;
        this.code = resultDescription.code;
        this.data = data;
        this.message = overrideMessage || resultDescription.message;

        Error.captureStackTrace(this, this.constructor);
    }

    public static new<TData>(payload: CreateExceptionPayload<TData>): Exception<TData> {
        return new Exception(payload.resultDescription, payload.overrideMessage, payload.data);
    }

}