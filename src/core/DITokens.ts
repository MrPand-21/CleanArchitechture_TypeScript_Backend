export class DITokens {

    public static ImageDITokens = class {

        // Use-case
        public static readonly ImageService: unique symbol = Symbol('ImageService');

        // Handlers
        public static readonly ImageHandler: unique symbol = Symbol('ImageHandler');

        // Repositories
        public static readonly ImageRepository: unique symbol = Symbol('ImageRepository');

    }

    public static UserDITokens = class {

        // Use-case
        public static readonly UserService: unique symbol = Symbol('UserService');

        // Handler
        public static readonly UserHandler: unique symbol = Symbol('UserHandler');

        // Repositories
        public static readonly UserRepository: unique symbol = Symbol('UserRepository');

    }

    public static CoreDITokens = class {

        // CQERS
        public static readonly CommandBus: unique symbol = Symbol('CommandBus');
        public static readonly QueryBus: unique symbol = Symbol('QueryBus');
        public static readonly EventBus: unique symbol = Symbol('EventBus');

        // Data sources
        public static readonly DataSource: unique symbol = Symbol('DataSource');

    }
}