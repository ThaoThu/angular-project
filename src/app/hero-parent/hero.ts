export interface Hero{
    name: string;
}
export interface Author{
    id:number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    ipAddress: string;
}

export const authors = [
    {
        id:1,
        firstName: 'Thao',
        lastName: 'Nguyen',
        email:'thaothung.04@gmail.com',
        gender: 'female',
        ipAddress: '121221'
    },
    {
        id:2,
        firstName: 'Thao1',
        lastName: 'Nguyen',
        email:'thaothung.04@gmail.com',
        gender: 'female',
        ipAddress: '121221'
    }
]
export const HEROES = [
    {
        name: 'Dr IQ',
     

    }
    ,
    {
        name: 'Ms Thao',
    }
]