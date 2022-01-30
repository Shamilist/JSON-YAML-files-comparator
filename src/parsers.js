import yaml from 'js-yaml';

const parsers = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);

    case 'yml':
    case 'yaml':
      return yaml.load(data);

    default:
      return new Error(`Parsing a ${data} with '${extension}' extention is not possibly`);
  }
};

export default parsers;
