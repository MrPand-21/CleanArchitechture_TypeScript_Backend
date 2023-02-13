import { get } from 'env-var';

export class DatabaseConfig {

    public static readonly TYPE: string = get('DB_TYPE').required().asString();

    public static readonly HOST: string = get('DB_HOST').required().asString();

    public static readonly PORT: number = get('DB_PORT').required().asPortNumber();

    public static readonly USERNAME: string = get('DB_USERNAME').required().asString();

    public static readonly PASSWORD: string = get('DB_PASSWORD').required().asString();

    public static readonly NAME: string = get('DB_NAME').required().asString();

    public static readonly LOG_ENABLE: boolean = get('DB_LOG_ENABLE').required().asBool();

    public static readonly IS_SYNCHRONIZE: boolean = get('DB_IS_SYNCHRONIZE').required().asBool();

}