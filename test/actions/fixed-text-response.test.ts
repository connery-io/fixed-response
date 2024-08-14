import { handler } from '../../src/actions/fixed-text-response';

it('returns the same text as specified in the input', async () => {
  const input = {
    textToReturn: 'Hello, world!\n\nThis is a test.',
  };

  const result = await handler({ input });

  expect(result).toEqual({
    textResponse: input.textToReturn,
  });
});
