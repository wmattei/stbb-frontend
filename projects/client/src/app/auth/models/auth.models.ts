

export interface Polo {
    nome: string;
    gerente: string;
    email: string;
    telefone?: any;
    celular?: any;
    rua?: any;
    bairro?: any;
    city_id: number;
    numero?: any;
    cep: string;
    complemento?: any;
    cnpj?: any;
    razao_social?: any;
}

export interface Otica {
    nome: string;
    email: string;
    telefone?: any;
    celular?: any;
    webiste?: any;
    rua?: any;
    bairro?: any;
    city_id: number;
    numero?: any;
    cep: string;
    complemento?: any;
    cnpj?: any;
    razao_social?: any;
    responsavel_nome?: any;
    responsavel_email?: any;
    responsavel_telefone?: any;
    cooperado: boolean;
    admin_aprovou: boolean;
    polo_id: number;
    city: any;
    polo: Polo;
}