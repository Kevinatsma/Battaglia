export class User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    roles: {
        user: boolean,
        mod: boolean,
        admin: boolean
    };
}
