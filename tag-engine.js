/*
 * @Author: Max Base
 * @Date: 2021-08-31, 2021-09-04
 * Repository: https://github.com/BaseMax/TinyTagEngineJS
 */

const tag_engine = (input, tags) => {
    if(tags === undefined || tags === []) tags = {};

    let res = input;

    for( let tag in tags) {
        const pattern = `\\[(\\s*|)${tag}(\\s*|)(\\:([a-zA-Z0-9]+)|)\\]`;
        console.log(tag, pattern);
        const reg = new RegExp(pattern, 'g');
        res = res.replace(reg, function(e) {
            const id = e.match(reg);
            if(!id || id[4] === undefined) {
                id[4] = "";
            }
            return tags[tag](id[4]);
        });
    }

    return res;
};
