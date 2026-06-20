export interface user {
    id: number;
    login: string;
    html_url: string;
}

export interface response{
    items: user[];
}