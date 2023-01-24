import {XMLBuilder, XMLParser} from 'fast-xml-parser';

const globalOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  // preserveOrder: true
};

export const xmlParser: XMLParser = new XMLParser({
  parseAttributeValue: true,
  allowBooleanAttributes: true,
  ...globalOptions
});

export const xmlBuilder: XMLBuilder = new XMLBuilder({
  suppressBooleanAttributes: false,
  format: true,
  ...globalOptions
});
