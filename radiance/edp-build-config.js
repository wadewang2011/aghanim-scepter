/**
 * @file config edp-build
 * @author EFE, xiezhenzong
 */

exports.input = __dirname;

var path = require('path');
exports.output = path.resolve(__dirname, 'output');

var pageEntries = 'html,htm,phtml,tpl,vm';

exports.getProcessors = function () {
    var lessProcessor = new LessCompiler({
        files: ['src/resources/css/**/*.less']
    });
    var pathMapperProcessor = new PathMapper({
        replacements: [
            {
                type: 'html', tag: 'link',
                attribute: 'href', extnames: pageEntries
            },
            {
                type: 'html', tag: 'img',
                attribute: 'src', extnames: pageEntries
            },
            {
                type: 'html', tag: 'script',
                attribute: 'src', extnames: pageEntries
            },
            {
                extnames: 'css,less', replacer: 'css'
            }
        ],
        mapper: function (value) {
            if (/dep\//.test(value)) {
                return value.replace('src', 'asset');
            }
            return value;
        }
    });

    return [lessProcessor, new CssCompressor(), new JsCompressor(), pathMapperProcessor, new AddCopyright()];
};

exports.exclude = [
    'tool',
    'doc',
    'test',
    'debug',
    'module.conf',
    'dep/packages.manifest',
    'dep/*/*/test',
    'dep/*/*/doc',
    'dep/*/*/demo',
    'dep/*/*/tool',
    'dep/*/*/*.md',
    'dep/*/*/package.json',
    'edp-*',
    '.edpproj',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp',
    'README',
    'copyright.txt'
];

/* eslint-disable guard-for-in */
exports.injectProcessor = function (processors) {
    for (var key in processors) {
        global[key] = processors[key];
    }
};
