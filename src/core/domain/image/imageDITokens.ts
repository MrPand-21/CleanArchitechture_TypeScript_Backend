export class ImageDITokens {

    // Use-cases

    public static readonly CreateImageUseCase: unique symbol = Symbol('CreateImageUseCase');
    public static readonly GetImagesUseCase: unique symbol = Symbol('GetImagexUseCase');
    public static readonly GetImageUseCase: unique symbol = Symbol('GetImageUseCase');
    public static readonly RemoveImageUseCase: unique symbol = Symbol('RemoveImageUseCase');

    // Handlers

    public static readonly DoesImageExistQueryHandler: unique symbol = Symbol('DoesImageExistQueryHandler');
    public static readonly GetImageQueryHandler: unique symbol = Symbol('GetImageQueryHandler');

    // Repositories

    public static readonly ImageRepository: unique symbol = Symbol('ImageRepository');

}