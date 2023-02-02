import { User } from "../../../../../../core/domain/user/entity/user";
import { TypeOrmUser } from "../TypeOrmUser";

export class TypeOrmUserMapper {

    public static toOrmEntity(domainUser: User): TypeOrmUser {
        const ormUser: TypeOrmUser = new TypeOrmUser();

        ormUser.id = domainUser.getId();
        ormUser.firstName = domainUser.getFirstName() ? domainUser.getFirstName()! : '';
        ormUser.lastName = domainUser.getLastName() ? domainUser.getLastName()! : '';
        ormUser.email = domainUser.getEmail();
        ormUser.role = domainUser.getRole() ? domainUser.getRole()! : 0;
        ormUser.passwordHash = domainUser.getPasswordHash();

        ormUser.createdAt = domainUser.getCreatedAt();
        ormUser.lastEditedAt = domainUser.getlastEditedAt() as Date;
        ormUser.birthDate = domainUser.getbirthDate() as Date;

        return ormUser;
    }

    public static toOrmEntities(domainUsers: User[]): TypeOrmUser[] {
        return domainUsers.map(domainUser => this.toOrmEntity(domainUser));
    }

    public static toDomainEntity(ormUser: TypeOrmUser): User {

        const domainUser: User = new User({
            firstName: ormUser.firstName,
            lastName: ormUser.lastName,
            email: ormUser.email,
            role: ormUser.role,
            passwordHash: ormUser.passwordHash,
            id: ormUser.id,
            createdAt: ormUser.createdAt,
            lastEditedAt: ormUser.lastEditedAt,
            birthDate: ormUser.birthDate,
        });

        return domainUser;
    }

    public static toDomainEntities(ormUsers: TypeOrmUser[]): User[] {
        return ormUsers.map(ormUser => this.toDomainEntity(ormUser));
    }

}