export enum UserRoleEnum {
    ADMIN = 'admin',
    TEACHER = 'teacher',
    STUDENT = 'student',
}

export enum CourseStatusEnum {
    ONGOING = 'ongoing',
    LOCKED = 'locked',
    FINISHED = 'finished',
}

export enum PaymentTypeEnum {
    IN_CASH = 'IN_CASH',
    SCOLARSHIP = 'SCOLARSHIP',
    FINANCED = 'financed',
}

export enum SexEnum {
    MALE = 'male',
    FEMALE = 'female',
}

export class User {
    email?: string;
    password?: string;
    role?: UserRoleEnum;
    lastLogin?: Date;
    passwordResetToken?: string;
    name?: string;
    document?: string;
    countryCode?: string;
    paymentType?: PaymentTypeEnum;
    courseStatus?: CourseStatusEnum;
    fathersName?: string;
    mothersName?: string;
    birthdate?: Date;
    scholarity?: string;
    placeOfBirth?: string;
    dateOfStart?: Date;
    dateOfEnd?: Date;
    sex?: SexEnum;
    observation?: string;
    // subjects: Subject[]
}
