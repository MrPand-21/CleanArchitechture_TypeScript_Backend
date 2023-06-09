import { ResultDescription } from "../utils/CommonTypes";

export class Result {

    // Common

    public static SUCCESS: ResultDescription = {
        code: 200,
        message: 'Success.'
    };

    public static BAD_REQUEST_ERROR: ResultDescription = {
        code: 400,
        message: 'Bad request.'
    };

    public static UNAUTHORIZED_ERROR: ResultDescription = {
        code: 401,
        message: 'Unauthorized error.'
    };

    public static WRONG_CREDENTIALS_ERROR: ResultDescription = {
        code: 402,
        message: 'Wrong Credentials.'
    };

    public static ACCESS_DENIED_ERROR: ResultDescription = {
        code: 403,
        message: 'Access denied.'
    };

    public static INTERNAL_ERROR: ResultDescription = {
        code: 500,
        message: 'Internal error.'
    };

    public static ENTITY_NOT_FOUND_ERROR: ResultDescription = {
        code: 1000,
        message: 'Entity not found.'
    };

    public static ENTITY_VALIDATION_ERROR: ResultDescription = {
        code: 1001,
        message: 'Entity validation error.'
    };

    public static USE_CASE_PORT_VALIDATION_ERROR: ResultDescription = {
        code: 1002,
        message: 'Use-case port validation error.'
    };

    public static VALUE_OBJECT_VALIDATION_ERROR: ResultDescription = {
        code: 1003,
        message: 'Value object validation error.'
    };

    public static ENTITY_ALREADY_EXISTS_ERROR: ResultDescription = {
        code: 1004,
        message: 'Entity already exists.'
    };

}