import { ActionDefinition, ActionContext, OutputObject } from 'connery';

const actionDefinition: ActionDefinition = {
  key: 'fixedTextResponse',
  name: 'Fixed text response',
  description: 'This action returns a preconfigured text response',
  type: 'read',
  inputParameters: [
    {
      key: 'textToReturn',
      name: 'Text to return',
      description: 'The preconfigured text that will be returned by this action',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
  operation: {
    handler,
  },
  outputParameters: [
    {
      key: 'textResponse',
      name: 'Text response',
      type: 'string',
    },
  ],
};
export default actionDefinition;

export async function handler({ input }: ActionContext): Promise<OutputObject> {
  return {
    textResponse: decodeNewlines(input.textToReturn),
  };
}

// Decodes newlines as they are encoded in the input string
function decodeNewlines(input: string): string {
  return input.replace(/\\n/g, '\n');
}
