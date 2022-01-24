export class Hero{
    constructor(public id: number,
                public name: string,
                public picturePath: string,
                public isTop: boolean,                                
                public quotes?: string,
                public informations?: Array<string>     
        ){}
}