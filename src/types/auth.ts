export type ILogin = {
	email: string;
	password: string;
};


export interface ILoginResponse {
    user:            User;
    organization_id: string;
    access_token:    string;
    refresh_token:   string;
}

export interface User {
    object:              string;
    id:                  string;
    email:               string;
    first_name:          string;
    last_name:           string;
    email_verified:      boolean;
    profile_picture_url: string;
    created_at:          Date;
    updated_at:          Date;
}
