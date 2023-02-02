import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../../../core/common/enums';

export const HttpRoles = (...roles: UserRole[]) => SetMetadata('roles', roles);