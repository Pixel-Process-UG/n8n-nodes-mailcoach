import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
	NodeOperationError,
} from 'n8n-workflow';

export class Mailcoach implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Mailcoach',
		name: 'mailcoach',
		icon: 'file:mailcoach.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Mailcoach API - Manage email lists, subscribers, campaigns, and transactional emails',
		defaults: {
			name: 'Mailcoach',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'mailcoachApi',
				required: true,
			},
		],
		properties: [
			// Resource
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Automation',
						value: 'automation',
					},
					{
						name: 'Campaign',
						value: 'campaign',
					},
					{
						name: 'Email List',
						value: 'emailList',
					},
					{
						name: 'Subscriber',
						value: 'subscriber',
					},
					{
						name: 'Tag',
						value: 'tag',
					},
					{
						name: 'Transactional Mail',
						value: 'transactionalMail',
					},
				],
				default: 'emailList',
			},

			// Email List Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['emailList'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create an email list',
						action: 'Create an email list',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete an email list',
						action: 'Delete an email list',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get an email list',
						action: 'Get an email list',
					},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get all email lists',
						action: 'Get all email lists',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update an email list',
						action: 'Update an email list',
					},
				],
				default: 'getAll',
			},

			// Campaign Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['campaign'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a campaign',
						action: 'Create a campaign',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a campaign',
						action: 'Delete a campaign',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get a campaign',
						action: 'Get a campaign',
					},
					{
						name: 'Get Bounces',
						value: 'getBounces',
						description: 'Get campaign bounces',
						action: 'Get campaign bounces',
					},
					{
						name: 'Get Clicks',
						value: 'getClicks',
						description: 'Get campaign clicks',
						action: 'Get campaign clicks',
					},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get all campaigns',
						action: 'Get all campaigns',
					},
					{
						name: 'Get Opens',
						value: 'getOpens',
						description: 'Get campaign opens',
						action: 'Get campaign opens',
					},
					{
						name: 'Get Unsubscribes',
						value: 'getUnsubscribes',
						description: 'Get campaign unsubscribes',
						action: 'Get campaign unsubscribes',
					},
					{
						name: 'Send',
						value: 'send',
						description: 'Send a campaign',
						action: 'Send a campaign',
					},
					{
						name: 'Send Test',
						value: 'sendTest',
						description: 'Send a test email for a campaign',
						action: 'Send a test email for a campaign',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update a campaign',
						action: 'Update a campaign',
					},
				],
				default: 'getAll',
			},

			// Subscriber Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['subscriber'],
					},
				},
				options: [
					{
						name: 'Add Tags',
						value: 'addTags',
						description: 'Add tags to a subscriber',
						action: 'Add tags to a subscriber',
					},
					{
						name: 'Confirm',
						value: 'confirm',
						description: 'Confirm a subscriber',
						action: 'Confirm a subscriber',
					},
					{
						name: 'Create',
						value: 'create',
						description: 'Create a subscriber',
						action: 'Create a subscriber',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a subscriber',
						action: 'Delete a subscriber',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get a subscriber',
						action: 'Get a subscriber',
					},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get all subscribers',
						action: 'Get all subscribers',
					},
					{
						name: 'Remove Tags',
						value: 'removeTags',
						description: 'Remove tags from a subscriber',
						action: 'Remove tags from a subscriber',
					},
					{
						name: 'Resend Confirmation',
						value: 'resendConfirmation',
						description: 'Resend confirmation email',
						action: 'Resend confirmation email',
					},
					{
						name: 'Resubscribe',
						value: 'resubscribe',
						description: 'Resubscribe a subscriber',
						action: 'Resubscribe a subscriber',
					},
					{
						name: 'Unsubscribe',
						value: 'unsubscribe',
						description: 'Unsubscribe a subscriber',
						action: 'Unsubscribe a subscriber',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update a subscriber',
						action: 'Update a subscriber',
					},
				],
				default: 'getAll',
			},

			// Tag Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['tag'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a tag',
						action: 'Create a tag',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a tag',
						action: 'Delete a tag',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update a tag',
						action: 'Update a tag',
					},
				],
				default: 'create',
			},

			// Transactional Mail Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						description: 'Get a transactional mail',
						action: 'Get a transactional mail',
					},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get all transactional mails',
						action: 'Get all transactional mails',
					},
					{
						name: 'Get Template',
						value: 'getTemplate',
						description: 'Get a transactional mail template',
						action: 'Get a transactional mail template',
					},
					{
						name: 'Get Templates',
						value: 'getTemplates',
						description: 'Get all transactional mail templates',
						action: 'Get all transactional mail templates',
					},
					{
						name: 'Send',
						value: 'send',
						description: 'Send a transactional email',
						action: 'Send a transactional email',
					},
				],
				default: 'send',
			},

			// Automation Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['automation'],
					},
				},
				options: [
					{
						name: 'Trigger',
						value: 'trigger',
						description: 'Trigger an automation',
						action: 'Trigger an automation',
					},
				],
				default: 'trigger',
			},

			// =====================================
			// Email List Fields
			// =====================================
			{
				displayName: 'Email List ID',
				name: 'emailListId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['emailList'],
						operation: ['get', 'update', 'delete'],
					},
				},
				default: '',
				description: 'The UUID of the email list',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['emailList'],
						operation: ['create'],
					},
				},
				default: '',
				description: 'Name of the email list',
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['emailList'],
						operation: ['create', 'update'],
					},
				},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Name of the email list',
					},
					{
						displayName: 'Default From Email',
						name: 'default_from_email',
						type: 'string',
						default: '',
						description: 'Default sender email address',
					},
					{
						displayName: 'Default From Name',
						name: 'default_from_name',
						type: 'string',
						default: '',
						description: 'Default sender name',
					},
					{
						displayName: 'Default Reply To Email',
						name: 'default_reply_to_email',
						type: 'string',
						default: '',
						description: 'Default reply-to email address',
					},
					{
						displayName: 'Default Reply To Name',
						name: 'default_reply_to_name',
						type: 'string',
						default: '',
						description: 'Default reply-to name',
					},
					{
						displayName: 'Allow Form Subscriptions',
						name: 'allow_form_subscriptions',
						type: 'boolean',
						default: true,
						description: 'Whether to allow form subscriptions',
					},
					{
						displayName: 'Requires Confirmation',
						name: 'requires_confirmation',
						type: 'boolean',
						default: true,
						description: 'Whether new subscribers need to confirm',
					},
					{
						displayName: 'Confirmation Mail Subject',
						name: 'confirmation_mail_subject',
						type: 'string',
						default: '',
						description: 'Subject line for confirmation emails',
					},
					{
						displayName: 'Confirmation Mail Content',
						name: 'confirmation_mail_content',
						type: 'string',
						typeOptions: {
							rows: 4,
						},
						default: '',
						description: 'Content for confirmation emails',
					},
				],
			},
			{
				displayName: 'Return All',
				name: 'returnAll',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['emailList'],
						operation: ['getAll'],
					},
				},
				default: false,
				description: 'Whether to return all results or only up to a given limit',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['emailList'],
						operation: ['getAll'],
						returnAll: [false],
					},
				},
				typeOptions: {
					minValue: 1,
					maxValue: 1000,
				},
				default: 100,
				description: 'Max number of results to return',
			},

			// =====================================
			// Campaign Fields
			// =====================================
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['campaign'],
						operation: ['get', 'update', 'delete', 'send', 'sendTest', 'getOpens', 'getClicks', 'getBounces', 'getUnsubscribes'],
					},
				},
				default: '',
				description: 'The UUID of the campaign',
			},
			{
				displayName: 'Email List ID',
				name: 'emailListId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['campaign'],
						operation: ['create'],
					},
				},
				default: '',
				description: 'The UUID of the email list',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['campaign'],
						operation: ['create'],
					},
				},
				default: '',
				description: 'Name of the campaign',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['campaign'],
						operation: ['create', 'update'],
					},
				},
				default: '',
				description: 'Email subject line',
			},
			{
				displayName: 'Test Email',
				name: 'testEmail',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['campaign'],
						operation: ['sendTest'],
					},
				},
				default: '',
				description: 'Email address(es) to send test to (comma-separated for multiple)',
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['campaign'],
						operation: ['create', 'update'],
					},
				},
				options: [
					{
						displayName: 'From Email',
						name: 'from_email',
						type: 'string',
						default: '',
						description: 'Sender email address',
					},
					{
						displayName: 'From Name',
						name: 'from_name',
						type: 'string',
						default: '',
						description: 'Sender name',
					},
					{
						displayName: 'Reply To Email',
						name: 'reply_to_email',
						type: 'string',
						default: '',
						description: 'Reply-to email address',
					},
					{
						displayName: 'Reply To Name',
						name: 'reply_to_name',
						type: 'string',
						default: '',
						description: 'Reply-to name',
					},
					{
						displayName: 'Template UUID',
						name: 'template_uuid',
						type: 'string',
						default: '',
						description: 'UUID of the template to use',
					},
					{
						displayName: 'HTML',
						name: 'html',
						type: 'string',
						typeOptions: {
							rows: 4,
						},
						default: '',
						description: 'HTML content of the email',
					},
					{
						displayName: 'Structured HTML',
						name: 'structured_html',
						type: 'string',
						typeOptions: {
							rows: 4,
						},
						default: '',
						description: 'Structured HTML content',
					},
					{
						displayName: 'Email HTML',
						name: 'email_html',
						type: 'string',
						typeOptions: {
							rows: 4,
						},
						default: '',
						description: 'Final email HTML',
					},
					{
						displayName: 'Track Opens',
						name: 'track_opens',
						type: 'boolean',
						default: true,
						description: 'Whether to track email opens',
					},
					{
						displayName: 'Track Clicks',
						name: 'track_clicks',
						type: 'boolean',
						default: true,
						description: 'Whether to track link clicks',
					},
					{
						displayName: 'UTM Tags',
						name: 'utm_tags',
						type: 'boolean',
						default: false,
						description: 'Whether to add UTM tags',
					},
					{
						displayName: 'Segment UUID',
						name: 'segment_uuid',
						type: 'string',
						default: '',
						description: 'UUID of segment to send to',
					},
					{
						displayName: 'Fields',
						name: 'fields',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						description: 'Template field values',
						options: [
							{
								name: 'field',
								displayName: 'Field',
								values: [
									{
										displayName: 'Key',
										name: 'key',
										type: 'string',
										default: '',
									},
									{
										displayName: 'Value',
										name: 'value',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'Return All',
				name: 'returnAll',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['campaign'],
						operation: ['getAll', 'getOpens', 'getClicks', 'getBounces', 'getUnsubscribes'],
					},
				},
				default: false,
				description: 'Whether to return all results or only up to a given limit',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['campaign'],
						operation: ['getAll', 'getOpens', 'getClicks', 'getBounces', 'getUnsubscribes'],
						returnAll: [false],
					},
				},
				typeOptions: {
					minValue: 1,
					maxValue: 1000,
				},
				default: 100,
				description: 'Max number of results to return',
			},

			// =====================================
			// Subscriber Fields
			// =====================================
			{
				displayName: 'Email List ID',
				name: 'emailListId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['subscriber'],
						operation: ['create', 'getAll'],
					},
				},
				default: '',
				description: 'The UUID of the email list',
			},
			{
				displayName: 'Subscriber ID',
				name: 'subscriberId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['subscriber'],
						operation: ['get', 'update', 'delete', 'confirm', 'unsubscribe', 'resubscribe', 'resendConfirmation', 'addTags', 'removeTags'],
					},
				},
				default: '',
				description: 'The UUID of the subscriber',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['subscriber'],
						operation: ['addTags', 'removeTags'],
					},
				},
				default: '',
				description: 'Comma-separated list of tags to add or remove',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['subscriber'],
						operation: ['create'],
					},
				},
				default: '',
				description: 'Email address of the subscriber',
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['subscriber'],
						operation: ['create', 'update'],
					},
				},
				options: [
					{
						displayName: 'First Name',
						name: 'first_name',
						type: 'string',
						default: '',
						description: 'First name of the subscriber',
					},
					{
						displayName: 'Last Name',
						name: 'last_name',
						type: 'string',
						default: '',
						description: 'Last name of the subscriber',
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'string',
						default: '',
						description: 'Comma-separated list of tags',
					},
					{
						displayName: 'Extra Attributes',
						name: 'extra_attributes',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						description: 'Custom attributes',
						options: [
							{
								name: 'attribute',
								displayName: 'Attribute',
								values: [
									{
										displayName: 'Key',
										name: 'key',
										type: 'string',
										default: '',
									},
									{
										displayName: 'Value',
										name: 'value',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'Filters',
				name: 'filters',
				type: 'collection',
				placeholder: 'Add Filter',
				default: {},
				displayOptions: {
					show: {
						resource: ['subscriber'],
						operation: ['getAll'],
					},
				},
				options: [
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						default: '',
						description: 'Filter by email address',
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						options: [
							{
								name: 'Subscribed',
								value: 'subscribed',
							},
							{
								name: 'Unsubscribed',
								value: 'unsubscribed',
							},
							{
								name: 'Unconfirmed',
								value: 'unconfirmed',
							},
						],
						default: 'subscribed',
						description: 'Filter by subscription status',
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'string',
						default: '',
						description: 'Filter by tags (comma-separated)',
					},
				],
			},
			{
				displayName: 'Return All',
				name: 'returnAll',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['subscriber'],
						operation: ['getAll'],
					},
				},
				default: false,
				description: 'Whether to return all results or only up to a given limit',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['subscriber'],
						operation: ['getAll'],
						returnAll: [false],
					},
				},
				typeOptions: {
					minValue: 1,
					maxValue: 1000,
				},
				default: 100,
				description: 'Max number of results to return',
			},

			// =====================================
			// Tag Fields
			// =====================================
			{
				displayName: 'Email List ID',
				name: 'emailListId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['create', 'update', 'delete'],
					},
				},
				default: '',
				description: 'The UUID of the email list',
			},
			{
				displayName: 'Tag ID',
				name: 'tagId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['update', 'delete'],
					},
				},
				default: '',
				description: 'The UUID of the tag',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['create', 'update'],
					},
				},
				default: '',
				description: 'Name of the tag',
			},

			// =====================================
			// Transactional Mail Fields
			// =====================================
			{
				displayName: 'Mail ID',
				name: 'mailId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
						operation: ['get'],
					},
				},
				default: '',
				description: 'The UUID of the transactional mail',
			},
			{
				displayName: 'Template ID',
				name: 'templateId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
						operation: ['getTemplate'],
					},
				},
				default: '',
				description: 'The UUID of the template',
			},
			{
				displayName: 'Mail Name',
				name: 'mailName',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
						operation: ['send'],
					},
				},
				default: '',
				description: 'Name of the transactional mail template',
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
						operation: ['send'],
					},
				},
				default: '',
				description: 'Sender email address',
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
						operation: ['send'],
					},
				},
				default: '',
				description: 'Recipient email address',
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
						operation: ['send'],
					},
				},
				options: [
					{
						displayName: 'Subject',
						name: 'subject',
						type: 'string',
						default: '',
						description: 'Email subject (overrides template)',
					},
					{
						displayName: 'CC',
						name: 'cc',
						type: 'string',
						default: '',
						description: 'CC email addresses',
					},
					{
						displayName: 'BCC',
						name: 'bcc',
						type: 'string',
						default: '',
						description: 'BCC email addresses',
					},
					{
						displayName: 'Reply To',
						name: 'reply_to',
						type: 'string',
						default: '',
						description: 'Reply-to email address',
					},
					{
						displayName: 'Replacements',
						name: 'replacements',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						description: 'Template variable replacements',
						options: [
							{
								name: 'replacement',
								displayName: 'Replacement',
								values: [
									{
										displayName: 'Key',
										name: 'key',
										type: 'string',
										default: '',
									},
									{
										displayName: 'Value',
										name: 'value',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'Store',
						name: 'store',
						type: 'boolean',
						default: true,
						description: 'Whether to store the email in Mailcoach',
					},
					{
						displayName: 'Fake',
						name: 'fake',
						type: 'boolean',
						default: false,
						description: 'Whether this is a test email (won\'t actually send)',
					},
				],
			},
			{
				displayName: 'Return All',
				name: 'returnAll',
				type: 'boolean',
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
						operation: ['getAll', 'getTemplates'],
					},
				},
				default: false,
				description: 'Whether to return all results or only up to a given limit',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				displayOptions: {
					show: {
						resource: ['transactionalMail'],
						operation: ['getAll', 'getTemplates'],
						returnAll: [false],
					},
				},
				typeOptions: {
					minValue: 1,
					maxValue: 1000,
				},
				default: 100,
				description: 'Max number of results to return',
			},

			// =====================================
			// Automation Fields
			// =====================================
			{
				displayName: 'Automation ID',
				name: 'automationId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['automation'],
						operation: ['trigger'],
					},
				},
				default: '',
				description: 'The UUID of the automation',
			},
			{
				displayName: 'Subscriber IDs',
				name: 'subscriberIds',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['automation'],
						operation: ['trigger'],
					},
				},
				default: '',
				description: 'Comma-separated list of subscriber UUIDs to trigger automation for',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);
		
		// Get credentials to access the endpoint
		const credentials = await this.getCredentials('mailcoachApi');
		const baseUrl = (credentials.endpoint as string).replace(/\/$/, ''); // Remove trailing slash

		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'emailList') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/email-lists`,
								qs: returnAll ? {} : { per_page: limit },
							},
						);

						returnData.push(...(response.data || []));
					} else if (operation === 'get') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/email-lists/${emailListId}`,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							name,
							...additionalFields,
						};

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/email-lists`,
								body,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'update') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'PUT',
								url: `${baseUrl}/email-lists/${emailListId}`,
								body: additionalFields,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'delete') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'DELETE',
								url: `${baseUrl}/email-lists/${emailListId}`,
							},
						);

						returnData.push({ success: true });
					}
				} else if (resource === 'campaign') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/campaigns`,
								qs: returnAll ? {} : { per_page: limit },
							},
						);

						returnData.push(...(response.data || []));
					} else if (operation === 'get') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/campaigns/${campaignId}`,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'create') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;
						const name = this.getNodeParameter('name', i) as string;
						const subject = this.getNodeParameter('subject', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							email_list_uuid: emailListId,
							name,
							subject,
							...additionalFields,
						};

						// Handle fields collection
						if (additionalFields.fields) {
							const fieldsData = (additionalFields.fields as IDataObject).field as Array<{
								key: string;
								value: string;
							}>;
							if (fieldsData && fieldsData.length > 0) {
								const fields: IDataObject = {};
								for (const field of fieldsData) {
									fields[field.key] = field.value;
								}
								body.fields = fields;
							}
							delete body.fields;
						}

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/campaigns`,
								body,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'update') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						// Handle fields collection
						if (additionalFields.fields) {
							const fieldsData = (additionalFields.fields as IDataObject).field as Array<{
								key: string;
								value: string;
							}>;
							if (fieldsData && fieldsData.length > 0) {
								const fields: IDataObject = {};
								for (const field of fieldsData) {
									fields[field.key] = field.value;
								}
								additionalFields.fields = fields;
							}
						}

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'PUT',
								url: `${baseUrl}/campaigns/${campaignId}`,
								body: additionalFields,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'delete') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'DELETE',
								url: `${baseUrl}/campaigns/${campaignId}`,
							},
						);

						returnData.push({ success: true });
					} else if (operation === 'send') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/campaigns/${campaignId}/send`,
							},
						);

						returnData.push({ success: true, message: 'Campaign sent' });
					} else if (operation === 'sendTest') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						const testEmail = this.getNodeParameter('testEmail', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/campaigns/${campaignId}/send-test`,
								body: { email: testEmail },
							},
						);

						returnData.push({ success: true, message: 'Test email sent' });
					} else if (operation === 'getOpens') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/campaigns/${campaignId}/opens`,
								qs: returnAll ? {} : { per_page: limit },
							},
						);

						returnData.push(...(response.data || []));
					} else if (operation === 'getClicks') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/campaigns/${campaignId}/clicks`,
								qs: returnAll ? {} : { per_page: limit },
							},
						);

						returnData.push(...(response.data || []));
					} else if (operation === 'getBounces') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/campaigns/${campaignId}/bounces`,
								qs: returnAll ? {} : { per_page: limit },
							},
						);

						returnData.push(...(response.data || []));
					} else if (operation === 'getUnsubscribes') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/campaigns/${campaignId}/unsubscribes`,
								qs: returnAll ? {} : { per_page: limit },
							},
						);

						returnData.push(...(response.data || []));
					}
				} else if (resource === 'subscriber') {
					if (operation === 'getAll') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;
						const filters = this.getNodeParameter('filters', i) as IDataObject;

						const qs: IDataObject = returnAll ? {} : { per_page: limit };

						// Add filters
						if (filters.email) {
							qs['filter[email]'] = filters.email;
						}
						if (filters.status) {
							qs['filter[status]'] = filters.status;
						}
						if (filters.tags) {
							qs['filter[tags]'] = filters.tags;
						}

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/email-lists/${emailListId}/subscribers`,
								qs,
							},
						);

						returnData.push(...(response.data || []));
					} else if (operation === 'get') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/subscribers/${subscriberId}`,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'create') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;
						const email = this.getNodeParameter('email', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							email,
							...additionalFields,
						};

						// Handle tags
						if (additionalFields.tags && typeof additionalFields.tags === 'string') {
							body.tags = (additionalFields.tags as string).split(',').map((tag) => tag.trim());
						}

						// Handle extra attributes
						if (additionalFields.extra_attributes) {
							const attributesData = (additionalFields.extra_attributes as IDataObject)
								.attribute as Array<{
								key: string;
								value: string;
							}>;
							if (attributesData && attributesData.length > 0) {
								const extraAttributes: IDataObject = {};
								for (const attr of attributesData) {
									extraAttributes[attr.key] = attr.value;
								}
								body.extra_attributes = extraAttributes;
							}
							delete body.extra_attributes;
						}

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/email-lists/${emailListId}/subscribers`,
								body,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'update') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						// Handle tags
						if (additionalFields.tags && typeof additionalFields.tags === 'string') {
							additionalFields.tags = (additionalFields.tags as string)
								.split(',')
								.map((tag) => tag.trim());
						}

						// Handle extra attributes
						if (additionalFields.extra_attributes) {
							const attributesData = (additionalFields.extra_attributes as IDataObject)
								.attribute as Array<{
								key: string;
								value: string;
							}>;
							if (attributesData && attributesData.length > 0) {
								const extraAttributes: IDataObject = {};
								for (const attr of attributesData) {
									extraAttributes[attr.key] = attr.value;
								}
								additionalFields.extra_attributes = extraAttributes;
							}
						}

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'PATCH',
								url: `${baseUrl}/subscribers/${subscriberId}`,
								body: additionalFields,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'delete') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'DELETE',
								url: `${baseUrl}/subscribers/${subscriberId}`,
							},
						);

						returnData.push({ success: true });
					} else if (operation === 'confirm') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/subscribers/${subscriberId}/confirm`,
							},
						);

						returnData.push({ success: true, message: 'Subscriber confirmed' });
					} else if (operation === 'unsubscribe') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/subscribers/${subscriberId}/unsubscribe`,
							},
						);

						returnData.push({ success: true, message: 'Subscriber unsubscribed' });
					} else if (operation === 'resubscribe') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/subscribers/${subscriberId}/resubscribe`,
							},
						);

						returnData.push({ success: true, message: 'Subscriber resubscribed' });
					} else if (operation === 'resendConfirmation') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/subscribers/${subscriberId}/resend-confirmation`,
							},
						);

						returnData.push({ success: true, message: 'Confirmation email resent' });
					} else if (operation === 'addTags') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;
						const tags = this.getNodeParameter('tags', i) as string;

						const tagsArray = tags.split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0);

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/subscribers/${subscriberId}/tags`,
								body: { tags: tagsArray },
							},
						);

						returnData.push(response.data || response || { success: true, message: 'Tags added' });
					} else if (operation === 'removeTags') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;
						const tags = this.getNodeParameter('tags', i) as string;

						const tagsArray = tags.split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0);

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/subscribers/${subscriberId}/tags/remove`,
								body: { tags: tagsArray },
							},
						);

						returnData.push(response.data || response || { success: true, message: 'Tags removed' });
					}
				} else if (resource === 'tag') {
					if (operation === 'create') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;
						const name = this.getNodeParameter('name', i) as string;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/email-lists/${emailListId}/tags`,
								body: { name },
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'update') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;
						const tagId = this.getNodeParameter('tagId', i) as string;
						const name = this.getNodeParameter('name', i) as string;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'PUT',
								url: `${baseUrl}/email-lists/${emailListId}/tags/${tagId}`,
								body: { name },
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'delete') {
						const emailListId = this.getNodeParameter('emailListId', i) as string;
						const tagId = this.getNodeParameter('tagId', i) as string;

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'DELETE',
								url: `${baseUrl}/email-lists/${emailListId}/tags/${tagId}`,
							},
						);

						returnData.push({ success: true });
					}
				} else if (resource === 'transactionalMail') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/transactional-mails`,
								qs: returnAll ? {} : { per_page: limit },
							},
						);

						returnData.push(...(response.data || []));
					} else if (operation === 'get') {
						const mailId = this.getNodeParameter('mailId', i) as string;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/transactional-mails/${mailId}`,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'getTemplates') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const limit = this.getNodeParameter('limit', i, 100) as number;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/transactional-mails/templates`,
								qs: returnAll ? {} : { per_page: limit },
							},
						);

						returnData.push(...(response.data || []));
					} else if (operation === 'getTemplate') {
						const templateId = this.getNodeParameter('templateId', i) as string;

						const response = await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'GET',
								url: `${baseUrl}/transactional-mails/templates/${templateId}`,
							},
						);

						returnData.push(response.data || response);
					} else if (operation === 'send') {
						const mailName = this.getNodeParameter('mailName', i) as string;
						const from = this.getNodeParameter('from', i) as string;
						const to = this.getNodeParameter('to', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							mail_name: mailName,
							from,
							to,
							...additionalFields,
						};

						// Handle replacements
						if (additionalFields.replacements) {
							const replacementsData = (additionalFields.replacements as IDataObject)
								.replacement as Array<{
								key: string;
								value: string;
							}>;
							if (replacementsData && replacementsData.length > 0) {
								const replacements: IDataObject = {};
								for (const repl of replacementsData) {
									replacements[repl.key] = repl.value;
								}
								body.replacements = replacements;
							}
							delete body.replacements;
						}

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/transactional-mails/send`,
								body,
							},
						);

						returnData.push({ success: true, message: 'Transactional email sent' });
					}
				} else if (resource === 'automation') {
					if (operation === 'trigger') {
						const automationId = this.getNodeParameter('automationId', i) as string;
						const subscriberIds = this.getNodeParameter('subscriberIds', i) as string;

						const subscribers = subscriberIds.split(',').map((id) => id.trim());

						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'mailcoachApi',
							{
								method: 'POST',
								url: `${baseUrl}/automations/${automationId}/trigger`,
								body: { subscribers },
							},
						);

						returnData.push({ success: true, message: 'Automation triggered' });
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}
		}

		return [this.helpers.returnJsonArray(returnData)];
	}
}

