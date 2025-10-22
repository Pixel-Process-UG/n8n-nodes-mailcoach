import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class MailcoachApi implements ICredentialType {
	name = 'mailcoachApi';
	displayName = 'Mailcoach API';
	documentationUrl = 'https://www.mailcoach.app/api-documentation';
	properties: INodeProperties[] = [
		{
			displayName: 'API Endpoint',
			name: 'endpoint',
			type: 'string',
			default: 'https://yourdomain.mailcoach.app/api',
			description: 'The Mailcoach API endpoint URL (e.g., https://yourdomain.mailcoach.app/api)',
			required: true,
		},
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Your Mailcoach API token. You can find this in the Mailcoach settings under API Tokens.',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '=Bearer {{$credentials.apiToken}}',
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.endpoint}}',
			url: '/email-lists',
			method: 'GET',
		},
	};
}

