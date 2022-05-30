import { IResponseCreateWallet } from './idbwallet';

export interface IUserObject {
    /** local contact id */
    id?: number;

    // input fields
    first_name?: string;
    last_name?: string;
    email?: string;
    phone_number?: string;
    date_of_birth?: string;
    country?: string;
    password_hash?: string;
    line_1?: string
    line_2?: string
    city?: string
    state?: string
    zip?: string
    // verification field
    gender?: string; // male female other not_applicable
    identification_type?: string
    identification_number?: string
    verification_status?: string;



    /** wallet */
    contact_id?: string;
    customer_id?: string;
    ewallet_id?: string;
    ewallet_status?: string
    ewallet_category?: any
    wallet_currency?: string
    wallet_alias?: string
    wallet_balance?: number
    wallet_received_balance?: number
    wallet_on_hold_balance?: number
    wallet_reserve_balance?: number


    // More data
    meta?: {
        rapyd_wallet_data?:IResponseCreateWallet.Root
        rapyd_contact_data?:IResponseCreateWallet.Daum
        customer?:ICreateCustomerResponse
    };
    timestamp?: number;

}




export interface ICreateCustomerResponse {
    id: string
    delinquent: boolean
    discount: any
    name: string
    default_payment_method: string
    description: string
    email: string
    phone_number: string
    invoice_prefix: string
    addresses: any[]
    payment_methods: any
    subscriptions: any
    created_at: number
    metadata: any
    business_vat_id: string
    ewallet: string
}
