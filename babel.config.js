module.exports = function (api) {
    api.cache(true);
  
    const presets = ["react-native"];
    const plugins = [["transform-decorators-legacy"]];
  
    return {
      presets,
      plugins
    };
  }