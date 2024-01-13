type CompFields = {
    id?: string;
    created_at?: string;
};

export const CampaignStatusArray = ['Draft', 'Send', 'Archived'] as const;
export const EmailStatusArray = ['Draft', 'Complement'] as const;
export const SubscriberStatusArray = ['Ativo', 'Inativo', 'Complement'] as const;

type CampaignStatus = typeof CampaignStatusArray[number];
type EmailStatus = typeof EmailStatusArray[number];
type SubscriberStatus = typeof SubscriberStatusArray[number];

export type Campaign = CompFields & {
    name: string;
    from: string | undefined;
    subject: string | undefined;
    user_id?: string | undefined;
    email_id?: string | undefined;
    status?: CampaignStatus;
};

export type Email = CompFields & {
    title: string;
    content: string;
    status: EmailStatus;
};

export type Subscriber = CompFields & {
    email: string;
    owner_id: string;
    status: SubscriberStatus;
};

export type User = CompFields & {
    email: string;
};
