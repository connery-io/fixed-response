import { PluginDefinition, setupPluginServer } from 'connery';
import fixedTextResponse from './actions/fixed-text-response.js';

const pluginDefinition: PluginDefinition = {
  name: 'Fixed Response',
  description: 'This plugin provides simple actions with configurable fixed responses',
  actions: [fixedTextResponse],
};

const handler = await setupPluginServer(pluginDefinition);
export default handler;
