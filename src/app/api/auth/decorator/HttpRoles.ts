import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../../../core/common/utils/Enums';

export const HttpRoles = (...roles: UserRole[]) => SetMetadata('roles', roles);